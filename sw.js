const CACHE_NAME = 'modern-mantras-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/pages/hero_landing_zone.html',
  '/css/main.css',
  '/css/theme-system.css',
  '/js/ui.js',
  '/js/theme-system.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // navigation requests -> network first, fallback to cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(res => {
        // put a copy in cache
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, copy));
        return res;
      }).catch(() => caches.match('/pages/offline.html'))
    );
    return;
  }

  // for other requests use cache-first
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
      // cache fetched assets
      if (event.request.url.startsWith(self.location.origin)){
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, copy));
      }
      return resp;
    }).catch(() => {}))
  );
});
