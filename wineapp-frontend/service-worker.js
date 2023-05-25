var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './script.js',
        './style.css',
        './buscar.css',
        './home.css',
        './assets/folhas.png',
        './assets/folhas2.png',
        './assets/ilustracao vinheiras.png',
        './assets/LogoWineYardsAPP.png',

        './assets/icones/android-chrome-192x192.png',
        './assets/icones/android-chrome-512x512.png',
        './assets/icones/apple-touch-icon.png',
        './assets/icones/favicon-16x16.png',
        './assets/icones/favicon-32x32.png',
        


      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});