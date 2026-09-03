/* ============================================================
   Preferensi tersimpan
   ============================================================ */
const KEY = {
  theme:  'itdocs.theme',
  layout: 'itdocs.layout',
  lang:   'itdocs.lang',
  recent: 'itdocs.recent',
};

const state = {
  theme:  load(KEY.theme,  'dark'),    // light | dark | auto
  layout: load(KEY.layout, 'fixed'),   // fixed | fluid
  lang:   load(KEY.lang,   'id'),      // id | en
};

function load(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (e) {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    /* mode privat / storage penuh — preferensi cukup berlaku di sesi ini */
  }
}

/* ============================================================
   Teks antarmuka
   ============================================================ */
const I18N = {
  id: {
    'nav.whatsnew': 'Pembaruan',

    'lang.title':   'Bahasa',
    'theme.light':  'Mode terang',
    'theme.dark':   'Mode gelap',
    'theme.auto':   'Otomatis',
    'layout.fixed': 'Lebar tetap',
    'layout.fluid': 'Lebar penuh',
    'ver.current':  '1.0 (Rilis saat ini)',
    'ver.archive':  'Arsip',

    'hero.h1':      'Temukan',
    'hero.w1':      'Panduanmu',
    'search.ph':    'Cari isu, perangkat, atau panduan',

    'ql.1': 'Mulai di sini',
    'ql.2': 'Reset password',
    'ql.3': 'Akses VPN',
    'ql.4': 'Peta jaringan',
    'ql.5': 'Kode error umum',

    'panel.recent':  'Terakhir dilihat',
    'panel.popular': 'Populer',
    'panel.results': 'Hasil',
    'panel.empty':   'Tidak ada hasil untuk “{q}”. Coba nama perangkat atau kode error.',

    'card.1.t': 'Gunakan BAKED IT',
    'card.1.d': 'Kenali alur kerja dukungan IT dari ujung ke ujung.',
    'card.2.t': 'Belajar lewat tutorial',
    'card.2.d': 'Pelajari alur kerja utama dengan mengikuti panduan langkah demi langkah.',
    'card.3.t': 'Akses & permintaan',
    'card.3.d': 'Ajukan dan kelola hak akses yang kamu butuhkan untuk bekerja.',
    'card.4.t': 'Asisten AI',
    'card.4.d': 'Dapat bantuan cepat dari asisten AI internal saat sedang bekerja.',
    'card.5.t': 'Kelola infrastruktur',
    'card.5.d': 'Pelajari cara memasang, mengonfigurasi, dan merawat sistem kantor.',
    'card.6.t': 'Integrasi & tools',
    'card.6.d': 'Hubungkan BAKED IT ke tools dan alur kerja tim yang sudah dipakai.',
    'card.7.t': 'Arsitektur & topologi',
    'card.7.d': 'Gunakan referensi ini untuk memahami struktur jaringan dan infrastruktur kantor.',
    'card.8.t': 'Kontribusi dokumentasi',
    'card.8.d': 'Pelajari cara menulis dan mengirim revisi ke dokumentasi tim.',
    'dnav.1': 'Gunakan BAKED IT',
    'dnav.2': 'Asisten AI',
    'dnav.3': 'Perangkat',
    'dnav.4': 'Integrasi',
    'dnav.5': 'Instalasi',
    'dnav.6': 'Administrasi',
    'dnav.7': 'Lisensi',
    'dnav.8': 'Kontribusi',
    'dnav.9': 'Arsitektur',
    'side.1': 'Mulai di sini',
    'side.2': 'Tutorial',
    'side.3': 'Kelola akun & akses',
    'side.4': 'Perangkat kerja',
    'side.5': 'Jaringan & konektivitas',
    'side.6': 'Email & kolaborasi',
    'side.7': 'Keamanan informasi',
    'side.8': 'Printer & perangkat kantor',
    'side.9': 'Server & infrastruktur',
    'side.10': 'Prosedur & SOP',
    'side.11': 'Pemecahan masalah umum',
    'side.12': 'Referensi kode error',
    'sub.2.1': 'Onboarding karyawan baru',
    'sub.2.2': 'Menyiapkan laptop kerja',
    'sub.2.3': 'Mengamankan akun',
    'sub.3.1': 'Buat akun baru',
    'sub.3.2': 'Reset password',
    'sub.3.3': 'Hak akses & grup',
    'sub.4.1': 'Reimage laptop standar',
    'sub.4.2': 'Periferal & docking',
    'sub.4.3': 'Lisensi software',
    'sub.5.1': 'Sambungkan ke WiFi kantor',
    'sub.5.2': 'Akses VPN',
    'sub.5.3': 'Topologi & VLAN',
    'sub.6.1': 'Konfigurasi Outlook',
    'sub.6.2': 'Berbagi berkas',
    'sub.6.3': 'Rapat online',
    'sub.7.1': 'Kebijakan kata sandi',
    'sub.7.2': 'Aktifkan MFA',
    'sub.7.3': 'Kenali email phishing',
    'sub.8.1': 'Tambah printer jaringan',
    'sub.8.2': 'Printer terbaca offline',
    'sub.8.3': 'Scan ke email',
    'sub.9.1': 'Peta rack & server',
    'sub.9.2': 'Jadwal cadangan data',
    'sub.9.3': 'Pemantauan layanan',
    'sub.10.1': 'Handover shift',
    'sub.10.2': 'Jalur eskalasi',
    'sub.10.3': 'Serah terima perangkat',
    'sub.11.1': 'Login SSO gagal',
    'sub.11.2': 'Outlook tidak sinkron',
    'sub.11.3': 'WiFi terputus berkala',
    'crumb.now': 'Gunakan BAKED IT',
    'notice.text': 'Bantu kami memahami pengalamanmu memakai dokumentasi ini.',
    'notice.link': 'Ikuti survei',
    'page.h1': 'Gunakan BAKED IT',
    'page.lead': 'Kenali alur kerja dukungan IT dari ujung ke ujung. Atur hak akses, siapkan perangkat kerja, amankan data, lalu pantau kondisi layanan. Catat hasilnya di setiap langkah supaya tim berikutnya tidak mulai dari nol.',
    'dc.1.t': 'Kelola akun & akses',
    'dc.1.d': 'Pengguna, grup, hak akses, dan onboarding.',
    'dc.2.t': 'Perangkat kerja',
    'dc.2.d': 'Laptop, desktop, periferal, dan lisensi software.',
    'dc.3.t': 'Jaringan & konektivitas',
    'dc.3.d': 'WiFi, LAN, VPN, VLAN, dan akses jarak jauh.',
    'dc.4.t': 'Email & kolaborasi',
    'dc.4.d': 'Email, kalender, berbagi berkas, dan rapat online.',
    'dc.5.t': 'Keamanan informasi',
    'dc.5.d': 'Kata sandi, MFA, phishing, dan penanganan insiden.',
    'dc.6.t': 'Server & infrastruktur',
    'dc.6.d': 'Server, penyimpanan, cadangan, dan pemantauan.',
    'dc.7.t': 'Prosedur & SOP',
    'dc.7.d': 'Onboarding, handover shift, dan jalur eskalasi.',
    'dc.8.t': 'Pemecahan masalah',
    'dc.8.d': 'Langkah diagnosis untuk keluhan yang sering masuk.',
    'dc.9.t': 'Referensi kode error',
    'dc.9.d': 'Arti tiap kode error dan langkah penanganannya.',
    'rail.edit': 'Edit halaman ini',
    'rail.copy': 'Salin untuk LLM',
    'doc.notFound': 'Dokumen tidak ditemukan',
    'doc.backHome': 'Kembali ke halaman utama',
    'footer.brand': 'Pusat panduan IT support untuk troubleshooting, SOP operasional, dan dokumentasi layanan dalam satu tempat.',
    'doc.loading': 'Memuat...',
    'doc.loadingBody': 'Memuat dokumen...',
    'footer.kategori': 'Kategori',
    'footer.k1': 'Akses & permintaan',
    'footer.k2': 'Perangkat kerja',
    'footer.k3': 'Jaringan & konektivitas',
    'footer.k4': 'Email & kolaborasi',
    'footer.k5': 'Keamanan informasi',
    'footer.k6': 'Server & infrastruktur',
    'footer.k7': 'Prosedur & SOP',
    'footer.k8': 'Referensi kode error',
    'marquee.title': 'Tools & sistem yang kami pakai',
    'footer.bantuan': 'Bantuan',
    'footer.b1': 'Gunakan BAKED IT',
    'footer.b2': 'Hubungi support',
    'footer.b3': 'Laporkan bug',
  },
  en: {
    'nav.whatsnew': "What's new?",

    'lang.title':   'Language',
    'theme.light':  'Light mode',
    'theme.dark':   'Dark mode',
    'theme.auto':   'Auto',
    'layout.fixed': 'Fixed width',
    'layout.fluid': 'Fluid width',
    'ver.current':  '1.0 (Current release)',
    'ver.archive':  'Archives',

    'hero.h1':      'Find Your',
    'hero.w1':      'Guidance',
    'search.ph':    'Search issues, devices, or guides',

    'ql.1': 'Get started',
    'ql.2': 'Reset password',
    'ql.3': 'VPN access',
    'ql.4': 'Network map',
    'ql.5': 'Common error codes',

    'panel.recent':  'Recently viewed',
    'panel.popular': 'Popular',
    'panel.results': 'Results',
    'panel.empty':   'No results for “{q}”. Try a device name or an error code.',

    'card.1.t': 'Use BAKED IT',
    'card.1.d': 'Get to know the IT support workflow end to end.',
    'card.2.t': 'Learn with tutorials',
    'card.2.d': 'Learn the key workflows by following step-by-step guides.',
    'card.3.t': 'Access & requests',
    'card.3.d': 'Request and manage the access rights you need to do your work.',
    'card.4.t': 'AI assistant',
    'card.4.d': 'Get quick help from the internal AI assistant while you work.',
    'card.5.t': 'Manage infrastructure',
    'card.5.d': 'Learn how to install, configure, and maintain office systems.',
    'card.6.t': 'Integrations & tools',
    'card.6.d': 'Connect BAKED IT to the tools and workflows your team already uses.',
    'card.7.t': 'Architecture & topology',
    'card.7.d': 'Use this reference to understand the office network and infrastructure.',
    'card.8.t': 'Contribute to the docs',
    'card.8.d': 'Learn how to write and submit revisions to the team documentation.',
    'dnav.1': 'Use BAKED IT',
    'dnav.2': 'AI Assistant',
    'dnav.3': 'Devices',
    'dnav.4': 'Integrations',
    'dnav.5': 'Installation',
    'dnav.6': 'Administration',
    'dnav.7': 'Licensing',
    'dnav.8': 'Contributing',
    'dnav.9': 'Architecture',
    'side.1': 'Get started',
    'side.2': 'Tutorials',
    'side.3': 'Manage accounts & access',
    'side.4': 'Work devices',
    'side.5': 'Network & connectivity',
    'side.6': 'Email & collaboration',
    'side.7': 'Information security',
    'side.8': 'Printers & office devices',
    'side.9': 'Servers & infrastructure',
    'side.10': 'Procedures & SOP',
    'side.11': 'Common troubleshooting',
    'side.12': 'Error code reference',
    'sub.2.1': 'Onboard new employees',
    'sub.2.2': 'Set up work laptop',
    'sub.2.3': 'Secure your account',
    'sub.3.1': 'Create new account',
    'sub.3.2': 'Reset password',
    'sub.3.3': 'Access rights & groups',
    'sub.4.1': 'Reimage standard laptops',
    'sub.4.2': 'Peripherals & docking',
    'sub.4.3': 'Software licensing',
    'sub.5.1': 'Connect to office WiFi',
    'sub.5.2': 'VPN access',
    'sub.5.3': 'Topology & VLAN',
    'sub.6.1': 'Configure Outlook',
    'sub.6.2': 'Share files',
    'sub.6.3': 'Online meetings',
    'sub.7.1': 'Password policy',
    'sub.7.2': 'Enable MFA',
    'sub.7.3': 'Identify phishing emails',
    'sub.8.1': 'Add network printer',
    'sub.8.2': 'Printer shows offline',
    'sub.8.3': 'Scan to email',
    'sub.9.1': 'Rack & server map',
    'sub.9.2': 'Backup schedule',
    'sub.9.3': 'Service monitoring',
    'sub.10.1': 'Shift handover',
    'sub.10.2': 'Escalation path',
    'sub.10.3': 'Device handoff',
    'sub.11.1': 'SSO login fails',
    'sub.11.2': 'Outlook not syncing',
    'sub.11.3': 'WiFi drops intermittently',
    'crumb.now': 'Use BAKED IT',
    'notice.text': 'Help us understand how you use this documentation.',
    'notice.link': 'Take a survey',
    'page.h1': 'Use BAKED IT',
    'page.lead': 'Get to know the IT support workflow end to end. Manage access rights, set up work devices, secure data, and monitor service health. Track outcomes at each step so the next team doesn\'t start from zero.',
    'dc.1.t': 'Manage accounts & access',
    'dc.1.d': 'Users, groups, access rights, and onboarding.',
    'dc.2.t': 'Work devices',
    'dc.2.d': 'Laptops, desktops, peripherals, and software licensing.',
    'dc.3.t': 'Network & connectivity',
    'dc.3.d': 'WiFi, LAN, VPN, VLAN, and remote access.',
    'dc.4.t': 'Email & collaboration',
    'dc.4.d': 'Email, calendar, file sharing, and online meetings.',
    'dc.5.t': 'Information security',
    'dc.5.d': 'Passwords, MFA, phishing, and incident response.',
    'dc.6.t': 'Servers & infrastructure',
    'dc.6.d': 'Servers, storage, backups, and monitoring.',
    'dc.7.t': 'Procedures & SOP',
    'dc.7.d': 'Onboarding, shift handover, and escalation paths.',
    'dc.8.t': 'Troubleshooting',
    'dc.8.d': 'Diagnostic steps for common complaints.',
    'dc.9.t': 'Error code reference',
    'dc.9.d': 'What each error code means and how to fix it.',
    'rail.edit': 'Edit this page',
    'rail.copy': 'Copy for LLM',
    'doc.notFound': 'Document not found',
    'doc.backHome': 'Back to the main page',
    'footer.brand': 'The IT support hub for troubleshooting, operational SOPs, and service documentation — all in one place.',
    'doc.loading': 'Loading...',
    'doc.loadingBody': 'Loading document...',
    'footer.kategori': 'Categories',
    'footer.k1': 'Access & requests',
    'footer.k2': 'Work devices',
    'footer.k3': 'Network & connectivity',
    'footer.k4': 'Email & collaboration',
    'footer.k5': 'Information security',
    'footer.k6': 'Servers & infrastructure',
    'footer.k7': 'Procedures & SOP',
    'footer.k8': 'Error code reference',
    'marquee.title': 'Tools & systems we work with',
    'footer.bantuan': 'Help',
    'footer.b1': 'Use BAKED IT',
    'footer.b2': 'Contact support',
    'footer.b3': 'Report a bug',
  },
};

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.id[key] || key;
}

