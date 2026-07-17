# RakhiStore 🪢

> A premium e-commerce experience for curated Rakhi collections — built with HTML, Tailwind CSS, Vanilla JS, and Firebase Authentication.

## Live Features

- **Firebase Google Sign-In** & **Email/Password Authentication** with password strength meter
- **Dynamic Shopping Cart** with real-time quantity, subtotal and free-shipping progress
- **Multi-step Checkout** with promo codes (`FESTIVE20`), address form validation, and payment simulation
- **Order Tracking** — dynamically loads order history from `localStorage`
- **User Dashboard** — protected by Firebase Auth, shows order history and account details
- **Compliance Pages** — About Us, Contact Us, Privacy Policy, Terms & Conditions, Refund Policy

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) + Vanilla CSS |
| Logic | Vanilla JavaScript (ES6+) |
| Auth | Firebase v9 (compat) — Google OAuth + Email/Password |
| State | `localStorage` (cart, orders) |
| Fonts | Google Fonts (Playfair Display, Inter, Poppins) |

## Legal Entity

**RakhiAura Festive Traditions Private Limited**  
124, Gold Thread Complex, Sector 62, Noida, Uttar Pradesh, 201301, India  
📞 +91 98765 43210 | ✉️ care@rakhistore.com

## Setup & Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Firebase Setup

Firebase is pre-configured in `firebase-auth.js`. Authentication methods enabled in Firebase Console:
- ✅ Google
- ✅ Email/Password

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Browse Collections | `browse-collection.html` |
| Product Details | `product-details.html` |
| Shopping Cart | `shopping-cart.html` |
| Checkout | `checkout-success.html` |
| Order Tracking | `track-order.html` |
| Sign In / Register | `login-signup.html` |
| User Dashboard | `user-dashboard.html` |
| About Us | `about-us.html` |
| Contact Us | `contact-us.html` |
| Privacy Policy | `privacy-policy.html` |
| Terms & Conditions | `terms-conditions.html` |
| Refund Policy | `refund-policy.html` |

---

© 2024 RakhiAura Festive Traditions Private Limited. All rights reserved.
