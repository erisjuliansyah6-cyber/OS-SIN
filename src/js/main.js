/**
 * Main Router untuk aplikasi multi-page
 * Menangani navigasi antar halaman dan dynamic loading
 */

const PAGES = {
  home: { path: '/', file: 'src/pages/home.html' },
  driver: { path: '/driver', file: 'src/pages/driver.html' },
  helper: { path: '/helper', file: 'src/pages/helper.html' },
  technical: { path: '/technical', file: 'src/pages/technical.html' },
  about: { path: '/about', file: 'src/pages/about.html' },
  contact: { path: '/contact', file: 'src/pages/contact.html' }
};

let currentPage = 'home';

/**
 * Navigasi ke halaman tertentu
 */
async function navigateTo(page) {
  if (!PAGES[page]) return;

  // Update URL
  window.history.pushState({ page }, '', PAGES[page].path);
  
  // Load halaman
  await loadPage(page);
  
  // Scroll ke atas
  window.scrollTo(0, 0);
  
  // Update navbar active state
  updateNavbar(page);
}

/**
 * Load halaman HTML
 */
async function loadPage(page) {
  try {
    const response = await fetch(PAGES[page].file);
    if (!response.ok) throw new Error('Failed to load page');
    
    const html = await response.text();
    const content = document.getElementById('page-content');
    
    if (content) {
      content.innerHTML = html;
      currentPage = page;
      
      // Setup event listeners untuk halaman yang baru dimuat
      setupPageEventListeners();
      
      // Trigger reveal animations
      setupRevealAnimations();
    }
  } catch (error) {
    console.error('Error loading page:', error);
    const content = document.getElementById('page-content');
    if (content) {
      content.innerHTML = '<p style="text-align: center; padding: 60px 24px;">Maaf, halaman tidak dapat dimuat. Silakan coba lagi.</p>';
    }
  }
}

/**
 * Setup event listeners untuk navigasi di halaman
 */
function setupPageEventListeners() {
  // Link dengan data-page attribute
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      // Close dropdown if it's open
      const dropdown = document.querySelector('.nav-item-dropdown.active');
      if (dropdown) {
        dropdown.classList.remove('active');
      }
      navigateTo(page);
    });
  });

  // Form contact
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // Brand click untuk kembali ke home
  const brand = document.querySelector('.brand');
  if (brand) {
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
    });
  }
}

/**
 * Setup dropdown functionality
 */
function setupDropdown() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const navItemDropdown = document.querySelector('.nav-item-dropdown');
  
  if (dropdownToggle && navItemDropdown) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      navItemDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!navItemDropdown.contains(e.target)) {
        navItemDropdown.classList.remove('active');
      }
    });
  }
}

/**
 * Handle form contact
 */
async function handleContactForm(e) {
  e.preventDefault();
  
  const form = e.target;
  const formStatus = document.getElementById('formStatus');
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  try {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim...';
    
    const formData = new FormData(form);
    
    // Simulasi pengiriman - ganti dengan API yang sebenarnya
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update status
    formStatus.textContent = '✓ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.';
    formStatus.classList.add('success');
    formStatus.classList.remove('error');
    
    // Reset form
    form.reset();
    
    // Clear status setelah 5 detik
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.classList.remove('success');
    }, 5000);
    
  } catch (error) {
    console.error('Error sending form:', error);
    formStatus.textContent = '✗ Gagal mengirim pesan. Silakan coba lagi.';
    formStatus.classList.add('error');
    formStatus.classList.remove('success');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

/**
 * Update navbar active state
 */
function updateNavbar(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[data-page="${page}"]`);
  if (activeLink && activeLink.classList.contains('nav-link')) {
    activeLink.classList.add('active');
  }
}

/**
 * Setup reveal animations
 */
function setupRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal');
  
  revealItems.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
}

/**
 * Setup navbar toggle untuk mobile
 */
function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }
}

/**
 * Setup year di footer
 */
function setupYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Handle browser back/forward
 */
window.addEventListener('popstate', (event) => {
  const page = event.state?.page || 'home';
  loadPage(page).then(() => updateNavbar(page));
});

/**
 * Initialize aplikasi
 */
document.addEventListener('DOMContentLoaded', async () => {
  setupYear();
  setupMobileMenu();
  
  // Load halaman pertama berdasarkan URL saat ini
  const path = window.location.pathname;
  let page = 'home';
  
  for (const [key, pageInfo] of Object.entries(PAGES)) {
    if (pageInfo.path === path) {
      page = key;
      break;
    }
  }
  
  await loadPage(page);
  updateNavbar(page);
  
  // Setup brand navigation
  const brand = document.querySelector('.brand');
  if (brand) {
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
    });
  }
});

// Export untuk digunakan di tempat lain jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { navigateTo, loadPage };
}
