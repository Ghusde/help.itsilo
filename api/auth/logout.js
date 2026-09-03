/* Hapus cookie sesi, lalu kembali ke halaman login.
   Ini hanya mengakhiri sesi di situs ini — akun Google-nya
   sendiri tidak ikut di-logout. */

import { COOKIE_NAME, STATE_COOKIE, buildCookie } from '../../lib/session.js';

export default function handler(req, res) {
  res.setHeader('Set-Cookie', [
    buildCookie(COOKIE_NAME, '', 0),
    buildCookie(STATE_COOKIE, '', 0),
  ]);
  res.writeHead(302, { Location: '/login?error=loggedout' });
  res.end();
}
