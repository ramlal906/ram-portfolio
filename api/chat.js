export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    const lastQuestion = messages[messages.length - 1].content;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1000,
        system: 'You are Ram Lal personal AI assistant. Ram is a Business Analyst and Data Specialist, PwC Alumni based in Jersey City NJ. His email is ramkukreja03@gmail.com. Be warm and concise.',
        messages
      })
    });

    const data = await response.json();
    const aiResponse = data.content?.[0]?.text || '';

    await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: lastQuestion,
        response: aiResponse,
        timestamp: new Date().toISOString()
      })
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
