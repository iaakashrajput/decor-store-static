const CACHE_NAME = 'decor-store-v1';
const ASSETS = [
  './',
  './index.html',
  './products.html',
  './about.html',
  './contact.html',
  './css/style.css',
  './js/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});