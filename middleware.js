/* ============================================================
   GERBANG LOGIN
   ============================================================
   Berjalan di server Vercel SEBELUM file apa pun dikirim ke
   browser. Ini yang membuat proteksinya nyata: doc.js, doc.html,
   dan seluruh isi dokumentasi tidak pernah sampai ke pengunjung
   yang belum login — bukan sekadar disembunyikan lewat CSS.

   Tidak ada satu pun file tampilan yang diubah oleh berkas ini.
   ============================================================ */

import { COOKIE_NAME, readCookie, readSession } from './lib/session.js';

/* Semua permintaan dijaga KECUALI yang disebut di bawah:
   - /api/auth/*   : endpoint login itu sendiri (kalau dijaga, tak ada yang bisa login)
   - /login        : halaman login
   - /favicon.ico  : ikon tab */
export const config = {
  matcher: '/((?!api/auth|login|favicon\\.ico).*)',
};

export default async function middleware(request) {
  const url = new URL(request.url);

  const token = readCookie(request.headers.get('cookie'), COOKIE_NAME);
  const session = await readSession(token, process.env.AUTH_SECRET);

  if (session) return; // sesi sah — teruskan ke file yang diminta

  // Simpan tujuan semula supaya setelah login user kembali ke halaman itu.
  const login = new URL('/login', url.origin);
  if (url.pathname && url.pathname !== '/') {
    login.searchParams.set('next', url.pathname + url.search);
  }
  return Response.redirect(login, 302);
}
