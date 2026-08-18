const CACHE_NAME='xm-losscut-v49';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE_NAME?null:caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.origin!==location.origin || e.request.method!=='GET') return;
  // Never serve app HTML/JS from an old cache. This prevents stale iPhone builds.
  if(u.pathname.endsWith('/')||u.pathname.endsWith('/index.html')||/\.(js|html)$/.test(u.pathname)){
    e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)));
    return;
  }
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