/* ============================================================
   Data dokumen — nanti bisa diganti hasil fetch index pencarian
   (mis. Pagefind) dengan bentuk objek yang sama.
   ============================================================ */
const DOCS = [
  { p: 'network/switch-port-tidak-naik', id: 'Port switch Cisco tidak naik setelah patching', en: 'Cisco switch port stays down after patching' },
  { p: 'network/peta-kabel-lantai-3',    id: 'Peta jalur kabel — Lantai 3 dan Rack B',        en: 'Cable route map — Floor 3 and Rack B' },
  { p: 'network/topologi-vlan',          id: 'Topologi jaringan dan segmentasi VLAN',         en: 'Network topology and VLAN segmentation' },
  { p: 'network/wifi-putus',             id: 'WiFi terputus berkala di ruang meeting',        en: 'WiFi drops intermittently in meeting rooms' },
  { p: 'hardware/reimage-laptop',        id: 'Reimage laptop standar Dell dan Lenovo',        en: 'Reimage standard Dell and Lenovo laptops' },
  { p: 'hardware/printer-offline',       id: 'Printer jaringan terbaca offline',              en: 'Network printer shows as offline' },
  { p: 'software/sso-gagal',             id: 'Login SSO gagal token expired',                 en: 'SSO login fails with an expired token' },
  { p: 'software/outlook-sync',          id: 'Outlook tidak sinkron setelah ganti password',  en: 'Outlook stops syncing after a password change' },
  { p: 'prosedur/handover',              id: 'Handover shift dan tiket pending',              en: 'Shift handover and pending tickets' },
  { p: 'akses/reset-password',           id: 'Reset password Active Directory',               en: 'Reset an Active Directory password' },
  { p: 'akses/akses-vpn',                id: 'Cara mengajukan akses VPN',                     en: 'How to request VPN access' },
  { p: 'referensi/kode-error',           id: 'Kode error umum dan artinya',                   en: 'Common error codes and what they mean' },
];

