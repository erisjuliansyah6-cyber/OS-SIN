# 📊 Diagram Struktur Multi-Page

## Directory Tree

```
OS Project/
│
├── 📄 index.html                    ← Main container (navbar + content + footer)
├── 📄 script.js                     ← Minimal wrapper
│
├── 📁 src/
│   ├── 📁 pages/                   ← HALAMAN TERPISAH
│   │   ├── home.html               ← Beranda (pembuka)
│   │   ├── driver.html             ← Layanan Driver
│   │   ├── helper.html             ← Layanan Helper
│   │   ├── technical.html          ← Layanan Technical
│   │   ├── about.html              ← Tentang Kami
│   │   └── contact.html            ← Kontak & Karir
│   │
│   ├── 📁 css/                     ← STYLESHEET
│   │   ├── global.css              ← Base + variables
│   │   ├── navbar.css              ← Nav + footer
│   │   ├── home.css                ← Home styles
│   │   ├── services.css            ← Service styles
│   │   └── pages.css               ← About + contact styles
│   │
│   └── 📁 js/
│       └── main.js                 ← Router utama
│
├── 📁 public/
│   └── images/
│
├── 📄 STRUKTUR_BARU.md             ← Dokumentasi
├── 📄 CHECKLIST_SELESAI.md         ← Progress tracker
└── ...
```

## Navigation Map

```
                    🏠 index.html (Container)
                    ├─ Navbar (tetap)
                    ├─ Content Area (dinamis)
                    └─ Footer (tetap)
                            ↓
                    ┌───────┼───────┐
                    ↓       ↓       ↓
                  HOME   DRIVER  HELPER
                    ↓       ↓       ↓
            TECHNICAL    ABOUT  CONTACT
```

## Page Load Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    User visits: /driver                      │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  navigateTo('driver')                                        │
│  ├─ Update URL → /driver                                   │
│  ├─ Fetch driver.html                                      │
│  └─ setupPageEventListeners()                              │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  <main id="page-content">                                    │
│    <!-- HTML dari driver.html di-insert di sini -->         │
│  </main>                                                     │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  Driver Page Displayed dengan animasi                        │
│  ✓ No page reload                                           │
│  ✓ URL changed to /driver                                   │
│  ✓ Navbar & footer tetap (sticky)                          │
│  ✓ Back button works (history)                             │
└─────────────────────────────────────────────────────────────┘
```

## Perbandingan: Lama vs Baru

```
╔════════════════════════════════════════════════════════════╗
║ STRUKTUR LAMA (Landing Page)                              ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  index.html (MONOLITH - SEMUA ADA DI SATU FILE)            ║
║  ├─ Navbar                                                 ║
║  ├─ Hero Section                                           ║
║  ├─ Services Carousel                                      ║
║  ├─ About Section (anchor link)                            ║
║  ├─ Contact Section (anchor link)                          ║
║  └─ Footer                                                 ║
║                                                             ║
║  ❌ Anchor links (#services, #about, #contact)             ║
║  ❌ Semua HTML dalam 1 file besar                          ║
║  ❌ CSS all-in-one (styles.css besar)                      ║
║  ❌ Sulit untuk di-split / di-customize                    ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝

vs

╔════════════════════════════════════════════════════════════╗
║ STRUKTUR BARU (Multi-Page)                                ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  index.html (CONTAINER)                                    ║
║  ├─ Navbar (tetap)                                        ║
║  ├─ <main id="page-content">                              ║
║  │   ├─ Load: home.html                                   ║
║  │   ├─ Load: driver.html                                 ║
║  │   ├─ Load: helper.html                                 ║
║  │   ├─ Load: technical.html                              ║
║  │   ├─ Load: about.html                                  ║
║  │   └─ Load: contact.html                                ║
║  └─ Footer (tetap)                                        ║
║                                                             ║
║  src/pages/ (6 file HTML terpisah)                         ║
║  src/css/ (5 file CSS terpisah)                            ║
║  src/js/ (1 router utama)                                  ║
║                                                             ║
║  ✅ Route URLs (/driver, /helper, dll)                     ║
║  ✅ Setiap halaman adalah file terpisah                    ║
║  ✅ CSS per halaman (modular)                              ║
║  ✅ Mudah develop & customize                              ║
║  ✅ No page reload (smooth UX)                             ║
║  ✅ Browser history works                                  ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
```

## File Organization (Lama vs Baru)

### ❌ SEBELUM
```
OS Project/
├── index.html       (400+ lines!)
├── script.js        (200+ lines!)
├── styles.css       (500+ lines!)
└── public/
```

### ✅ SESUDAH
```
OS Project/
├── index.html       (50 lines - clean container)
├── script.js        (1 line - minimal)
├── src/
│   ├── pages/       (6 x ~100 lines each)
│   ├── css/         (5 x ~150 lines each)
│   └── js/main.js   (150 lines - router)
└── public/
```

## Navigasi Pengguna

```
Home (/)
├─ Click "Driver"
│  └─ /driver → driver.html loaded
│     └─ Click "Helper"
│        └─ /helper → helper.html loaded
│           └─ Click "Tentang"
│              └─ /about → about.html loaded
│
Home (/)
├─ Click "Hubungi Kami"
│  └─ /contact → contact.html loaded
│
Any Page
├─ Click Logo/Brand
│  └─ / → home.html loaded (back to home)
│
Any Page
├─ Browser Back Button
│  └─ Previous page restored (history works!)
```

## URL Routing

```
/                    → Home (beranda)
/driver              → Layanan Driver
/helper              → Layanan Helper
/technical           → Layanan Technical Service
/about               → Tentang Kami
/contact             → Kontak & Karir
```

## React to Vanilla JS Comparison

```
WITH ROUTER LIBRARY (React Router, Vue Router, etc):
- Kompleks setup
- npm packages
- Learning curve

WITH VANILLA JS (Main.js):
✅ Simple & lightweight
✅ No dependencies
✅ Full control
✅ Easy to modify
```

---

**KESIMPULAN**: Dari landing page monolith menjadi multi-page app yang terstruktur! 🎯
