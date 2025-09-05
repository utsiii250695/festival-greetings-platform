import { supabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { key } = req.query;
    
    if (!key) {
      return res.status(400).json({ error: 'Config key is required' });
    }

    try {
      const { data, error } = await supabase
        .from('app_config')
        .select('value')
        .eq('key', key)
        .single();

      if (error) throw error;
      
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching config:', error);
      res.status(500).json({ error: 'Failed to fetch config' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}