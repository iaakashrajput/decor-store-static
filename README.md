# Artisan Decor Studio (Static HTML/CSS/JS Website)

A multi-page static website built with plain HTML, CSS, and vanilla JavaScript — zero frameworks or build steps required.

## Files Included
- `index.html` — Home page with hero, featured products, and brand highlights
- `products.html` — Filterable & searchable product catalog with WhatsApp inquiry buttons
- `about.html` — Brand story and studio stats
- `contact.html` — Contact details and interactive form
- `css/style.css` — Responsive stylesheet
- `js/script.js` — Mobile menu, product filtering, search, WhatsApp inquiry, and form validation
- `images/` — Lightweight SVG product and hero graphics (replace with your own JPG/WebP photos anytime)
- `manifest.json` — Basic PWA manifest
- `.htaccess` — Optional clean-URL rules for Hostinger/Apache

## Before You Deploy
1. Replace `` in the HTML files and `js/script.js` with your real WhatsApp number.
2. Swap the SVG files in `images/` with your actual product photos.

## Push to GitHub & Deploy on GitHub Pages
```bash
git init
git add .
git commit -m "Initial static website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Then on GitHub:
1. Open your repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then click **Save**.
4. Your site will be live in 1–2 minutes at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.
