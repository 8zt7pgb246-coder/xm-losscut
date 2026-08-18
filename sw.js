/* xm-losscut v47: no application caching. Network-first and never stores HTML/JS. */
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('/') || /\.(html?|js|json)$/.test(url.pathname)) {
    event.respondWith(fetch(event.request, {cache:'no-store'}));
  }
});
