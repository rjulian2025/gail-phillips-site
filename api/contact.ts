const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readBody(req: { body?: unknown }) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}');
  const chunks: Buffer[] = [];
  for await (const chunk of req as AsyncIterable<Buffer>) chunks.push(Buffer.from(chunk));
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

export default async function handler(req: { method?: string; body?: unknown }, res: { status: (n: number) => { json: (b: unknown) => void; end: () => void } }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body: Record<string, unknown>;
  try {
    body = (await readBody(req)) as Record<string, unknown>;
  } catch {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  if (String(body.company || '').trim()) {
    return res.status(204).end();
  }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const message = String(body.message || '').trim();
  const preferred = String(body.preferred || 'email').trim();
  const referral = String(body.referral || '').trim();

  if (!name || !emailPattern.test(email) || !message) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const submission = {
    name,
    email,
    phone: phone || 'Not provided',
    message,
    preferred: preferred === 'phone' ? 'Phone' : 'Email',
    referral: referral || 'Not provided',
    receivedAt: new Date().toISOString()
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'Gail Phillips Website <onboarding@resend.dev>';

  if (!apiKey || !to) {
    console.info('[contact] Submission stored pending Resend:', submission);
    return res.status(200).json({ ok: true, emailPending: true });
  }

  const text = [
    'New consultation request — gailphillips.net',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${submission.phone}`,
    `Preferred contact: ${submission.preferred}`,
    `Referral: ${submission.referral}`,
    '',
    'Message:',
    submission.message
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Consultation request — ${name}`,
      text
    })
  });

  if (!response.ok) {
    console.error('[contact] Resend error:', await response.text());
    return res.status(502).json({ error: 'Email failed' });
  }

  return res.status(200).json({ ok: true });
}

