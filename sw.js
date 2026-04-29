const CACHE_NAME = 'diario-amico-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/diario-amico/',
        '/diario-amico/index.html',
        '/diario-amico/manifest.json',
        '/diario-amico/icon-192.png',
        '/diario-amico/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
