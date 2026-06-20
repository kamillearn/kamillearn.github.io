<div align="center">

# Kamil Karim — Personal Portfolio

**[kamilkarim.com](https://kamilkarim.com)** · [kamillearn.github.io](https://kamillearn.github.io)

A clean, dark-themed personal portfolio showcasing my experience in IT Security, Business Intelligence, and Data Analytics. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

[![Live Site](https://img.shields.io/badge/Live%20Site-kamilkarim.com-64ffda?style=flat-square&labelColor=0e172a)](https://kamilkarim.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-kamil--karim-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kamil-karim/)

</div>

---

## ✨ Features

- **Animated page loader** — branded KK pulse animation on first paint
- **Custom glowing cursor** — dot + follower ring that responds to interactive elements (desktop)
- **Staggered hero entrance** — each heading line fades up independently on load
- **Scroll-reveal animations** — sections, headings, and cards animate in as you scroll
- **Scroll progress bar** — thin cyan line at the top of the viewport
- **Sticky navbar** — always-visible fixed header with active section highlighting
- **Mobile slide-in drawer** — full-screen side menu with animated hamburger → × toggle
- **Experience cards** — left border glow + lift effect on hover
- **Project cards** — alternating 12-column grid layout with image zoom and desaturate transitions
- **Tech tags** — bordered pill badges with glow on hover
- **Side social links** — fixed left/right decorative sidebars (desktop only)
- **Fully responsive** — single-column mobile layout, custom cursor disabled on touch devices
- **Reduced-motion support** — all animations respect `prefers-reduced-motion`

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 + [Tailwind CSS](https://tailwindcss.com/) (CDN) |
| Icons | [Feather Icons](https://feathericons.com/) |
| Components | Vanilla Web Components (Custom Elements + Shadow DOM) |
| Scripting | Vanilla JavaScript (ES6+, Intersection Observer API) |
| Hosting | GitHub Pages + custom domain |

No build tools, no npm, no bundler — open the file and it runs.

---

## 📁 Project Structure

```
kamillearn.github.io/
│
├── index.html              # Single-page app — all five sections live here
├── style.css               # Global styles, animations, responsive breakpoints
├── script.js               # Cursor, scroll reveal, navbar behavior, active section
│
├── components/
│   ├── navbar.js           # <custom-navbar> Web Component (Shadow DOM)
│   └── footer.js           # <custom-footer> Web Component (Shadow DOM)
│
├── images/                 # Project screenshots and section images
├── videos/                 # (reserved)
│
├── favicon.png
├── profile.jpeg            # Profile photo used in About section
└── CNAME                   # Custom domain mapping → kamilkarim.com
```

---

## 🚀 Getting Started

No installation or build step required. Clone and open.

```bash
# 1. Clone the repository
git clone https://github.com/kamillearn/kamillearn.github.io.git

# 2. Open in your browser
open kamillearn.github.io/index.html
```

Or serve it locally with any static file server:

```bash
# Using Python (built-in)
cd kamillearn.github.io
python3 -m http.server 8080
# → http://localhost:8080

# Using Node.js (npx)
npx serve .
# → http://localhost:3000
```

> **Note:** Opening `index.html` directly via `file://` works fine. A local server is only needed if you run into CORS issues with the Web Components.

---

## 🧩 Sections

| # | ID | Description |
|---|---|---|
| 00 | `#introduction` | Hero — name, tagline, CTA |
| 01 | `#about` | Biography and profile photo |
| 02 | `#experience` | Work history with tech tags |
| 03 | `#projects` | Featured data & security projects |
| 04 | `#contact` | Email call-to-action |

---

## 📬 Contact

| | |
|---|---|
| 🌐 Portfolio | [kamilkarim.com](https://kamilkarim.com) |
| 💼 LinkedIn | [linkedin.com/in/kamil-karim](https://www.linkedin.com/in/kamil-karim/) |
| 🐙 GitHub | [github.com/kamillearn](https://github.com/kamillearn) |
| ✉️ Email | [abdulkamilkarim@gmail.com](mailto:abdulkamilkarim@gmail.com) |

---

<div align="center">

© 2025 Kamil Karim · All rights reserved

</div>
