var cacheName = 'hello-pwa';
var filesToCache = [
 '/',
 '/index.html',
 '/pages/choix2.html',
 '/pages/classement.html',
 '/pages/concept.html',
 '/pages/equipe.html',
 '/pages/lieu.html',
 '/pages/loc.html',
 '/pages/choix.html',
 '/pages/mauvaise-rep.html',
 '/pages/bonne-rep.html',
 '/pages/question.html',
 '/pages/svg.html',
 '/pages/map.html',
 '/css/style.css',
 '/css/style2.css',
 '/css/style-rep.css',
 '/css/style-class.css',
 '/css/css_map.css',
 '/css/font-awesome.css',
 '/css/jquery.countdown.css',
 '/css/popup-box.css',
 '/js/main.js'
];
/* Démarrer le service worker et mettre en cache tout le contenu de l'application
*/
self.addEventListener('install', function(e) {
 e.waitUntil(
 caches.open(cacheName).then(function(cache) {
 return cache.addAll(filesToCache);
 })
 );
});
/* Servir le contenu mis en cache si hors ligne */
self.addEventListener('fetch', function(e) {
 e.respondWith(
 caches.match(e.request).then(function(response) {
6 / 11
 return response || fetch(e.request);
 })
 );
});