/* Dokumen yang paling sering dibuka — tampil saat pencarian masih kosong */
const POPULAR = [
  'akses/reset-password',
  'akses/akses-vpn',
  'referensi/kode-error',
];

/* Fallback "Terakhir dilihat" sebelum ada riwayat lokal */
const RECENT_FALLBACK = [
  'network/topologi-vlan',
  'hardware/reimage-laptop',
  'software/sso-gagal',
];

const RECENT_MAX = 3;

/* ============================================================
   Elemen
   ============================================================ */
const root   = document.documentElement;
const wrap   = document.getElementById('searchWrap');
const field  = document.getElementById('searchField');
const input  = document.getElementById('searchInput');
const panel  = document.getElementById('searchPanel');
const scrim  = document.getElementById('scrim');
const menus  = Array.from(document.querySelectorAll('.menu'));

let selectedIndex = -1;

/* ============================================================
   Terapkan preferensi
   ============================================================ */
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme() {
  const resolved = state.theme === 'auto' ? (darkQuery.matches ? 'dark' : 'light') : state.theme;
  root.dataset.theme = resolved;
}

function applyLayout() {
  root.dataset.layout = state.layout;
}

function applyLang() {
  root.lang = state.lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  if (isSearchOpen()) render();
}

function markMenus() {
  document.querySelectorAll('.pop-item[data-set]').forEach((item) => {
    if (item.classList.contains('no-tick')) return;
    item.classList.toggle('on', state[item.dataset.set] === item.dataset.value);
    item.setAttribute('aria-checked', String(state[item.dataset.set] === item.dataset.value));
  });
}

