/* ============================================================
   Dokumentasi Dinamis - Penanganan Konten
   ============================================================ */

const DOC_CONTENT = {
  'akses/reset-password': {
    id: 'Reset password Active Directory',
    en: 'Reset an Active Directory password',
    content: `
      <h2>Reset Password Active Directory</h2>
      <p>Panduan lengkap untuk mereset password akun Active Directory Anda.</p>
      
      <h3>Langkah-Langkah</h3>
      <ol>
        <li>Buka halaman reset password internal di: <code>https://ad-reset.internal.local</code></li>
        <li>Masukkan username Anda</li>
        <li>Verifikasi identitas melalui email atau SMS</li>
        <li>Buat password baru yang kuat (minimal 12 karakter)</li>
        <li>Konfirmasi password baru</li>
        <li>Klik tombol Reset</li>
      </ol>
      
      <h3>Persyaratan Password</h3>
      <ul>
        <li>Minimal 12 karakter</li>
        <li>Harus mengandung huruf besar dan kecil</li>
        <li>Harus mengandung angka</li>
        <li>Harus mengandung karakter spesial (!@#$%^&*)</li>
        <li>Tidak boleh mengandung username atau nama Anda</li>
      </ul>
      
      <h3>Troubleshooting</h3>
      <p><strong>Gagal verifikasi email?</strong> Pastikan alamat email Anda sudah update di profil Active Directory.</p>
      <p><strong>Lupa jawaban keamanan?</strong> Hubungi Help Desk untuk reset manual.</p>
    `
  },
  'akses/akses-vpn': {
    id: 'Cara mengajukan akses VPN',
    en: 'How to request VPN access',
    content: `
      <h2>Mengajukan Akses VPN</h2>
      <p>Panduan untuk mengajukan dan mengaktifkan akses VPN perusahaan.</p>
      
      <h3>Persyaratan</h3>
      <ul>
        <li>Akun Active Directory aktif</li>
        <li>Authenticator app (Microsoft Authenticator atau Google Authenticator)</li>
        <li>Laptop yang telah diregister dengan IT</li>
      </ul>
      
      <h3>Proses Permohonan</h3>
      <ol>
        <li>Buka ServiceNow: <code>https://service.company.local</code></li>
        <li>Cari "Request VPN Access"</li>
        <li>Isi alasan kebutuhan VPN</li>
        <li>Pilih departemen Anda</li>
        <li>Submit permohonan</li>
      </ol>
      
      <h3>Persetujuan</h3>
      <p>Permohonan biasanya disetujui dalam 1-2 hari kerja setelah disetujui oleh manager Anda.</p>
      
      <h3>Setup VPN Client</h3>
      <p>Setelah permohonan disetujui, Anda akan menerima email dengan instruksi setup VPN.</p>
    `
  },
  'network/topologi-vlan': {
    id: 'Topologi jaringan dan segmentasi VLAN',
    en: 'Network topology and VLAN segmentation',
    content: `
      <h2>Topologi Jaringan dan Segmentasi VLAN</h2>
      <p>Referensi lengkap tentang infrastruktur jaringan perusahaan.</p>
      
      <h3>Segmentasi VLAN</h3>
      <ul>
        <li><strong>VLAN 10:</strong> Workstation Karyawan (192.168.10.0/24)</li>
        <li><strong>VLAN 20:</strong> Server & Storage (192.168.20.0/24)</li>
        <li><strong>VLAN 30:</strong> Management (192.168.30.0/24)</li>
        <li><strong>VLAN 40:</strong> Guest WiFi (192.168.40.0/24)</li>
      </ul>
      
      <h3>Core Infrastructure</h3>
      <ul>
        <li>2x Cisco Nexus 9000 Series Switch (HA)</li>
        <li>10 Gigabit Ethernet uplinks</li>
        <li>3x Juniper SRX5600 Firewall (HA)</li>
      </ul>
      
      <h3>Access Points WiFi</h3>
      <p>Tersebar di semua lantai gedung dengan coverage 100%.</p>
      <p>Model: Cisco Catalyst 9130 Series</p>
      <p>Standar: WiFi 6 (802.11ax)</p>
    `
  },
  'hardware/reimage-laptop': {
    id: 'Reimage laptop standar Dell dan Lenovo',
    en: 'Reimage standard Dell and Lenovo laptops',
    content: `
      <h2>Reimage Laptop Standar</h2>
      <p>Panduan lengkap untuk reimage laptop Dell dan Lenovo dengan image standar perusahaan.</p>
      
      <h3>Persiapan</h3>
      <ol>
        <li>Backup semua data penting ke cloud storage (OneDrive)</li>
        <li>Catat serial number laptop</li>
        <li>Hubungi IT untuk meminta USB bootable</li>
      </ol>
      
      <h3>Proses Reimage</h3>
      <ol>
        <li>Matikan laptop sepenuhnya</li>
        <li>Hubungkan USB bootable yang sudah disiapkan IT</li>
        <li>Nyalakan laptop dan tekan F12 (Dell) atau F2 (Lenovo)</li>
        <li>Pilih USB drive sebagai boot priority</li>
        <li>Ikuti wizard reimage (durasi ~30 menit)</li>
        <li>Sistem akan reboot otomatis</li>
      </ol>
      
      <h3>Setelah Reimage</h3>
      <ul>
        <li>Login dengan akun Active Directory</li>
        <li>Jalankan Windows Update</li>
        <li>Install aplikasi dari Software Center</li>
      </ul>
    `
  },
  'hardware/printer-offline': {
    id: 'Printer jaringan terbaca offline',
    en: 'Network printer shows as offline',
    content: `
      <h2>Memperbaiki Printer yang Offline</h2>
      <p>Langkah-langkah troubleshooting untuk printer jaringan yang tidak merespons.</p>
      
      <h3>Pengecekan Cepat</h3>
      <ol>
        <li>Pastikan printer sudah dinyalakan</li>
        <li>Cek LED status di printer (seharusnya hijau)</li>
        <li>Ping printer dari komputer: <code>ping [IP-printer]</code></li>
      </ol>
      
      <h3>Solusi Umum</h3>
      
      <h4>1. Restart Printer</h4>
      <ol>
        <li>Matikan printer (tombol power)</li>
        <li>Cabut kabel power selama 30 detik</li>
        <li>Hubungkan kembali dan nyalakan</li>
        <li>Tunggu hingga boot selesai (~2 menit)</li>
      </ol>
      
      <h4>2. Clear Print Queue</h4>
      <pre>net stop spooler
del %systemroot%\System32\spool\PRINTERS\*.*
net start spooler</pre>
      
      <h3>Jika Masih Offline</h3>
      <p>Hubungi IT Help Desk dengan menyebutkan:</p>
      <ul>
        <li>Model printer</li>
        <li>Lokasi printer</li>
        <li>Nomor seri atau IP address</li>
      </ul>
    `
  },
  'software/sso-gagal': {
    id: 'Login SSO gagal token expired',
    en: 'SSO login fails with an expired token',
    content: `
      <h2>Memperbaiki Login SSO yang Gagal</h2>
      <p>Panduan untuk mengatasi error "Token Expired" atau login SSO yang tidak berhasil.</p>
      
      <h3>Penyebab Umum</h3>
      <ul>
        <li>Jam sistem tidak tersinkronisasi</li>
        <li>Browser cache yang rusak</li>
        <li>Token session sudah kedaluwarsa</li>
        <li>Koneksi internet terputus</li>
      </ul>
      
      <h3>Solusi Cepat</h3>
      <ol>
        <li>Sinkronkan jam sistem dengan NTP server:
          <pre>w32tm /resync</pre>
        </li>
        <li>Bersihkan browser cache (Ctrl+Shift+Delete)</li>
        <li>Tutup semua tab dan buka tab baru</li>
        <li>Coba login kembali</li>
      </ol>
      
      <h3>Jika Masih Gagal</h3>
      <p>Hubungi Help Desk untuk reset session SSO Anda.</p>
    `
  },
  'software/outlook-sync': {
    id: 'Outlook tidak sinkron setelah ganti password',
    en: 'Outlook stops syncing after a password change',
    content: `
      <h2>Memperbaiki Outlook Tidak Sinkron</h2>
      <p>Setelah mengubah password Active Directory, Outlook perlu diperbarui konfigurasinya.</p>
      
      <h3>Solusi Otomatis</h3>
      <ol>
        <li>Buka Outlook</li>
        <li>Klik File → Account Settings → Account Settings</li>
        <li>Pilih akun email Anda</li>
        <li>Klik "Change" atau "Repair"</li>
        <li>Masukkan password baru Anda</li>
        <li>Klik Next dan finish</li>
      </ol>
      
      <h3>Solusi Manual</h3>
      <ol>
        <li>Buka Control Panel → Credential Manager</li>
        <li>Cari entry untuk mail server perusahaan</li>
        <li>Hapus atau update dengan password baru</li>
        <li>Restart Outlook</li>
      </ol>
      
      <h3>Jika Masih Bermasalah</h3>
      <p>Hubungi Help Desk untuk remote troubleshooting.</p>
    `
  },
  'prosedur/handover': {
    id: 'Handover shift dan tiket pending',
    en: 'Shift handover and pending tickets',
    content: `
      <h2>Prosedur Handover Shift</h2>
      <p>Standar operasional untuk transfer tanggung jawab antar shift IT support.</p>
      
      <h3>30 Menit Sebelum Shift Berakhir</h3>
      <ul>
        <li>Review semua tiket open di ServiceNow</li>
        <li>Identifikasi tiket urgent dan blockers</li>
        <li>Update status tiket dengan progress terbaru</li>
        <li>Buat catatan untuk shift berikutnya</li>
      </ul>
      
      <h3>Saat Handover (Overlap 15 menit)</h3>
      <ol>
        <li>Bersama shift berikutnya review board tiket</li>
        <li>Jelaskan konteks dan urgency setiap tiket pending</li>
        <li>Transfer ownership tiket ke shift berikutnya</li>
        <li>Laporkan incident atau issue yang perlu monitoring</li>
      </ol>
      
      <h3>Dokumentasi</h3>
      <p>Semua handover harus didokumentasikan di:</p>
      <ul>
        <li>Shift Log Book (physical/digital)</li>
        <li>ServiceNow Change Log</li>
      </ul>
    `
  },
  'referensi/kode-error': {
    id: 'Kode error umum dan artinya',
    en: 'Common error codes and what they mean',
    content: `
      <h2>Referensi Kode Error Umum</h2>
      <p>Daftar kode error yang sering ditemui beserta penjelasan dan solusinya.</p>
      
      <h3>Windows Error Codes</h3>
      
      <h4>Error 0x80070005 - Access Denied</h4>
      <p>Pengguna tidak memiliki permission untuk melakukan aksi tersebut.</p>
      <ul>
        <li>Jalankan aplikasi sebagai Administrator</li>
        <li>Hubungi IT untuk minta akses ke resource</li>
      </ul>
      
      <h4>Error 0x80131500 - Network Connection Failed</h4>
      <p>Tidak ada koneksi ke server atau VPN.</p>
      <ul>
        <li>Cek koneksi internet (ping 8.8.8.8)</li>
        <li>Pastikan VPN sudah connect</li>
        <li>Restart network adapter</li>
      </ul>
      
      <h3>Email Error Codes</h3>
      
      <h4>Error 0x8004210A - Sync Failed</h4>
      <p>Outlook tidak bisa sinkron dengan server email.</p>
      <ul>
        <li>Cek password Outlook sudah update</li>
        <li>Restart Outlook</li>
        <li>Repair Outlook profile</li>
      </ul>
      
      <h4>Error 550 - Authentication Failed</h4>
      <p>Username atau password untuk email salah.</p>
      <ul>
        <li>Verifikasi password Anda sudah benar</li>
        <li>Cek Caps Lock</li>
        <li>Update password di email settings</li>
      </ul>
    `
  },
};

