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

      // Group interactions by session
      const sessionData = {};

      interactions?.forEach(interaction => {
        const sessionId = interaction.session_id;
        if (!sessionData[sessionId]) {
          sessionData[sessionId] = {
            hasImageGenerated: false,
            languages: new Set(),
            festivals: new Set(),
            templates: new Set(),
            actions: []
          };
        }

        const session = sessionData[sessionId];
        session.actions.push(interaction.action);

        switch (interaction.action) {
          case 'language_select':
            const language = interaction.data?.language;
            if (language) {
              session.languages.add(language);
            }
            break;

          case 'festival_select':
            const festivalName = interaction.data?.festivalName;
            if (festivalName) {
              session.festivals.add(festivalName);
            }
            break;

          case 'template_select':
            const templateName = interaction.data?.templateName;
            if (templateName) {
              session.templates.add(templateName);
            }
            break;

          case 'image_generated':
            session.hasImageGenerated = true;
            break;
        }
      });

      // Separate converters and non-converters
      const converters = [];
      const nonConverters = [];

      Object.entries(sessionData).forEach(([sessionId, session]) => {
        const sessionInfo = {
          sessionId,
          languages: Array.from(session.languages),
          festivals: Array.from(session.festivals),
          templates: Array.from(session.templates),
          actions: session.actions
        };

        if (session.hasImageGenerated) {
          converters.push(sessionInfo);
        } else {
          nonConverters.push(sessionInfo);
        }
      });

      // Analyze language preferences
      const analyzeLanguages = (sessions) => {
        const languageCounts = {};
        sessions.forEach(session => {
          session.languages.forEach(language => {
            languageCounts[language] = (languageCounts[language] || 0) + 1;
          });
        });
        return Object.entries(languageCounts)
          .map(([language, count]) => ({ language, count, percentage: Math.round((count / sessions.length) * 100) }))
          .sort((a, b) => b.count - a.count);
      };

      // Analyze festival preferences
      const analyzeFestivals = (sessions) => {
        const festivalCounts = {};
        sessions.forEach(session => {
          session.festivals.forEach(festival => {
            festivalCounts[festival] = (festivalCounts[festival] || 0) + 1;
          });
        });
        return Object.entries(festivalCounts)
          .map(([festival, count]) => ({ festival, count, percentage: Math.round((count / sessions.length) * 100) }))
          .sort((a, b) => b.count - a.count);
      };

      // Analyze template preferences
      const analyzeTemplates = (sessions) => {
        const templateCounts = {};
        sessions.forEach(session => {
          session.templates.forEach(template => {
            templateCounts[template] = (templateCounts[template] || 0) + 1;
          });
        });
        return Object.entries(templateCounts)
          .map(([template, count]) => ({ template, count, percentage: Math.round((count / sessions.length) * 100) }))
          .sort((a, b) => b.count - a.count);
      };

      // Get last action for non-converters (where they dropped off)
      const analyzeDropOffPoints = (sessions) => {
        const dropOffCounts = {
          'after_homepage': 0,
          'after_language': 0,
          'after_festival': 0,
          'after_template': 0
        };

        sessions.forEach(session => {
          const actions = session.actions;
          const hasLanguage = actions.includes('language_select');
          const hasFestival = actions.includes('festival_select');
          const hasTemplate = actions.includes('template_select');

          if (!hasLanguage) {
            dropOffCounts['after_homepage']++;
          } else if (!hasFestival) {
            dropOffCounts['after_language']++;
          } else if (!hasTemplate) {
            dropOffCounts['after_festival']++;
          } else {
            dropOffCounts['after_template']++;
          }
        });

        return Object.entries(dropOffCounts)
          .map(([point, count]) => ({
            point: point.replace('after_', '').replace('_', ' '),
            count,
            percentage: sessions.length > 0 ? Math.round((count / sessions.length) * 100) : 0
          }))
          .sort((a, b) => b.count - a.count);
      };

      const response = {
        timeframe,
        summary: {
          totalSessions: converters.length + nonConverters.length,
          converters: converters.length,
          nonConverters: nonConverters.length,
          conversionRate: converters.length + nonConverters.length > 0
            ? Math.round((converters.length / (converters.length + nonConverters.length)) * 100)
            : 0
        },
        converters: {
          count: converters.length,
          languages: analyzeLanguages(converters),
          festivals: analyzeFestivals(converters),
          templates: analyzeTemplates(converters),
          topCombination: {
            language: analyzeLanguages(converters)[0]?.language || 'N/A',
            festival: analyzeFestivals(converters)[0]?.festival || 'N/A',
            template: analyzeTemplates(converters)[0]?.template || 'N/A'
          }
        },
        nonConverters: {
          count: nonConverters.length,
          languages: analyzeLanguages(nonConverters),
          festivals: analyzeFestivals(nonConverters),
          templates: analyzeTemplates(nonConverters),
          dropOffPoints: analyzeDropOffPoints(nonConverters),
          mostCommonDropOff: analyzeDropOffPoints(nonConverters)[0]?.point || 'homepage'
        },
        insights: {
          preferredLanguageByConverters: analyzeLanguages(converters)[0]?.language || 'N/A',
          preferredLanguageByNonConverters: analyzeLanguages(nonConverters)[0]?.language || 'N/A',
          topFestivalForConverters: analyzeFestivals(converters)[0]?.festival || 'N/A',
          topFestivalForNonConverters: analyzeFestivals(nonConverters)[0]?.festival || 'N/A',
          languageDifference: analyzeLanguages(converters)[0]?.language !== analyzeLanguages(nonConverters)[0]?.language
        },
        metadata: {
          dateRange: {
            start: startDate.toISOString().split('T')[0],
            end: now.toISOString().split('T')[0]
          },
          generatedAt: new Date().toISOString()
        }
      };

      res.status(200).json(response);

    } catch (error) {
      console.error('Error generating converter analysis:', error);
      res.status(500).json({ error: 'Failed to generate converter analysis' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}