darkQuery.addEventListener('change', () => {
  if (state.theme === 'auto') applyTheme();
});

applyTheme();
applyLayout();
applyLang();
markMenus();

/* ============================================================
   Menu topbar
   ============================================================ */
function closeMenus(exception) {
  menus.forEach((menu) => {
    if (menu === exception) return;
    menu.classList.remove('open');
    menu.querySelector('[data-menu-btn]').setAttribute('aria-expanded', 'false');
  });
}

function openMenu(menu) {
  closeMenus(menu);
  closeSearch();

  const btn = menu.querySelector('[data-menu-btn]');
  const pop = menu.querySelector('.menu-pop');

  menu.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
  pop.style.setProperty('--caret', Math.round(btn.offsetWidth / 2 - 6) + 'px');

  const items = pop.querySelectorAll('.pop-item');
  const active = pop.querySelector('.pop-item.on') || items[0];
  if (active) active.focus();
}

menus.forEach((menu) => {
  const btn = menu.querySelector('[data-menu-btn]');
  const pop = menu.querySelector('.menu-pop');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.contains('open') ? closeMenus() : openMenu(menu);
  });

  pop.addEventListener('click', (e) => {
    const item = e.target.closest('.pop-item');
    if (!item) return;

    const setting = item.dataset.set;
    if (setting && state[setting] !== undefined) {
      state[setting] = item.dataset.value;
      save(KEY[setting], item.dataset.value);
      if (setting === 'theme')  applyTheme();
      if (setting === 'layout') applyLayout();
      if (setting === 'lang')   applyLang();
      markMenus();
    }
    closeMenus();
    btn.focus();
  });

  pop.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const items = Array.from(pop.querySelectorAll('.pop-item'));
    const at = items.indexOf(document.activeElement);
    const next = (at + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
    items[next].focus();
  });
});

