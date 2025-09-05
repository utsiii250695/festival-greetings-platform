import { dbHelpers } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { festivalId } = req.query;
    
    if (!festivalId) {
      return res.status(400).json({ error: 'Festival ID is required' });
    }

    try {
      const messages = await dbHelpers.getMessages(festivalId);
      res.status(200).json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}