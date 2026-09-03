/* ============================================================
   SESI LOGIN
   ============================================================
   Sesi disimpan sebagai satu cookie bertanda tangan. Isinya cuma
   email dan waktu kedaluwarsa; tanda tangannya dibuat dengan
   AUTH_SECRET sehingga tidak bisa dipalsukan dari sisi browser.

   Sengaja memakai Web Crypto (crypto.subtle), bukan modul 'crypto'
   Node, supaya berkas yang sama bisa dipakai di dua tempat:
   middleware (runtime Edge) dan fungsi di /api (runtime Node).
   ============================================================ */

/** Masa berlaku sesi, dalam detik.
 *  >>> DI SINI durasi login diatur. 7 hari = 7*24*60*60.
 *  Ganti angka 7 kalau mau lebih pendek/panjang, lalu deploy ulang. */
export const SESSION_DAYS = 7;
export const SESSION_MAX_AGE = SESSION_DAYS * 24 * 60 * 60;

export const COOKIE_NAME = 'baked_session';
export const STATE_COOKIE = 'baked_oauth_state';

const enc = new TextEncoder();
const dec = new TextDecoder();

function toB64url(bytes) {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromB64url(str) {
  const pad = str.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(pad + '='.repeat((4 - (pad.length % 4)) % 4));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacKey(secret) {
  if (!secret) throw new Error('AUTH_SECRET belum diisi');
  return crypto.subtle.importKey(
    'raw', enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false, ['sign', 'verify']
  );
}

/** Buat token sesi untuk satu email. */
export async function createSession(email, secret) {
  const body = toB64url(enc.encode(JSON.stringify({
    email,
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE,
  })));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(secret), enc.encode(body));
  return body + '.' + toB64url(new Uint8Array(sig));
}

/** Kembalikan { email, exp } kalau token sah & belum kedaluwarsa, selain itu null. */
export async function readSession(token, secret) {
  try {
    if (!token) return null;
    const dot = token.lastIndexOf('.');
    if (dot < 1) return null;

    const body = token.slice(0, dot);
    const sig = fromB64url(token.slice(dot + 1));

    const ok = await crypto.subtle.verify('HMAC', await hmacKey(secret), sig, enc.encode(body));
    if (!ok) return null;

    const data = JSON.parse(dec.decode(fromB64url(body)));
    if (!data.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch {
    return null;
  }
}

/** Ambil satu cookie dari header Cookie mentah. */
export function readCookie(cookieHeader, name) {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(';')) {
    const i = part.indexOf('=');
    if (i < 0) continue;
    if (part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}

/** Susun header Set-Cookie. maxAge 0 berarti hapus. */
export function buildCookie(name, value, maxAge) {
  return [
    `${name}=${encodeURIComponent(value)}`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    `Max-Age=${maxAge}`,
  ].join('; ');
}