/* ============================================================
   Riwayat lokal
   ============================================================ */
function title(doc) {
  return state.lang === 'en' ? doc.en : doc.id;
}

function byPath(path) {
  return DOCS.find((doc) => doc.p === path);
}

function readRecent() {
  let stored = [];
  try {
    stored = JSON.parse(localStorage.getItem(KEY.recent)) || [];
  } catch (e) {
    stored = [];
  }
  const paths = stored.length ? stored : RECENT_FALLBACK;
  return paths.map(byPath).filter(Boolean).slice(0, RECENT_MAX);
}

function pushRecent(path) {
  const current = readRecent().map((doc) => doc.p).filter((p) => p !== path);
  current.unshift(path);
  save(KEY.recent, JSON.stringify(current.slice(0, RECENT_MAX)));
}

/* ============================================================
   Render isi panel pencarian
   ============================================================ */
function escapeHtml(str) {
  return str.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function highlight(text, query) {
  if (!query) return escapeHtml(text);
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return escapeHtml(text);
  return (
    escapeHtml(text.slice(0, idx)) +
    '<mark>' + escapeHtml(text.slice(idx, idx + query.length)) + '</mark>' +
    escapeHtml(text.slice(idx + query.length))
  );
}

function section(label, docs, query) {
  if (!docs.length) return '';
  return (
    `<div class="s-label">${escapeHtml(label)}</div>` +
    docs
      .map((doc) => `<button class="s-item" type="button" data-path="${doc.p}">${highlight(title(doc), query)}</button>`)
      .join('')
  );
}

function render() {
  const query = input.value.trim();
  selectedIndex = -1;

  if (!query) {
    panel.innerHTML =
      section(t('panel.recent'), readRecent(), '') +
      section(t('panel.popular'), POPULAR.map(byPath).filter(Boolean), '');
    return;
  }

  const needle = query.toLowerCase();
  const matches = DOCS
    .filter((doc) => (doc.id + ' ' + doc.en + ' ' + doc.p).toLowerCase().includes(needle))
    .slice(0, 8);

  panel.innerHTML = matches.length
    ? section(t('panel.results'), matches, query)
    : `<div class="s-empty">${escapeHtml(t('panel.empty')).replace('{q}', escapeHtml(query))}</div>`;
}

/* ============================================================
   Buka / tutup pencarian
   ============================================================ */
function isSearchOpen() {
  return wrap.classList.contains('open');
}

function openSearch(prefill) {
  if (typeof prefill === 'string') input.value = prefill;
  closeMenus();
  wrap.classList.add('open');
  scrim.classList.add('on');
  render();
  input.focus();
}

function closeSearch() {
  if (!isSearchOpen()) return;
  wrap.classList.remove('open');
  scrim.classList.remove('on');
  input.blur();
  selectedIndex = -1;
}

function openDoc(path) {
  pushRecent(path);
  closeSearch();
  // Navigate ke halaman dokumen
  window.location.href = 'doc.html?p=' + encodeURIComponent(path);
}

/* ============================================================
   Event
   ============================================================ */
field.addEventListener('mousedown', (e) => {
  if (e.target !== input) e.preventDefault();   // jaga fokus tetap di input
  openSearch();
});

input.addEventListener('focus', () => openSearch());
input.addEventListener('input', render);

panel.addEventListener('mousedown', (e) => e.preventDefault());
panel.addEventListener('click', (e) => {
  const item = e.target.closest('.s-item');
  if (item) openDoc(item.dataset.path);
});

scrim.addEventListener('click', closeSearch);

document.addEventListener('click', (e) => {
  if (isSearchOpen() && !wrap.contains(e.target)) closeSearch();
  if (!e.target.closest('.menu')) closeMenus();
});

document.querySelectorAll('.quicklinks a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch(link.textContent.trim());
  });
});

