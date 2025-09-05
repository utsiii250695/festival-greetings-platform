import { supabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sessionId, action, data } = req.body;
    const userAgent = req.headers['user-agent'];
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    try {
      const { error } = await supabase
        .from('user_interactions')
        .insert({
          session_id: sessionId,
          action,
          data,
          user_agent: userAgent,
          ip_address: ipAddress
        });
      
      if (error) throw error;
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error tracking interaction:', error);
      res.status(500).json({ error: 'Failed to track interaction' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}