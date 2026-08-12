const CACHE='xm-losscut-v2';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.origin===location.origin){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))}
});
