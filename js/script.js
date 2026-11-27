document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // 3. Product category filter & search (products.html)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('product-search');
  const productCards = document.querySelectorAll('#product-grid .product-card');
  const emptyState = document.getElementById('empty-state');

  let activeCategory = 'all';

  function applyProductFilters() {
    if (!productCards.length) return;
    const query = (searchInput?.value || '').trim().toLowerCase();
    let visibleCount = 0;

    productCards.forEach((card) => {
      const category = card.dataset.category || '';
      const name = (card.dataset.name || '').toLowerCase();
      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesQuery = !query || name.includes(query);

      const shouldShow = matchesCategory && matchesQuery;
      card.style.display = shouldShow ? '' : 'none';
      if (shouldShow) visibleCount++;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  }

  if (filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category || 'all';
        applyProductFilters();
      });
    });

    // Support direct hash links like products.html#lighting
    const hashCategory = window.location.hash.replace('#', '');
    if (hashCategory) {
      const matchingBtn = document.querySelector(`.filter-btn[data-category="${hashCategory}"]`);
      if (matchingBtn) matchingBtn.click();
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyProductFilters);
  }

  // 4. WhatsApp quick inquiry buttons (products.html)
  const WHATSAPP_NUMBER = '919876543210'; // Replace with your business number
  document.querySelectorAll('.inquire-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const product = btn.dataset.product || 'a product';
      const text = encodeURIComponent(`Hi, I am interested in the ${product}. Could you share more details?`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  });

  // 5. Contact form handling (contact.html)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all fields before sending.';
        formStatus.className = 'form-status error';
        return;
      }

      formStatus.textContent = `Thanks, ${name}! Your message has been received. We will reply shortly.`;
      formStatus.className = 'form-status success';
      contactForm.reset();
    });
  }
});
