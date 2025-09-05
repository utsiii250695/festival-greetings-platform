import { dbHelpers } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber, sessionId } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    try {
      await dbHelpers.savePhoneNumber(phoneNumber, sessionId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving phone number:', error);
      res.status(500).json({ error: 'Failed to save phone number' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}