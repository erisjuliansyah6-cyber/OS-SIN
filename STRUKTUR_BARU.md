# 📱 Struktur Multi-Page Application

## ✅ Struktur Baru (Terpisah per Halaman)

```
src/
├── pages/              ← HALAMAN TERPISAH
│   ├── home.html       ← Beranda (pembuka)
│   ├── driver.html     ← Halaman Layanan Driver
│   ├── helper.html     ← Halaman Layanan Helper
│   ├── technical.html  ← Halaman Layanan Technical
│   ├── about.html      ← Halaman Tentang Kami
│   └── contact.html    ← Halaman Kontak & Karir
│
├── css/                ← STYLESHEET
│   ├── global.css      ← Variabel & base styles
│   ├── navbar.css      ← Style navbar & footer
│   ├── home.css        ← Style halaman beranda
│   ├── services.css    ← Style halaman layanan
│   └── pages.css       ← Style halaman tentang & kontak
│
└── js/
    └── main.js         ← ROUTER (mengelola navigasi)

index.html             ← Main container (navbar + content area + footer)
script.js              ← Compatibility script (minimal)
```

## 🎯 Cara Kerjanya

### 1️⃣ Beranda (Home)
- User pertama kali masuk → lihat halaman **beranda saja** (sederhana)
- Ada 3 tombol layanan + CTA untuk klik layanan

### 2️⃣ Klik Layanan
- Klik "Driver" di navbar → **navigate ke `/driver`**
- HTML di-load dari `src/pages/driver.html`
- CSS driver-specific sudah include di index.html
- Page di-display dengan smooth animation

### 3️⃣ Navigasi Lainnya
- Setiap halaman (Helper, Technical, About, Contact) terpisah
- **Tidak ada page reload** - hanya update content area
- URL berubah: `/`, `/driver`, `/helper`, `/technical`, `/about`, `/contact`
- Browser back/forward **support**

## 📊 File Mapping

| URL | Page File | Description |
|-----|-----------|-------------|
| `/` | `home.html` | Halaman pembuka |
| `/driver` | `driver.html` | Layanan driver |
| `/helper` | `helper.html` | Layanan helper |
| `/technical` | `technical.html` | Layanan technical |
| `/about` | `about.html` | Tentang kami |
| `/contact` | `contact.html` | Hubungi kami & karir |

## 🔄 Navigation Flow

```
User visits: https://domain.com/
    ↓
index.html loaded (navbar + empty content area)
    ↓
main.js runs → loadPage('home')
    ↓
Fetch src/pages/home.html
    ↓
Insert ke #page-content
    ↓
setupPageEventListeners() 
    ↓
Home page displayed ✓

---

User clicks "Driver" link
    ↓
navigateTo('driver')
    ↓
Update URL to /driver
    ↓
Fetch src/pages/driver.html
    ↓
Update #page-content dengan HTML baru
    ↓
Driver page displayed ✓
```

## 🎨 CSS Architecture

**Global** (`global.css`):
- CSS Variables untuk warna, spacing, sizing
- Typography base styles
- Button styles
- Animation keyframes

**Navbar** (`navbar.css`):
- Navigation bar styling
- Footer styling  
- Mobile responsive

**Pages** (`home.css`, `services.css`, `pages.css`):
- Layout grid
- Component-specific styles
- Responsive adjustments

## 🚀 Key Features

✅ **Multi-page feel** tanpa page reload  
✅ **Clean URL routing** (`/driver`, `/helper`, dll)  
✅ **Browser history** support (back/forward works)  
✅ **Modular CSS** - easy to customize per page  
✅ **Smooth animations** dengan reveal effect  
✅ **Mobile responsive** navbar dengan toggle  
✅ **Contact form** handling di page kontak  

## 🛠️ Customization

### Tambah Halaman Baru

1. **Buat HTML file** di `src/pages/nama.html`
2. **Update router** di `src/js/main.js`:
   ```javascript
   const PAGES = {
     nama: { path: '/nama', file: 'src/pages/nama.html' },
     // ...
   }
   ```
3. **Add navbar link** di `index.html`:
   ```html
   <li><a href="#" class="nav-link" data-page="nama">Nama</a></li>
   ```

### Update Warna/Style

Edit `src/css/global.css` CSS Variables:
```css
:root {
  --primary: #2f7dff;
  --primary-dark: #1f61d6;
  /* ... edit warna di sini */
}
```

### Tambah Konten Halaman

Edit file `.html` di `src/pages/` sesuai kebutuhan.

## 📱 Responsive

- Mobile navbar dengan hamburger menu
- Touch-friendly buttons
- Grid layout responsive
- Tablet & desktop optimized

## ✨ Tech Stack

- HTML5 (semantic)
- CSS3 (Grid, Flexbox, Variables)
- Vanilla JavaScript (no framework)
- Client-side routing (History API)

---

**Semuanya terpisah!** Tidak ada landing page monolith lagi. Setiap halaman adalah halaman sendiri yang di-load secara dinamis. 🎉
