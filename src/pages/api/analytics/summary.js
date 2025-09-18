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

      // Parallel queries for better performance
      const queries = await Promise.allSettled([
        // Total unique sessions
        supabase
          .from('user_interactions')
          .select('session_id')
          .gte('created_at', startDate.toISOString())
          .neq('session_id', null),

        // Total page visits
        supabase
          .from('user_interactions')
          .select('*')
          .eq('action', 'page_visit')
          .gte('created_at', startDate.toISOString()),

        // Language selections
        supabase
          .from('user_interactions')
          .select('*')
          .eq('action', 'language_select')
          .gte('created_at', startDate.toISOString()),

        // Festival selections
        supabase
          .from('user_interactions')
          .select('*')
          .eq('action', 'festival_select')
          .gte('created_at', startDate.toISOString()),

        // Template selections
        supabase
          .from('user_interactions')
          .select('*')
          .eq('action', 'template_select')
          .gte('created_at', startDate.toISOString()),

        // Cards generated
        supabase
          .from('user_interactions')
          .select('*')
          .eq('action', 'image_generated')
          .gte('created_at', startDate.toISOString()),

        // Downloads
        supabase
          .from('user_interactions')
          .select('*')
          .eq('action', 'image_download')
          .gte('created_at', startDate.toISOString()),

        // Popular festivals
        supabase
          .from('user_interactions')
          .select('data')
          .eq('action', 'festival_select')
          .gte('created_at', startDate.toISOString()),

        // Popular templates
        supabase
          .from('user_interactions')
          .select('data')
          .eq('action', 'template_select')
          .gte('created_at', startDate.toISOString()),

        // Daily stats
        supabase
          .from('user_interactions')
          .select('created_at, action')
          .gte('created_at', startDate.toISOString())
          .order('created_at', { ascending: true })
      ]);

      // Process results
      const [
        sessionsResult,
        pageVisitsResult,
        languageSelectResult,
        festivalSelectResult,
        templateSelectResult,
        imageGeneratedResult,
        imageDownloadResult,
        popularFestivalsResult,
        popularTemplatesResult,
        dailyStatsResult
      ] = queries.map(result => result.status === 'fulfilled' ? result.value : { data: [] });

      // Calculate unique sessions
      const uniqueSessions = new Set(
        sessionsResult.data?.map(row => row.session_id) || []
      ).size;

      // Calculate conversion rates
      const totalSessions = uniqueSessions;
      const completedCards = imageGeneratedResult.data?.length || 0;
      const downloads = imageDownloadResult.data?.length || 0;

      const conversionRate = totalSessions > 0 ? (completedCards / totalSessions * 100) : 0;
      const downloadRate = completedCards > 0 ? (downloads / completedCards * 100) : 0;

      // Popular festivals analysis
      const festivalCounts = {};
      popularFestivalsResult.data?.forEach(row => {
        // Handle both direct data structure and nested data structure
        let festivalName;
        if (typeof row.data === 'string') {
          try {
            const parsedData = JSON.parse(row.data);
            festivalName = parsedData.festivalName || parsedData.name;
          } catch (e) {
            festivalName = row.data;
          }
        } else if (typeof row.data === 'object' && row.data !== null) {
          festivalName = row.data.festivalName || row.data.name;
        }

        if (festivalName && typeof festivalName === 'string') {
          festivalCounts[festivalName] = (festivalCounts[festivalName] || 0) + 1;
        }
      });

      const popularFestivals = Object.entries(festivalCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));

      // Popular templates analysis
      const templateCounts = {};
      popularTemplatesResult.data?.forEach(row => {
        // Handle both direct data structure and nested data structure
        let templateName;
        if (typeof row.data === 'string') {
          try {
            const parsedData = JSON.parse(row.data);
            templateName = parsedData.templateName || parsedData.name;
          } catch (e) {
            templateName = row.data;
          }
        } else if (typeof row.data === 'object' && row.data !== null) {
          templateName = row.data.templateName || row.data.name;
        }

        if (templateName && typeof templateName === 'string') {
          templateCounts[templateName] = (templateCounts[templateName] || 0) + 1;
        }
      });

      const popularTemplates = Object.entries(templateCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));

      // Daily stats for chart
      const dailyStats = {};
      dailyStatsResult.data?.forEach(row => {
        const date = new Date(row.created_at).toISOString().split('T')[0];
        if (!dailyStats[date]) {
          dailyStats[date] = { visits: 0, cards: 0, downloads: 0 };
        }

        switch (row.action) {
          case 'page_visit':
            dailyStats[date].visits++;
            break;
          case 'image_generated':
            dailyStats[date].cards++;
            break;
          case 'image_download':
            dailyStats[date].downloads++;
            break;
        }
      });

      const chartData = Object.entries(dailyStats)
        .sort(([a], [b]) => new Date(a) - new Date(b))
        .map(([date, stats]) => ({ date, ...stats }));

      const summary = {
        timeframe,
        totalSessions: uniqueSessions,
        totalPageViews: pageVisitsResult.data?.length || 0,
        languageSelections: languageSelectResult.data?.length || 0,
        festivalSelections: festivalSelectResult.data?.length || 0,
        templateSelections: templateSelectResult.data?.length || 0,
        cardsGenerated: completedCards,
        cardsDownloaded: downloads,
        conversionRate: Math.round(conversionRate * 100) / 100,
        downloadRate: Math.round(downloadRate * 100) / 100,
        popularFestivals,
        popularTemplates,
        chartData,
        generatedAt: new Date().toISOString()
      };

      res.status(200).json(summary);
    } catch (error) {
      console.error('Error fetching analytics summary:', error);
      res.status(500).json({ error: 'Failed to fetch analytics summary' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}