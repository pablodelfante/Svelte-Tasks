const staticCache = 'v1';
const dynamicCache = 'dynamic-cache';
// assets to cache
const assets = [
    '/',
    '/index.html',
    '/fallback.html'
];

// ==================================
const limitCacheSize = (name, size) => {
    // console.log('limit cache size')
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            // console.log(keys)
            if (keys.length > size) {
                // console.log('delete')
                cache.delete(keys[0]).then(limitCacheSize(name, size));

            }
        })
    })
}
const limitNumCache = (cacheName, num) => {
    caches.open(cacheName).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > num) {
                cache.delete(keys[0]).then(limitNumCache(cacheName, num));

            }
        })
    })
}

// limit cache cross size
const limitCacheSizeV2 = (name, limitSize) => {
    caches.open(name).then((cache) => {
        cache.keys().then((keys) => {

            // limit cache size
            if ('storage' in navigator && 'estimate' in navigator.storage) {
                navigator.storage.estimate().then((estimate) => {
                    const currentSize = estimate.usage / 1000000;
                    if (currentSize > limitSize) {
                        cache.delete(keys[0]).then(() => limitCacheSizeV2(name, limitSize));
                    }
                })
            }
            //================

        })
    })
}
// ===============================

//install process
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(staticCache)
            .then(cache => {
                cache.addAll(assets)
            })
    )
})

//activate 
self.addEventListener('activate', e => {
    limitCacheSizeV2('dynamic-cache', '300');
})


// fetching data (esto estaba funcionando bien)
/* self.addEventListener('fetch', e => {
    if (e.request.url.indexOf('firestore.googleapis.com') === -1) {
        e.respondWith(
            caches.match(e.request).then(staticRes => {
                return staticRes || fetch(e.request).then(dynamicRes => {
                    return caches.open(dynamicCache).then(cache => {
                        cache.put(e.request.url, dynamicRes.clone())
                        limitCacheSize(dynamicCache, 20)
                        return dynamicRes
                    })
                })
            }).catch(() => caches.match('/fallback.html'))
        )
    }

}) */

let generalEvents = []

// Si hay una versión en caché disponible, se usa, pero obtenga una actualización para la próxima vez.
self.addEventListener('fetch', function (event) {

    generalEvents = [...generalEvents, event];
    event.respondWith(
        caches.open(dynamicCache).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request);

                /*  var fetchPromise = fetch(event.request).then(function (networkResponse) {
                     cache.put(event.request, networkResponse.clone());
                     return networkResponse;
                 }).catch(() => console.log('err to fetch new data'));
                 return response || fetchPromise; */
            }).catch(() => caches.match('/fallback.html'))
        })
    );

});



/* Ideal para: actualizaciones no urgentes, especialmente
aquellas que ocurren con tanta regularidad que un mensaje
push por actualización sería demasiado frecuente para los
usuarios, como líneas de tiempo sociales o artículos de noticias. */

self.addEventListener('sync', function (event) {
    //console.log(generalEvents)
    if (event.tag == 'getDataSync') {
        event.waitUntil(


            caches.open(dynamicCache).then(function (cache) {

                generalEvents.forEach((elem, i) => {

                    if ((elem.request.url.indexOf('firestore.googleapis.com') === -1) && (elem.request.method != 'POST')) {
                        fetch(elem.request).then(function (networkResponse) {
                            cache.put(elem.request, networkResponse.clone());
                        }).catch(() => console.log('>>err to fetch data'));
                    }
                })
                console.log('>>>sync on back')
                generalEvents = [];
            })


        );
    }
});