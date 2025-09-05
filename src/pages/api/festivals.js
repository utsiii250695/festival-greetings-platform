import { dbHelpers } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const festivals = await dbHelpers.getFestivals();
      res.status(200).json(festivals);
    } catch (error) {
      console.error('Error fetching festivals:', error);
      res.status(500).json({ error: 'Failed to fetch festivals' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}