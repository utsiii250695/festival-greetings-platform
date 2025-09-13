import { supabase } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Security check - only allow in development
      if (process.env.NODE_ENV === 'production') {
        return res.status(403).json({
          error: 'Flush operation not allowed in production',
          message: 'Use Supabase dashboard for production data management'
        });
      }

      // Get current count before deletion
      const { count: beforeCount, error: countError } = await supabase
        .from('user_interactions')
        .select('*', { count: 'exact', head: true });

      if (countError) {
        console.error('Error counting records:', countError);
        return res.status(500).json({ error: 'Failed to count existing records' });
      }

      // Get breakdown by action type
      const { data: breakdown, error: breakdownError } = await supabase
        .from('user_interactions')
        .select('action')
        .neq('action', null);

      let actionBreakdown = {};
      if (!breakdownError && breakdown) {
        breakdown.forEach(record => {
          actionBreakdown[record.action] = (actionBreakdown[record.action] || 0) + 1;
        });
      }

      // Delete all records
      const { error: deleteError } = await supabase
        .from('user_interactions')
        .delete()
        .neq('id', 0); // This condition matches all records

      if (deleteError) {
        console.error('Error deleting records:', deleteError);
        return res.status(500).json({ error: 'Failed to delete analytics data' });
      }

      // Verify deletion
      const { count: afterCount, error: verifyError } = await supabase
        .from('user_interactions')
        .select('*', { count: 'exact', head: true });

      if (verifyError) {
        console.error('Error verifying deletion:', verifyError);
      }

      res.status(200).json({
        success: true,
        message: 'Analytics data successfully flushed',
        beforeCount: beforeCount || 0,
        afterCount: afterCount || 0,
        deletedCount: (beforeCount || 0) - (afterCount || 0),
        actionBreakdown,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Flush error:', error);
      res.status(500).json({ error: 'Internal server error during flush operation' });
    }
  } else if (req.method === 'GET') {
    // Get current status without flushing
    try {
      const { count, error: countError } = await supabase
        .from('user_interactions')
        .select('*', { count: 'exact', head: true });

      if (countError) {
        return res.status(500).json({ error: 'Failed to get record count' });
      }

      // Get breakdown by action type
      const { data: breakdown, error: breakdownError } = await supabase
        .from('user_interactions')
        .select('action')
        .neq('action', null);

      let actionBreakdown = {};
      if (!breakdownError && breakdown) {
        breakdown.forEach(record => {
          actionBreakdown[record.action] = (actionBreakdown[record.action] || 0) + 1;
        });
      }

      // Get recent samples
      const { data: recentData, error: recentError } = await supabase
        .from('user_interactions')
        .select('action, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      res.status(200).json({
        totalRecords: count || 0,
        actionBreakdown,
        recentActivities: recentData || [],
        isEmpty: (count || 0) === 0,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Status error:', error);
      res.status(500).json({ error: 'Internal server error during status check' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}