// Ambil path dari URL parameter
const urlParams = new URLSearchParams(window.location.search);
const docPath = urlParams.get('p') || 'akses/reset-password';

const docTitle = document.getElementById('docTitle');
const docH1 = document.getElementById('docH1');
const docContent = document.getElementById('docContent');

// Ambil konten dokumen
const doc = DOC_CONTENT[docPath];

if (doc) {
  // Update judul
  const title = state.lang === 'en' ? doc.en : doc.id;
  document.title = title + ' — BAKED IT';
  // data-i18n dilepas: kedua elemen ini hanya memakainya untuk teks placeholder
  // "Memuat...". Kalau atributnya dibiarkan, applyLang() akan menimpa judul
  // dokumen yang asli dengan placeholder itu setiap kali bahasa diganti.
  docTitle.removeAttribute('data-i18n');
  docH1.removeAttribute('data-i18n');
  docTitle.textContent = title;
  docH1.textContent = title;

  // Judul harus ikut berganti saat bahasa diubah. applyLang() menulis
  // state.lang ke <html lang>, jadi perubahan atribut itu dipakai sebagai sinyal.
  new MutationObserver(() => {
    const t = state.lang === 'en' ? doc.en : doc.id;
    document.title = t + ' — BAKED IT';
    docTitle.textContent = t;
    docH1.textContent = t;
  }).observe(document.documentElement, { attributeFilter: ['lang'] });
  
  // Update konten
  docContent.innerHTML = doc.content;
} else {
  // Digambar ulang saat bahasa berganti, sama seperti judul di atas.
  const renderMissing = () => {
    docContent.innerHTML = `
      <div style="padding:40px;text-align:center;">
        <h2>${t('doc.notFound')}</h2>
        <p>Path: <code>${docPath}</code></p>
        <p><a href="use-it-docs.html">← ${t('doc.backHome')}</a></p>
      </div>
    `;
    docTitle.removeAttribute('data-i18n');
    docH1.removeAttribute('data-i18n');
    docTitle.textContent = t('doc.notFound');
    docH1.textContent = t('doc.notFound');
    document.title = t('doc.notFound') + ' — BAKED IT';
  };
  renderMissing();
  new MutationObserver(renderMissing)
    .observe(document.documentElement, { attributeFilter: ['lang'] });
}
