// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        // Add more URLs here
      ]);
    })
  );
});

// Fetch the network request
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).then((response) => {
      // Redirect to HTTPS if the request is using HTTP
      if (response.url.startsWith('http://')) {
        return Response.redirect(response.url.replace('http://', 'https://'), 301);
      } else {
        return response;
      }
    })
  );
});