# SAFE prototype

This is a front-end prototype reconstructed from the requirements preserved in the supplied ChatGPT HTML conversation.

Included:
- Dark green, mobile-first interface
- Taxi booking flow
- Wallet and payment activity
- Daily, weekly, monthly and yearly subscription choices
- Separate configurable Save Me safety subscription
- Save Me hold-to-activate and test-mode experience
- Admin subscription pricing
- Complimentary/free subscription grants for loyalty and promotions
- In-app advertising manager
- Safety operations view
- Responsive PWA shell

Important:
The supplied saved HTML exposes only the final visible turns of the earlier conversation. It does not contain the previous Work-generated source code, so this project is a clean rebuild from the preserved requirements, not a recovery of the old implementation.

This prototype does NOT process real payments, dispatch taxis, send push notifications, or share live GPS data. Those require a production backend and third-party services.

Safety design:
The original requirement described notifying all nearby users with the user's exact location. This prototype uses a safer architecture: alerts should go to opted-in/verified responders and trusted contacts, with exact location disclosed only according to consent, responder role, and emergency policy. A production service should also include audit logs, abuse controls, identity checks, retention limits, escalation procedures, and local legal review.

Suggested production stack:
- Mobile: Flutter or React Native
- API: Node/NestJS or Django/FastAPI
- Database: PostgreSQL + PostGIS
- Realtime: WebSockets / managed pub-sub
- Push: Firebase Cloud Messaging + APNs
- Maps: Google Maps, Mapbox, or another supported provider
- Payments: locally appropriate licensed payment providers
- Admin: role-based web console
- Security: MFA for admins, encryption, audit logging, rate limits, device/session controls

Run:
Open index.html in a browser. For full PWA/service-worker behaviour, serve the folder through a local HTTP server.
