export default function handler(_req: unknown, res: { status: (n: number) => { end: (body?: string) => void } }) {
  res.status(410).end('Gone');
}

