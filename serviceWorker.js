const staticGame = "here-to-there-v1";
const assets = [
  "/",
  "index.html",
  "style.css",
  "script.js",
  "Buttons.pdf",
  "Cover.pdf",
  "LeftCard.pdf",
  "Pointer.pdf",
  "Radio.pdf",
  "RightCard.pdf",
  "Segment.pdf",
  "Spin.pdf"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGame).then(cache => {
      return cache.addAll(assets); // Return the promise
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
