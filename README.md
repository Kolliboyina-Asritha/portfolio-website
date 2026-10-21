# Kolliboyina Asritha — Personal Developer Portfolio

A modern, production-grade personal developer portfolio built for **Kolliboyina Asritha**, positioning her as a backend-focused full-stack developer with strong foundations in Java, JavaScript, Node.js, REST APIs, databases, and application security.

---

## 🚀 Live Local Preview & Commands

The project is scaffolded and ready to run.

```bash
# Navigate to the project directory
cd C:\Users\asrit\.gemini\antigravity\scratch\asritha-portfolio

# Install dependencies (already pre-installed)
npm install

# Start the Vite local development server
npm run dev

# Run linting check (0 warnings)
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

Local development runs at: **http://127.0.0.1:5173/**

---

## 🛠 Tech Stack

- **Framework**: React 18 / 19 with Vite
- **Styling**: Tailwind CSS with custom charcoal/slate dark theme (`#090D16`, `#0F172A`)
- **Icons**: Lucide React + custom SVG Brand Icons (GitHub, LinkedIn, LeetCode, GeeksforGeeks)
- **Asset Handling**: Embedded authentic PDF resume at `public/resume.pdf`
- **Linting & Quality**: Oxlint / ESLint compliant with 0 warnings

---

## 📂 Project Structure

```text
asritha-portfolio/
├── index.html                   # Semantic HTML5, SEO meta tags, OpenGraph
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Bundler configuration
├── tailwind.config.js           # Theme tokens, custom charcoal palette, gradients
├── postcss.config.js            # PostCSS configuration
├── public/
│   ├── favicon.svg              # Custom KA monogram vector favicon
│   └── resume.pdf               # Authentic bundled resume PDF
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Main application structure
    ├── index.css                # Tailwind directives & smooth scrolling
    ├── data/
    │   ├── portfolioData.js     # Single source of truth (personal info, experiences, skills, education)
    │   └── projectDetails.js    # In-depth architectural case studies for the 4 featured projects
    └── components/
        ├── Navbar.jsx           # Sticky blur navbar with resume CTA & mobile drawer
        ├── Hero.jsx             # Hero section with role highlights, quick CTAs, and system architecture preview
        ├── About.jsx            # Grounded first-person statement & 4 engineering pillars
        ├── Experience.jsx       # Internship timeline (DefenceMinia Technologies & Talent Trek)
        ├── Projects.jsx         # Filterable project cards with deep-dive modal trigger
        ├── ProjectModal.jsx     # Comprehensive multi-tab architecture & case study dialog
        ├── DsaSection.jsx       # Problem-solving section with verified LeetCode & GFG cards
        ├── Skills.jsx           # Clean categorized technical skills (prioritizing Java & Backend)
        ├── CoreStrengths.jsx    # 7 professional strengths & engineering mindset cards
        ├── Education.jsx        # B.Tech CSE (8.92 CGPA) & verified certifications
        ├── Contact.jsx          # Validated contact form, copy-email action, and mailto draft
        ├── Footer.jsx           # Copyright, profile links, and smooth scroll-to-top
        └── BrandIcons.jsx       # Vector SVG icons for GitHub, LinkedIn, LeetCode, GeeksforGeeks
```

---

## 🌟 Featured Projects

1. **ThreatLens AI**: Explainable URL threat intelligence platform combining 9-rule Heuristic Engine, Random Forest ML microservice (18 features), VirusTotal Threat Intelligence, Gemini 1.5 Flash triage explanations, and Chrome MV3 extension with user-controlled policies (`ASK_ME`, `BALANCED`, `STRICT`, `CUSTOM`).
2. **WorkPulse HRMS**: Full-stack HRMS with Role-Based Access Control for 5 roles (`SuperAdmin`, `HR`, `TeamLead`, `Employee`, `Intern`), 14+ business modules, Socket.IO real-time communications, automated attendance cron job (`absentcron`), Cloudinary asset pipeline, and Postman API testing.
3. **WheelWise**: Full-stack vehicle marketplace featuring dual buyer/seller workflows, dynamic inventory search filters, favorites, cart management, Razorpay payment gateway integration, and Cloudinary media processing.
4. **ShadowNotes**: Zero-knowledge encrypted note-taking application featuring client-side Web Crypto AES-GCM encryption, PBKDF2 key derivation, JWT auth with refresh token rotation and automatic reuse revocation detection, Helmet, rate limiting, and NoSQL sanitization.

---

## 🌐 Verified Professional Profiles

- **Email**: asrithaasritha99@gmail.com
- **LinkedIn**: [linkedin.com/in/asritha-kolliboyina-5762bb2b8](https://www.linkedin.com/in/asritha-kolliboyina-5762bb2b8)
- **GitHub**: [github.com/Kolliboyina-Asritha](https://github.com/Kolliboyina-Asritha)
- **LeetCode**: [leetcode.com/u/Asrithakolliboyina/](https://leetcode.com/u/Asrithakolliboyina/)
- **GeeksforGeeks**: [geeksforgeeks.org/profile/asrithaashl7e](https://www.geeksforgeeks.org/profile/asrithaashl7e)

---

## 🚢 Deployment Guide

### Deploying to Netlify (Recommended)
1. Push repository to GitHub: `git push -u origin main`
2. Connect repository on [Netlify](https://app.netlify.com/)
3. Build Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploying to Vercel
1. Import project in [Vercel Dashboard](https://vercel.com/)
2. Framework Preset: `Vite`
3. Root Directory: `./` (or `asritha-portfolio`)
4. Build Command: `npm run build`
5. Output Directory: `dist`