document.addEventListener('keydown', (e) => {
  const typingElsewhere =
    document.activeElement &&
    ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) &&
    document.activeElement !== input;

  if (e.key === 'Escape') {
    closeMenus();
    closeSearch();
    return;
  }

  // "/" membuka pencarian, seperti di GitLab Docs
  if (e.key === '/' && !isSearchOpen() && !typingElsewhere) {
    e.preventDefault();
    openSearch('');
    return;
  }

  // Ctrl/Cmd + K sebagai alternatif
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    isSearchOpen() ? closeSearch() : openSearch('');
    return;
  }

  if (!isSearchOpen()) return;

  const items = panel.querySelectorAll('.s-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const step = e.key === 'ArrowDown' ? 1 : -1;
    selectedIndex = (selectedIndex + step + items.length) % items.length;
    items.forEach((item, i) => item.classList.toggle('sel', i === selectedIndex));
    items[selectedIndex].scrollIntoView({ block: 'nearest' });
  }

  if (e.key === 'Enter' && selectedIndex > -1) {
    e.preventDefault();
    openDoc(items[selectedIndex].dataset.path);
  }
});

/* ============================================================
   Scroll to Top Button
   ============================================================ */
const toTopBtn = document.getElementById('toTop');

function toggleToTopButton() {
  if (!toTopBtn) return;
  toTopBtn.classList.toggle('show', window.scrollY > 300);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Tombol ini hanya ada di doc.html & use-it-docs.html, tidak di index.html.
// Tanpa penjagaan ini, script berhenti total di index.html.
if (toTopBtn) {
  window.addEventListener('scroll', toggleToTopButton, { passive: true });
  toTopBtn.addEventListener('click', scrollToTop);
  toggleToTopButton();
}

/* ============================================================
   Sidebar Toggle
   ============================================================ */
document.querySelectorAll('[data-side-toggle]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('open');
  });
});

/* ============================================================
   Notice Close
   ============================================================ */
const noticeClose = document.getElementById('noticeClose');
const notice = document.getElementById('notice');
if (noticeClose && notice) {
  noticeClose.addEventListener('click', () => {
    notice.classList.add('hide');
  });
}
