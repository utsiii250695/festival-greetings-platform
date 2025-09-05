import { dbHelpers } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { festivalId } = req.query;
    
    if (!festivalId) {
      return res.status(400).json({ error: 'Festival ID is required' });
    }

    try {
      const templates = await dbHelpers.getTemplates(festivalId);
      res.status(200).json(templates);
    } catch (error) {
      console.error('Error fetching templates:', error);
      res.status(500).json({ error: 'Failed to fetch templates' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}