self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('barakat-pos-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json'
      ]).catch(() => {
        // Fallback to ensure core offline shell installs even if optional assets fail
        return cache.add('./index.html');
      });
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
