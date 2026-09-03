/* Langkah 2: Google mengembalikan pengguna ke sini.
   Tukar kode dengan token, ambil emailnya, cocokkan ke allowlist,
   baru pasang cookie sesi. */

import {
  COOKIE_NAME, STATE_COOKIE, SESSION_MAX_AGE,
  createSession, readCookie, buildCookie,
} from '../../lib/session.js';
import { isAllowed } from '../../lib/allowed-emails.js';

function deny(res, reason) {
  // Kosongkan cookie state, lalu kembalikan ke /login dengan pesan.
  res.setHeader('Set-Cookie', [buildCookie(STATE_COOKIE, '', 0)]);
  res.writeHead(302, { Location: `/login?error=${reason}` });
  res.end();
}

export default async function handler(req, res) {
  const { code, state } = req.query || {};
  const cookie = readCookie(req.headers.cookie, STATE_COOKIE);

  if (!code || !state || !cookie) return deny(res, 'invalid');

  const [savedState, savedNext = '/'] = cookie.split('|');
  if (savedState !== state) return deny(res, 'invalid');   // kemungkinan CSRF

  const origin = `https://${req.headers['x-forwarded-host'] || req.headers.host}`;

  // --- tukar authorization code dengan token ---
  let payload;
  try {
    const r = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${origin}/api/auth/callback`,
        grant_type: 'authorization_code',
      }),
    });
    if (!r.ok) return deny(res, 'invalid');

    const data = await r.json();
    if (!data.id_token) return deny(res, 'invalid');

    // id_token datang langsung dari endpoint token Google lewat HTTPS,
    // jadi isinya cukup dibaca. Verifikasi tanda tangan diperlukan hanya
    // bila token diterima dari pihak lain, bukan dari Google langsung.
    const body = data.id_token.split('.')[1];
    payload = JSON.parse(
      Buffer.from(body.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')
    );
  } catch {
    return deny(res, 'invalid');
  }

  // --- syarat kelayakan ---
  const email = payload.email;
  if (!email || payload.email_verified === false) return deny(res, 'unverified');
  if (!isAllowed(email)) return deny(res, 'notallowed');

  // --- lolos: pasang sesi ---
  const token = await createSession(email.toLowerCase(), process.env.AUTH_SECRET);
  res.setHeader('Set-Cookie', [
    buildCookie(COOKIE_NAME, token, SESSION_MAX_AGE),
    buildCookie(STATE_COOKIE, '', 0),
  ]);

  const next = savedNext.startsWith('/') && !savedNext.startsWith('//') ? savedNext : '/';
  res.writeHead(302, { Location: next });
  res.end();
}
