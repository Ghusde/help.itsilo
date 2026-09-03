/* Langkah 1: lempar pengguna ke halaman izin Google. */

import { STATE_COOKIE, buildCookie, originOf } from '../../lib/session.js';

export default function handler(req, res) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('GOOGLE_CLIENT_ID belum diisi di Environment Variables.');
    return;
  }

  const origin = originOf(req);

  // Tujuan setelah login berhasil; hanya path internal yang diterima
  // supaya tidak bisa dipakai melempar orang ke situs lain.
  const rawNext = (req.query && req.query.next) || '/';
  const next = typeof rawNext === 'string' && rawNext.startsWith('/') && !rawNext.startsWith('//')
    ? rawNext
    : '/';

  // state = pengaman CSRF, dicocokkan lagi di callback.
  const state = crypto.randomUUID();

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${origin}/api/auth/callback`,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account',
  });

  res.setHeader('Set-Cookie', [
    buildCookie(STATE_COOKIE, `${state}|${next}`, 600), // berlaku 10 menit
  ]);
  res.writeHead(302, {
    Location: `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
  });
  res.end();
}
