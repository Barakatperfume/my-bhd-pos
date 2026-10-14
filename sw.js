self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('barakat-pos-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './PCBH_LOGO-BG.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});