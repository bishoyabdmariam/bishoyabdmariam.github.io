'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"logo.png": "4090b06217fba4f071d5c228ce3720eb",
"assets/assets/thassos%2520marble.png": "e7fc972217667d0742e65953bcb22e66",
"assets/assets/Emperador%2520marble.png": "9386dcd9cde8fe48872b374c674ac8c7",
"assets/assets/logo.png": "4090b06217fba4f071d5c228ce3720eb",
"assets/assets/callcate%2520marble.png": "c18b3ced762adcffc895359ea8c8e3b2",
"assets/assets/Giza92.jpg": "6c28012d275d5259ae1e424adccfeeef",
"assets/assets/Crema%2520Marfil%2520marble.png": "213f6bd9c8a7b64ca8eab37307c24710",
"assets/assets/Nero%2520Marquina%2520marble.png": "eb092a5d7890ded9645d46273c5cf201",
"assets/assets/Statuario%2520marble.png": "3a1c7224e2926374c94d99fe2c4e620b",
"assets/assets/home_marble.png": "86d9aeee4daa3261d25b6eb3ca9b83ef",
"assets/assets/home_pima.png": "6bada24302a40489641ef9c25a81d9c4",
"assets/assets/Giza90.jpg": "581ecfc7920815f149c81270260eb225",
"assets/assets/Giza96.jpg": "5f2a62e974db48de32d766b1db3a624e",
"assets/assets/Travertine%2520marble.png": "eaa1951b554dd0a278185d6d8127313e",
"assets/assets/sydalex_icon.png": "59592cb229b3077f0ae06f92a2bdf6d2",
"assets/assets/Giza94.jpg": "7dd50fe730967883b44e2f0c78da7091",
"assets/assets/home_carrara.png": "92e85b20218baf4b06b391490a0eea8e",
"assets/assets/carrara%2520marble.png": "47190df0377a5be5ab2bff5c328ca974",
"assets/assets/Botticino%2520marble.png": "3e50dc1cb9bb54fec5505e95b613d5e6",
"assets/assets/home_calcite.png": "71e1208e34f1cf294d947d32a52d7ba7",
"assets/assets/welcome%2520photo.png": "b65252a73e222165db3bad847baca7cd",
"assets/assets/home_cotton.png": "8a2e91585f09426daae8fd646ef5e14b",
"assets/assets/Giza95.jpg": "22a08d325d11be3bf1b7dbbaf997794d",
"assets/assets/Giza86.jpg": "1d5f6b5d3f26a5ea55182497422fc7a5",
"assets/AssetManifest.bin": "bc6dfeb16e0747eceb6476bac6aee24d",
"assets/NOTICES": "30b85c4d8c87a0d5f5288f9a355f9c58",
"assets/AssetManifest.json": "58b7b8534c188b3c03b45a1d42484f84",
"assets/fonts/MaterialIcons-Regular.otf": "94b73e0aae030a8383a2b0ab2628e670",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "3d78a7f2a710b559f6453b2f71d5a1c0",
"version.json": "3b54d49e4aff5936fab7fb92ed1408ce",
"manifest.json": "2603f986b64e73db6d3fbd76cb6e63ae",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"splash/img/dark-4x.png": "787ae25cc6695618dc5be1ebcc1c07ca",
"splash/img/dark-2x.png": "5baae947b8010edcff1aae9a4501a9bd",
"splash/img/light-2x.png": "5baae947b8010edcff1aae9a4501a9bd",
"splash/img/dark-3x.png": "9b62c623f343c6f18a0055ca40a98a3b",
"splash/img/dark-1x.png": "7d4e91f80f18d705f680b757dc8afb30",
"splash/img/light-3x.png": "9b62c623f343c6f18a0055ca40a98a3b",
"splash/img/light-1x.png": "7d4e91f80f18d705f680b757dc8afb30",
"splash/img/light-4x.png": "787ae25cc6695618dc5be1ebcc1c07ca",
"index.html": "fb5d91f2f3d79a897cbec27cd33ffcdc",
"/": "fb5d91f2f3d79a897cbec27cd33ffcdc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "38ed8c8a202ef86ab7db86597c610769",
"main.dart.js": "baef3bd0f93c6c9d58c117ccdf45098d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
