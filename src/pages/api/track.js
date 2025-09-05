import { dbHelpers } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sessionId, action, data } = req.body;
    const userAgent = req.headers['user-agent'];
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    try {
      await dbHelpers.trackInteraction(sessionId, action, data, userAgent, ipAddress);
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