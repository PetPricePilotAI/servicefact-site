self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
// Intentionally no API/HTML caching until logout, revocation and device-storage risks are specified.
