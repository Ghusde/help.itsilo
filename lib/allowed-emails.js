/* ============================================================
   DAFTAR EMAIL YANG BOLEH MASUK
   ============================================================
   Hanya alamat di daftar ini yang bisa login. Orang lain tetap
   bisa berhasil masuk ke akun Google mereka sendiri, tapi akan
   ditolak di langkah berikutnya dan dikembalikan ke /login.

   Menambah orang : tulis satu baris baru, huruf kecil semua.
   Menghapus orang: hapus barisnya (atau beri // di depannya).
   Setelah diubah, simpan lalu deploy ulang ke Vercel.
   ============================================================ */

export const ALLOWED_EMAILS = [
  'ghustude182@gmail.com',
  'tudejaya911@gmail.com',
  // 'nama.rekan@gmail.com',
  // 'orang.ketiga@perusahaan.com',
];

/** Cocokkan tanpa peduli huruf besar/kecil dan spasi tak sengaja. */
export function isAllowed(email) {
  if (!email) return false;
  const target = String(email).trim().toLowerCase();
  return ALLOWED_EMAILS.some((e) => e.trim().toLowerCase() === target);
}
