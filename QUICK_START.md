# 🚀 Quick Start Guide

## Cara Menjalankan

1. **Buka di browser:**
   ```
   http://localhost/OS Project/
   ```
   atau buka file `index.html` langsung

2. **Aplikasi akan:**
   - Load beranda secara otomatis
   - Router siap untuk navigasi
   - Semua CSS dan JS sudah linked

## 🎯 Mengerti Struktur

### File Utama
- `index.html` - Container (navbar + dynamic content + footer)
- `src/js/main.js` - Router yang mengelola navigasi
- `src/pages/*.html` - Content halaman (6 file)
- `src/css/*.css` - Styling (5 file)

### Data Flow
```
User Click Link
    ↓
data-page attribute captured
    ↓
navigateTo('page-name')
    ↓
Fetch page HTML
    ↓
Update #page-content
    ↓
setupEventListeners()
    ↓
Page Displayed
```

## 🔧 Customization Common

### 1. Ubah Warna Tema
Edit: `src/css/global.css`
```css
:root {
  --primary: #2f7dff;        ← Ubah warna utama
  --primary-dark: #1f61d6;   ← Ubah warna hover
  --text: #12324b;           ← Ubah warna text
  /* ... etc ... */
}
```

### 2. Ubah Konten Halaman
Edit file `.html` di `src/pages/`:
- `home.html` - Ubah konten beranda
- `driver.html` - Ubah konten driver
- `about.html` - Ubah konten tentang
- etc.

### 3. Ubah Logo
Edit di `index.html` navbar:
```html
<img src="public/images/LOGO_SIN_TERBARU_3D-removebg-preview.png" />
```

### 4. Ubah Informasi Kontak
Edit di `contact.html`:
```html
<!-- Email, phone, alamat, dsb -->
```

### 5. Update Footer Links
Edit di `index.html` footer section

## ➕ Tambah Halaman Baru

Misal ingin tambah halaman "Pricing":

### Step 1: Buat File HTML
Buat: `src/pages/pricing.html`
```html
<section class="page-pricing">
  <div class="container">
    <div class="page-header reveal">
      <h1>Paket Harga</h1>
      <p class="subtitle">Pilih paket yang sesuai kebutuhan Anda</p>
    </div>
    <!-- Konten pricing di sini -->
  </div>
</section>
```

### Step 2: Update Router
Edit: `src/js/main.js`
```javascript
const PAGES = {
  home: { path: '/', file: 'src/pages/home.html' },
  driver: { path: '/driver', file: 'src/pages/driver.html' },
  // ... existing pages ...
  pricing: { path: '/pricing', file: 'src/pages/pricing.html' },  // ADD THIS
};
```

### Step 3: Tambah Navbar Link
Edit: `index.html`
```html
<ul class="nav-links">
  <li><a href="#" class="nav-link" data-page="driver">Driver</a></li>
  <li><a href="#" class="nav-link" data-page="pricing">Harga</a></li>  <!-- ADD THIS -->
  <!-- ... etc ... -->
</ul>
```

### Step 4: Buat CSS (Optional)
Buat: `src/css/pricing.css`
```css
.page-pricing {
  padding: 80px 0;
}
/* ... styling ... */
```

### Step 5: Link CSS di index.html (Optional)
```html
<link rel="stylesheet" href="src/css/pricing.css" />
```

### Step 6: Test
- Buka browser
- Click link "Harga" di navbar
- URL berubah ke `/pricing`
- Halaman pricing ditampilkan

**SELESAI!** Halaman baru siap. 🎉

## 📝 Form Handling

### Contact Form
Edit: `src/pages/contact.html`

Current form handler:
- Simulasi pengiriman (1 detik)
- Show success message
- Clear form

Untuk real integration:
```javascript
// Di src/js/main.js, function handleContactForm
// Replace fetch dengan API endpoint Anda
```

## 🎨 Styling Tips

### Add Class ke Element
```html
<div class="my-custom-class">Content</div>
```

### Add CSS Rule
```css
.my-custom-class {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}
```

### Use CSS Variables
```css
.my-element {
  color: var(--primary);        /* Primary color */
  background: var(--surface);   /* White/surface */
  padding: 20px;                /* Custom padding */
}
```

## 🔍 Debugging

### Check Console
- Press F12 → Console tab
- Lihat messages & errors
- Check network tab untuk fetch errors

### Common Issues
```
Error: "Failed to load page"
→ Check file path di src/pages/
→ Verify PAGES object di main.js

Link tidak working
→ Check data-page attribute
→ Verify link sudah punya data-page

CSS tidak loading
→ Check link href di index.html
→ Verify file path correct
```

## 📱 Mobile Testing

1. Open DevTools (F12)
2. Click device toolbar icon (mobile view)
3. Test navbar hamburger menu
4. Test page navigation
5. Check responsive layout

## 🚀 Performance Tips

1. **Optimize Images**
   - Compress images di `public/images/`
   - Use WebP format jika supported

2. **Minify CSS**
   - Remove unused styles
   - Combine CSS files if needed

3. **Lazy Loading**
   - Images bisa lazy loaded
   - Add `loading="lazy"` to img tags

## 📚 File Reference

| File | Purpose | Edit? |
|------|---------|-------|
| index.html | Main container | ✓ (navbar, footer, links) |
| src/js/main.js | Router logic | ✓ (tambah page, modify logic) |
| src/pages/*.html | Content | ✓ (ubah konten) |
| src/css/*.css | Styling | ✓ (ubah design) |
| script.js | Minimal wrapper | ✗ (jangan diubah) |

## 🎓 Learning Path

1. **Understand structure** → Read STRUKTUR_BARU.md
2. **See diagram** → Check DIAGRAM_STRUKTUR.md
3. **Verify setup** → Check CHECKLIST_SELESAI.md
4. **Customize** → Follow steps above
5. **Deploy** → Upload ke server

---

**Happy coding!** 💻✨
