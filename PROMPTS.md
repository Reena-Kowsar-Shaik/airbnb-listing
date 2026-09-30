# AI-Assisted Development: Sequence of Prompts & Workflow

This document records the exact prompt chain, subagent configurations, and design decisions used during the development of this pixel-perfect Airbnb listing clone.

---

## 1. Discovery & Design Analysis Prompt
```text
System / Subagent: Antigravity Code Agent
Task: Inspect https://airbnb-clone-umber-two.vercel.app and perform comprehensive reverse-engineering of the UI layout, color tokens, typography, assets, state transitions, and responsive behavior.
Focus Areas:
1. Extract title, host credentials, badge hierarchies (Laurel Wreath "Guest Favorite"), review breakdowns (Cleanliness, Accuracy, Check-in, Communication, Location, Value).
2. Measure 5-photo Hero Grid proportions, border radiuses, and hover interactions.
3. Deconstruct Screen 2 (Photo Tour modal) with category filters.
4. Deconstruct Screen 3 (Lightbox viewer) with keyboard arrow navigation, transitions, and counters.
5. Identify all sticky behaviors (Sticky Nav on scroll and Sticky Reservation Widget).
```

---

## 2. Foundation & Design System Setup Prompt
```text
Task: Initialize a clean React + TypeScript + Vite architecture with Tailwind CSS, Lucide icons, and Framer Motion.
Requirements:
1. Configure tailwind.config.js with Airbnb color palette (#FF385C, #E00B41, #222222, #717171, #DDDDDD).
2. Inject Plus Jakarta Sans & Circular font stack in index.html.
3. Configure custom reserve gradient utility and scrollbar styling in index.css.
```

---

## 3. Data Modeling & Domain Logic Prompt
```text
Task: Construct a strongly-typed domain model in src/data/listingData.ts containing:
1. Complete photo catalog with categories ('living', 'jacuzzi', 'bedroom', 'kitchen', 'bathroom', 'exterior') and captions.
2. Guest Favorite badge metrics (4.95 rating, 19 reviews, 95% 5-star distribution).
3. 50 categorized amenities with corresponding Lucide icons.
4. Host profile for "Mirashya Homes" with co-hosts and response metrics.
5. Realistic reviews with user avatars, dates, and sentiment tags.
```

---

## 4. Component Construction Prompts

### A. Navbar & Sticky Navigation
```text
Prompt: Create Navbar.tsx with Airbnb logo, search pill (Anywhere | Anytime | Add guests), host button, globe, and user menu dropdown. Build StickyNav.tsx that triggers on scroll with active tab highlighting (Photos, Amenities, Reviews, Location) and a quick reserve price summary.
```

### B. 5-Photo Hero Grid & Interactive Overlays
```text
Prompt: Build HeroGallery.tsx with the 5-photo grid and "Show all photos" floating trigger. Implement PhotoTourModal.tsx (Screen 2) with room category filters and LightboxModal.tsx (Screen 3) featuring Framer Motion slide transitions, keyboard controls (Left/Right/Esc), thumbnail tray, and counter.
```

### C. Sticky Reservation Widget & Interactive Date Range
```text
Prompt: Implement ReservationCard.tsx with dynamic pricing calculation, promo 10% discount toggle ("Claim"), guest counter popover (Adults, Children, Infants, Pets), and price breakdown. Build CalendarSection.tsx showing side-by-side October & November 2026 interactive calendar with fluid date selection and clear dates button.
```

### D. Modals & Polish
```text
Prompt: Build ShareModal.tsx with one-click link copying, DescriptionModal.tsx, AmenitiesModal.tsx with live search filter across all 50 items, and ReserveModal.tsx with booking review and confirmation states.
```

---

## 5. Production Architecture & Subagent Configs Prompt
```text
Task: Design a production-grade vacation-rental marketplace system architecture.
1. Generate an interactive SVG architecture diagram illustrating the Edge CDN, Kong API Gateway, Kubernetes microservices, Redis distributed locks, CockroachDB, OpenSearch, and Kafka.
2. Document system scalability, concurrency double-booking prevention, and disaster recovery in ARCHITECTURE.md.
3. Establish subagent skill and rule configurations in .agents/skills/ and .agents/rules/.
```
