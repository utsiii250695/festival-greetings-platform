import { supabase } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { timeframe = '7d' } = req.query;

      // Calculate date range
      const now = new Date();
      const startDate = new Date();
      switch (timeframe) {
        case '24h':
          startDate.setDate(now.getDate() - 1);
          break;
        case '7d':
          startDate.setDate(now.getDate() - 7);
          break;
        case '30d':
          startDate.setDate(now.getDate() - 30);
          break;
        case '90d':
          startDate.setDate(now.getDate() - 90);
          break;
        default:
          startDate.setDate(now.getDate() - 7);
      }

      // Get all interactions within the timeframe
      const { data: interactions, error } = await supabase
        .from('user_interactions')
        .select('action, data, session_id, created_at')
        .gte('created_at', startDate.toISOString())
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching interactions:', error);
        return res.status(500).json({ error: 'Failed to fetch interactions' });
      }

      // Process daily funnel data
      const dailyFunnels = {};

      // Initialize daily buckets
      const currentDate = new Date(startDate);
      while (currentDate <= now) {
        const dateKey = currentDate.toISOString().split('T')[0];
        dailyFunnels[dateKey] = {
          date: dateKey,
          homepageVisits: new Set(),
          languageSelections: new Set(),
          festivalSelections: new Set(),
          templateSelections: new Set(),
          imageGenerations: new Set(),
          // Keep track of unique sessions for each step
          step1_sessions: new Set(), // homepage visits
          step2_sessions: new Set(), // language selections
          step3_sessions: new Set(), // festival selections
          step4_sessions: new Set(), // template selections
          step5_sessions: new Set(), // image generations
        };
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // Process each interaction
      interactions?.forEach(interaction => {
        const date = interaction.created_at.split('T')[0];
        const sessionId = interaction.session_id;

        if (!dailyFunnels[date]) return;

        switch (interaction.action) {
          case 'page_visit':
            // Check if it's a homepage visit
            const step = interaction.data?.step;
            if (step === 'welcome' || step === 'language_selection' || interaction.data?.page === '/home') {
              dailyFunnels[date].homepageVisits.add(sessionId);
              dailyFunnels[date].step1_sessions.add(sessionId);
            }
            break;

          case 'language_select':
            dailyFunnels[date].languageSelections.add(sessionId);
            dailyFunnels[date].step2_sessions.add(sessionId);
            break;

          case 'festival_select':
            dailyFunnels[date].festivalSelections.add(sessionId);
            dailyFunnels[date].step3_sessions.add(sessionId);
            break;

          case 'template_select':
            dailyFunnels[date].templateSelections.add(sessionId);
            dailyFunnels[date].step4_sessions.add(sessionId);
            break;

          case 'image_generated':
            dailyFunnels[date].imageGenerations.add(sessionId);
            dailyFunnels[date].step5_sessions.add(sessionId);
            break;
        }
      });

      // Convert Sets to counts and calculate conversion rates
      const processedFunnels = Object.values(dailyFunnels).map(day => {
        const step1 = day.step1_sessions.size;
        const step2 = day.step2_sessions.size;
        const step3 = day.step3_sessions.size;
        const step4 = day.step4_sessions.size;
        const step5 = day.step5_sessions.size;

        return {
          date: day.date,
          displayDate: new Date(day.date).toLocaleDateString(),
          funnel: {
            step1_homepage: step1,
            step2_language: step2,
            step3_festival: step3,
            step4_template: step4,
            step5_generated: step5,
          },
          conversionRates: {
            homepage_to_language: step1 > 0 ? Math.round((step2 / step1) * 100) : 0,
            language_to_festival: step2 > 0 ? Math.round((step3 / step2) * 100) : 0,
            festival_to_template: step3 > 0 ? Math.round((step4 / step3) * 100) : 0,
            template_to_generated: step4 > 0 ? Math.round((step5 / step4) * 100) : 0,
            overall_conversion: step1 > 0 ? Math.round((step5 / step1) * 100) : 0,
          },
          dropOffs: {
            after_homepage: step1 - step2,
            after_language: step2 - step3,
            after_festival: step3 - step4,
            after_template: step4 - step5,
          }
        };
      });

      // Calculate summary statistics
      const totalStats = processedFunnels.reduce((acc, day) => {
        acc.totalHomepageVisits += day.funnel.step1_homepage;
        acc.totalLanguageSelections += day.funnel.step2_language;
        acc.totalFestivalSelections += day.funnel.step3_festival;
        acc.totalTemplateSelections += day.funnel.step4_template;
        acc.totalImageGenerations += day.funnel.step5_generated;
        return acc;
      }, {
        totalHomepageVisits: 0,
        totalLanguageSelections: 0,
        totalFestivalSelections: 0,
        totalTemplateSelections: 0,
        totalImageGenerations: 0,
      });

      // Calculate overall conversion rates
      const overallConversion = {
        homepage_to_language: totalStats.totalHomepageVisits > 0
          ? Math.round((totalStats.totalLanguageSelections / totalStats.totalHomepageVisits) * 100) : 0,
        language_to_festival: totalStats.totalLanguageSelections > 0
          ? Math.round((totalStats.totalFestivalSelections / totalStats.totalLanguageSelections) * 100) : 0,
        festival_to_template: totalStats.totalFestivalSelections > 0
          ? Math.round((totalStats.totalTemplateSelections / totalStats.totalFestivalSelections) * 100) : 0,
        template_to_generated: totalStats.totalTemplateSelections > 0
          ? Math.round((totalStats.totalImageGenerations / totalStats.totalTemplateSelections) * 100) : 0,
        end_to_end_conversion: totalStats.totalHomepageVisits > 0
          ? Math.round((totalStats.totalImageGenerations / totalStats.totalHomepageVisits) * 100) : 0,
      };

      // Find biggest drop-off points
      const totalDropOffs = {
        after_homepage: totalStats.totalHomepageVisits - totalStats.totalLanguageSelections,
        after_language: totalStats.totalLanguageSelections - totalStats.totalFestivalSelections,
        after_festival: totalStats.totalFestivalSelections - totalStats.totalTemplateSelections,
        after_template: totalStats.totalTemplateSelections - totalStats.totalImageGenerations,
      };

      const biggestDropOff = Object.entries(totalDropOffs).reduce((max, [key, value]) =>
        value > max.value ? { step: key, value } : max
      , { step: 'none', value: 0 });

      const response = {
        timeframe,
        dailyFunnels: processedFunnels.filter(day => day.funnel.step1_homepage > 0), // Only include days with activity
        summary: {
          ...totalStats,
          overallConversion,
          biggestDropOff,
          totalDropOffs,
        },
        metadata: {
          dateRange: {
            start: startDate.toISOString().split('T')[0],
            end: now.toISOString().split('T')[0]
          },
          activeDays: processedFunnels.filter(day => day.funnel.step1_homepage > 0).length,
          generatedAt: new Date().toISOString()
        }
      };

      res.status(200).json(response);

    } catch (error) {
      console.error('Error generating daily funnel:', error);
      res.status(500).json({ error: 'Failed to generate daily funnel data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}