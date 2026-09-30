# Airbnb Listing Clone — Pixel-Perfect Implementation

A production-grade, pixel-perfect clone of the Airbnb listing page for **Romantic Jacuzzi 1BHK Candolim | Mirashya UG10**, faithfully matching the reference design: [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app).

---

## 🌟 Key Features & Views

### 1. Main Listing Page
- **Navigation**: Airbnb brand logo, interactive search pill (`Anywhere | Anytime | Add guests`), user profile dropdown.
- **Hero Photo Gallery**: 5-photo responsive grid with hover zoom effects, subtle brightness adjustments, and "Show all photos" floating trigger.
- **Sticky In-Page Navigation Bar**: Triggers smoothly on scroll past hero gallery with active tab indicators (`Photos`, `Amenities`, `Reviews`, `Location`) and a quick-reserve CTA widget.
- **Guest Favorite Badge**: Laurel wreath insignia with verified 4.95 rating and 19 reviews.
- **Host & Highlights**: Host details for *Mirashya Homes*, Superhost badge, key property highlights (Outdoor entertainment, Designed for staying cool, Self check-in).
- **Where You'll Sleep**: Bedroom and Living Room visual cards with bed specifications.
- **What This Place Offers**: Amenities grid and "Show all 50 amenities" modal with instant search and category grouping.
- **Interactive Calendar**: Dual-month calendar (October – November 2026) with fluid range selection, nights calculation, and dynamic price sync.
- **Sticky Reservation Card**:
  - Promotional 10% discount banner with interactive **Claim** toggle.
  - Interactive guest selector popover (Adults, Children, Infants, Pets).
  - Itemized pricing breakdown updating dynamically with date selections.
  - Interactive booking confirmation modal with confetti delight.
- **Reviews Section**: 4.95 rating header, category ratings breakdown bars (Cleanliness, Accuracy, Check-in, Communication, Location, Value), filter pills (Comfort, Accuracy, Hot tub, Hospitality, etc.), and individual review cards with expandable text.
- **Location & Map**: Stylized interactive map container with Candolim Goa privacy circle and neighbourhood highlights.
- **Meet Your Host & Things to Know**: Full host profile card with co-hosts, house rules, safety policies, and cancellation guidelines.
- **More Stays Nearby**: Interactive carousel with pagination arrows (1/2).
- **Footer**: Full Airbnb footer with destination tabs, support links, currency and language selectors.

---

### 2. Screen 2: Photo Tour View
- Fullscreen modal opened from "Show all photos" or hero images.
- Room category navigation pills (`All photos`, `Living area`, `Private Jacuzzi & Patio`, `Bedroom`, `Kitchen & Dining`, `Bathroom`, `Exterior & Pool`).
- High-resolution photo gallery with room labels and captions.
- Header with back navigation, Share, and Save to Wishlist buttons.

---

### 3. Screen 3: Lightbox Viewer
- Focused single-photo viewer with clean black backdrop.
- Real-time photo counter (`X / Total`) and category caption.
- **Full Keyboard Navigation**:
  - `←` (Left Arrow): Previous photo
  - `→` (Right Arrow): Next photo
  - `Escape`: Close lightbox
- Smooth slide & fade transitions powered by Framer Motion.
- Quick thumbnail navigation bar at the bottom.

---

## 🏗️ Production Architecture & System Design

A comprehensive system design for a high-scale vacation-rental marketplace is included in the project:
- **Architecture Diagram**: [architecture/architecture-diagram.svg](file:///d:/project/architecture/architecture-diagram.svg)
- **Detailed System Design Document**: [architecture/ARCHITECTURE.md](file:///d:/project/architecture/ARCHITECTURE.md)
  - Edge CDN & Cloudflare WAF
  - Kong / Envoy API Gateway & GraphQL Federation
  - Double-booking prevention with Redis Redlock distributed locks & ACID transactions
  - Uber H3 Hexagonal Geo-Spatial Indexing with OpenSearch
  - Event streaming via Apache Kafka & Debezium CDC
  - Kubernetes (EKS) deployment & GitOps with ArgoCD

---

## 🤖 AI Sub-Agent & Skill Configs
- **Skill Configuration**: [.agents/skills/airbnb-quality/SKILL.md](file:///d:/project/.agents/skills/airbnb-quality/SKILL.md)
- **Coding Rules**: [.agents/rules/coding-standards.md](file:///d:/project/.agents/rules/coding-standards.md)
- **Prompt Sequence**: [PROMPTS.md](file:///d:/project/PROMPTS.md)

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+
- npm 9+

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
