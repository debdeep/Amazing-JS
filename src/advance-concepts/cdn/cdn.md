# Content Delivery Network
A CDN (Content Delivery Network) is basically a globally distributed network of servers that delivers static assets (like JavaScript libraries, CSS files, images, fonts) quickly to users based on their geographic location. Instead of every request going back to the origin server, a CDN caches copies of those files at multiple edge servers around the world.

## Why use a CDN?
- Scalability: Handles high traffic without overwhelming a single server.
- Convenience: You don’t need to host popular libraries yourself — just link them.

## How it Works
- Edge servers cache static assets close to the user’s location.
- DNS resolution directs requests to the nearest edge node.
- Cache invalidation ensures updates propagate globally.

## Benefits Beyond Speed
- Reduced latency → Faster page loads, better Core Web Vitals.
- Lower bandwidth costs → Origin server handles fewer requests.
- Security features → Many CDNs offer DDoS protection, SSL/TLS, and bot filtering.
- Reliability → If one node fails, traffic reroutes to the next closest.

## In applications
- Front-end libraries: Vue, React, Angular, Bootstrap, Tailwind, jQuery — all can be loaded via CDN.

- Assets: Images, videos, fonts (like Google Fonts).

- Fallbacks: If your server is slow, CDN ensures faster delivery.