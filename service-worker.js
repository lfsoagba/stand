self.addEventListener("install", event => {
  self.skipWaiting(); // força atualização imediata
});

self.addEventListener("activate", event => {
  clients.claim(); // força assumir controle das páginas abertas
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
