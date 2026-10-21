export const projects = [
  {
    id: "threatlens",
    title: "ThreatLens AI",
    badge: "Cybersecurity & ML",
    badgeColor: "emerald",
    category: "Security & AI",
    tagline: "Explainable URL Threat Intelligence & Real-Time Browser Protection Platform",
    githubUrl: "https://github.com/Kolliboyina-Asritha/ThreatLens",
    liveUrl: "https://threatlens123.netlify.app", // Open source repository with local FastAPI/Node services
    verifiedLive: false,
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "Random Forest",
      "VirusTotal API",
      "Chrome Manifest V3",
      "Gemini 1.5 Flash"
    ],
    summary:
      "A multi-engine cybersecurity platform that detects malicious URLs via lexical heuristics, an 18-feature Random Forest ML microservice, and VirusTotal threat intelligence, generating explainable 0–100 risk scores and real-time Chrome extension browser enforcement.",
    problem:
      "Modern phishing campaigns, brand typosquatting, and zero-day malicious links continuously bypass traditional static blocklists. Non-technical users are frequently presented with opaque security warnings ('Threat detected!') without clear context or actionable reasoning, leading to warning fatigue, accidental bypasses, or reliance on sluggish cloud scanners.",
    solution:
      "ThreatLens AI bridges automated detection and human understanding. It processes candidate URLs through a multi-tiered inspection pipeline: instant structural heuristics, a local Scikit-Learn Random Forest model via FastAPI, and VirusTotal threat intelligence. These scores are fused using mathematically normalized weights into an explainable 0–100 risk score, complemented by a Gemini-powered briefing in plain English, and enforced in real time via a Chrome MV3 extension with user-controlled policies.",
    architectureSteps: [
      { step: "1. Navigation Intercept", desc: "Chrome MV3 extension intercepts URL via webNavigation service worker or React dashboard submits target." },
      { step: "2. SSRF-Safe Normalization", desc: "Node/Express gateway validates URL RFC 3986 format and prevents SSRF targeting internal subnets." },
      { step: "3. 18-Feature Vectorization", desc: "Extracts structural, lexical, and statistical metrics (entropy, IP host, subdomain depth, keyword anomalies)." },
      { step: "4. Multi-Engine Parallel Analysis", desc: "Runs 9 Heuristic Rules (points sum), FastAPI Random Forest classifier (P(malicious)), and VirusTotal engine queries with 24h MongoDB cache." },
      { step: "5. Weighted Risk Fusion", desc: "Calculates composite score S_fused = clamp(w1*S_heur + w2*S_ml + w3*S_ti, 0, 100) with dynamic weight renormalization." },
      { step: "6. Gemini LLM Explanation", desc: "Generates structured dual-tier insights: Technical forensic detail + In Simple Words + Why It Matters." },
      { step: "7. User Policy Enforcement", desc: "Enforces deterministic precedence: Blocklist > Allowlist > User Session Override > Active Policy (ASK_ME, BALANCED, STRICT, CUSTOM)." }
    ],
    keyFeatures: [
      {
        title: "Multi-Engine Risk Fusion",
        desc: "Combines 9 deterministic heuristic rules (w=0.35), Scikit-Learn Random Forest classifier (w=0.40), and VirusTotal threat intelligence (w=0.25). Dynamically renormalizes weights when any engine is offline."
      },
      {
        title: "Deterministic Precedence & User Control",
        desc: "Strict enforcement hierarchy guarantees predictable behavior: Blocklist Match > Allowlist Match > Session Override > Policy Mode (ASK_ME, BALANCED, STRICT, CUSTOM)."
      },
      {
        title: "Dual-Tier Explanations",
        desc: "Every indicator provides technical forensics (exact protocol breach), simple wording for non-technical users, and actionable risk impact (credential harvesting, session hijacking)."
      },
      {
        title: "Chrome Manifest V3 Extension",
        desc: "Real-time browser navigation interception, interactive warning/blocked interstitial landing pages, popup health monitor, and zero-stored secrets."
      },
      {
        title: "Intelligent Caching Layer",
        desc: "MongoDB threat intelligence cache with 24-hour TTL, mitigating API rate limits and accelerating repeat domain lookups."
      }
    ],
    technicalImplementation: [
      "Schema Contract (threatlens_features_v1.0): 18 lexical and structural features extracted synchronously in Node.js before forwarding to Python FastAPI.",
      "Classifier Details: Scikit-Learn RandomForestClassifier (100 estimators, max depth 15, balanced class weights) trained on a curated benchmark of 364 real-world URLs (Tranco Top Domains + PhishTank/URLhaus holdout).",
      "Dynamic Renormalization Formula: When an engine k is disabled, active engine weights scale as w_i' = w_i / sum(w_active), ensuring sum(w_i') = 1.0 at all times.",
      "LLM Strict Guardrail: Gemini LLM only explains evidence; it is architecturally prohibited from computing or altering the numerical risk score."
    ],
    securityMeasures: [
      "In-memory JWT access tokens with secure HttpOnly refresh token rotation.",
      "Input sanitization and SSRF prevention guards on URL parsing.",
      "Chrome Manifest V3 compliance with zero client-stored API secrets.",
      "Centralized error handling and defensive rate limiting across scan endpoints."
    ],
    engineeringDecisions: [
      "Separated the Python ML service into a standalone FastAPI microservice to keep the Node.js API gateway lightweight and non-blocking.",
      "Implemented local deterministic heuristic rules first to guarantee rapid sub-50ms initial scoring even during external API downtime.",
      "Used MongoDB TTL indexes for VirusTotal response caching to optimize external quota usage."
    ],
    futureWork: [
      "Planned: Integration of live WHOIS domain age lookups and SSL certificate fingerprint validation.",
      "Planned: Automated client-side URL reputation lookup via local WebAssembly bloom filters.",
      "Planned: Support for automated enterprise security event reporting and webhook webhooks."
    ]
  },
  {
    id: "workpulse",
    title: "WorkPulse HRMS",
    badge: "Enterprise Systems",
    badgeColor: "indigo",
    category: "Full-Stack & Systems",
    tagline: "Full-Stack Human Resource Management System with 5-Role RBAC & 14+ Modules",
    githubUrl: "https://github.com/Kolliboyina-Asritha/Work",
    backendGithubUrl: "https://github.com/Kolliboyina-Asritha/Work2",
    liveUrl: "https://workpulsehrms.netlify.app",
    verifiedLive: true,
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT & Cookies",
      "Socket.IO",
      "Cloudinary",
      "Node-Cron",
      "Postman"
    ],
    summary:
      "A production-grade HRMS engineered with granular Role-Based Access Control across 5 distinct roles and 14+ business modules, featuring automated attendance cron jobs, real-time messaging, and Cloudinary asset management.",
    problem:
      "Managing organizational hierarchies, daily employee attendance, departmental announcements, and multi-tier leave approvals in growing organizations frequently suffers from fragmented tools, unauthorized data exposure, and inconsistent permission handling.",
    solution:
      "WorkPulse centralizes employee management within a unified platform governed by strict Role-Based Access Control. Using a robust Node/Express backend paired with React, it segments operations into 14+ role-tailored modules, automates daily attendance tracking via scheduled cron routines, and provides real-time team communication.",
    architectureSteps: [
      { step: "1. Authentication & Role Issuance", desc: "User logs in; backend signs JWT access token with user roles array and sets HttpOnly refresh cookie." },
      { step: "2. RBAC Verification Middleware", desc: "verifyRoles middleware intercepts requests, validating bearer token against route authorization masks (5120, 1984, 2001, 3001, 4001)." },
      { step: "3. Enterprise Business Modules", desc: "Routes route to specialized controllers: Employee Management, Announcements, Attendance, Leave, Projects, Milestones, and Tasks." },
      { step: "4. Automated Attendance Cron", desc: "Scheduled cron job ('absentcron') runs at midnight to automatically flag unrecorded employee days as absent." },
      { step: "5. Real-Time Event Pipeline", desc: "Socket.IO server handles instant direct messaging, team channels, and broadcast announcements." },
      { step: "6. Media Storage Pipeline", desc: "Profile avatars and company documents upload directly to Cloudinary with secure remote URLs saved to MongoDB." }
    ],
    keyFeatures: [
      {
        title: "5 Distinct RBAC Organizational Roles",
        desc: "SuperAdmin (5120), HR (1984), Team Lead (2001), Employee (3001), and Intern (4001) with granular endpoint isolation."
      },
      {
        title: "14+ Specialized Business Modules",
        desc: "Auth, Employee Management, Announcements, Dashboards, Chats, Projects, Milestones, Tasks, Attendance, Attendance Dashboards, Leave, Leave Dashboard, Performance, and Profile."
      },
      {
        title: "Automated Attendance Workflows",
        desc: "Daily clock-in/clock-out tracking paired with a background node-cron routine (`absentcron`) that updates absentee states automatically."
      },
      {
        title: "Real-Time Socket.IO Messaging",
        desc: "Instant peer-to-peer and team communication channels with live online indicators and typing status."
      },
      {
        title: "Targeted Announcements",
        desc: "Company notices with priority levels, pin-to-top flags, expiration dates, and role-specific visibility filtering."
      }
    ],
    technicalImplementation: [
      "Role-Based Middleware Architecture: Implemented modular verifyJWT and verifyRoles([ROLES_LIST.HR, ROLES_LIST.SuperAdmin]) protecting sensitive CRUD operations.",
      "Leave Balance State Machine: Tracks casual leave (CL), privilege leave (PL), and sick leave (SL) with multi-level approval hierarchies (Team Lead -> HR).",
      "API Testing Suite: Authored exhaustive Bruno and Postman API collections testing authentication flows, token refreshes, pagination, and role permission boundaries.",
      "Database Modeling: Mongoose schemas with indexed employee IDs, relational object references, and soft-delete states for deactivated personnel."
    ],
    securityMeasures: [
      "Bcrypt password hashing with salt rounds.",
      "Secure HttpOnly cookies with SameSite configuration for refresh tokens.",
      "Protected routes with bearer token verification.",
      "Strict parameter whitelisting and employee deactivation controls preventing data leaks."
    ],
    engineeringDecisions: [
      "Decoupled frontend (Netlify) and backend (Render) deployments with explicit CORS origin whitelisting.",
      "Designed role codes as numeric identifiers (5120, 1984, etc.) to keep token payloads compact and avoid plain-text role tampering.",
      "Utilized background cron workers for state maintenance rather than recalculating absence stats on user requests."
    ],
    futureWork: [
      "Planned: Integration of biometric attendance webhook ingestion.",
      "Planned: Comprehensive PDF salary slip generation pipeline.",
      "Planned: Real-time departmental analytics with interactive data export."
    ]
  },
  {
    id: "wheelwise",
    title: "WheelWise",
    badge: "E-Commerce & FinTech",
    badgeColor: "violet",
    category: "Marketplace",
    tagline: "Full-Stack Vehicle Marketplace with Role-Based Buyer/Seller Dashboards & Razorpay Integration",
    githubUrl: "https://github.com/Kolliboyina-Asritha/Wheelwise",
    liveUrl: "https://buyurdreamvehicle.netlify.app/", // Deployed during internship demonstrations
    verifiedLive: false,
    featured: true,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Razorpay API",
      "Cloudinary",
      "REST APIs"
    ],
    summary:
      "A complete vehicle marketplace connecting automotive buyers and sellers, featuring dedicated role dashboards, dynamic search filtering, favorites, cart management, Razorpay payment flows, and Cloudinary media processing.",
    problem:
      "Traditional online vehicle listings often suffer from unverified seller listings, opaque pricing, disconnected payment options, and fragmented communication between vehicle buyers and dealers.",
    solution:
      "WheelWise provides a structured platform with dual-perspective buyer and seller workflows. Buyers browse high-resolution vehicle listings, manage favorites and carts, and initiate checkout via Razorpay. Sellers manage inventory, update vehicle specifications, upload multi-angle photos via Cloudinary, and monitor order progression.",
    architectureSteps: [
      { step: "1. Buyer Discovery & Filtering", desc: "User queries vehicle catalog with multi-facet filters: price range, fuel type, transmission, and model year." },
      { step: "2. Vehicle Detail & Media Delivery", desc: "Product details fetch optimized image assets directly from Cloudinary CDN." },
      { step: "3. Cart & Wishlist Synchronization", desc: "Protected endpoints store and sync buyer favorites and cart items in MongoDB." },
      { step: "4. Razorpay Order Initiation", desc: "Backend generates unique Razorpay Order ID with currency, receipt metadata, and amount in smallest currency unit." },
      { step: "5. Client Checkout & Signature Handshake", desc: "Frontend invokes Razorpay SDK checkout; upon payment completion, signature payload is returned to server." },
      { step: "6. Order Lifecycle & Status Tracking", desc: "Order record is persisted with verified transaction metadata and tracking updates." }
    ],
    keyFeatures: [
      {
        title: "Dual Buyer & Seller Dashboards",
        desc: "Role-tailored navigation: Sellers track active listings and incoming inquiries; buyers manage favorites, carts, and order history."
      },
      {
        title: "Dynamic Vehicle Catalog Search",
        desc: "Indexed MongoDB queries supporting dynamic filtering by make, model, price thresholds, mileage, and vehicle condition."
      },
      {
        title: "Integrated Razorpay Payment Pipeline",
        desc: "Server-side order generation and status tracking handling complete checkout workflows."
      },
      {
        title: "Cloudinary Image Optimization",
        desc: "Automated vehicle image resizing, format conversion (WebP), and high-availability cloud delivery."
      },
      {
        title: "Customer Reviews & Ratings",
        desc: "Verified purchase reviews enabling authentic buyer feedback and dealer trust scoring."
      }
    ],
    technicalImplementation: [
      "Controller-Service Architecture: Clean separation between vehicle inventory controllers, cart management, and payment validation services.",
      "Razorpay Integration Details: Server-side order creation using Razorpay Node SDK, passing order IDs to the client and recording payment references in the transaction log.",
      "Query Optimization: Compounded MongoDB indexes on frequently filtered vehicle fields (brand, price, year) to ensure low-latency catalog queries.",
      "RESTful API Integrity: Thorough status contracts (200, 201, 400, 401, 404, 500) with descriptive JSON error structures."
    ],
    securityMeasures: [
      "JWT-based route authorization ensuring buyers cannot mutate seller inventories.",
      "Sanitized query parameters to prevent NoSQL operator injection in vehicle search.",
      "Server-side order amount verification preventing client-side price tampering."
    ],
    engineeringDecisions: [
      "Used Cloudinary rather than local disk storage to avoid server storage bloat and ensure fast CDN asset delivery for multi-photo vehicle galleries.",
      "Separated buyer favorites from shopping cart to support wishlisting without cluttering active purchase orders."
    ],
    futureWork: [
      "Planned: Integration of automated Razorpay webhook signature verification for asynchronous payment confirmations.",
      "Planned: Vehicle financing calculator and EMI estimation tools.",
      "Planned: In-app real-time messaging between prospective buyers and verified sellers."
    ]
  },
  {
    id: "shadownotes",
    title: "ShadowNotes",
    badge: "Application Security & Cryptography",
    badgeColor: "rose",
    category: "Security & AI",
    tagline: "Zero-Knowledge Encrypted Notes Platform with Client-Side AES-GCM & Token Reuse Revocation",
    githubUrl: "https://github.com/Kolliboyina-Asritha/shadowNote",
    liveUrl: "https://shadownotee.netlify.app/",
    verifiedLive: false,
    featured: true,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Web Crypto API",
      "AES-GCM",
      "PBKDF2",
      "JWT Refresh Rotation",
      "Helmet",
      "Express-Rate-Limit",
      "Express-Mongo-Sanitize"
    ],
    summary:
      "A privacy-first zero-knowledge note-taking application implementing client-side AES-GCM encryption, PBKDF2 key derivation, JWT refresh token rotation with reuse detection, and comprehensive defense-in-depth middleware.",
    problem:
      "Most cloud note services store user notes in plaintext or encrypt them using server-held keys, leaving sensitive passwords, credentials, and thoughts exposed to database leaks, malicious insiders, or compromised backend instances.",
    solution:
      "ShadowNotes implements a zero-knowledge cryptographic model where cleartext notes never leave the client browser. Encryption keys are derived client-side via PBKDF2 from the user's master secret and used with AES-256-GCM. The Node/Express server acts purely as a blind storage vault, storing only ciphertexts and IVs, while enforcing strict JWT refresh token rotation with automatic breach invalidation.",
    architectureSteps: [
      { step: "1. Client Key Derivation", desc: "Browser Web Crypto derives AES-256 key from user master secret using PBKDF2 (100,000 iterations + cryptographic salt)." },
      { step: "2. Client-Side AES-GCM Encryption", desc: "Note plaintext is encrypted into ciphertext and 96-bit initialization vector (IV) in browser memory." },
      { step: "3. Blind Vault Storage", desc: "Only { ciphertext, iv, salt } payload is transmitted over HTTPS to Express REST API; server has zero access to cleartext." },
      { step: "4. JWT Refresh Token Rotation", desc: "Short-lived access tokens (50s) paired with HttpOnly refresh cookies; each refresh issues a new token pair and rotates the stored array." },
      { step: "5. Token Reuse & Breach Detection", desc: "If an already-used or expired refresh token is submitted, the controller identifies a replay attack and wipes the user's entire token family (hackeduser.refreshToken = [])." },
      { step: "6. Client-Side Decryption", desc: "Authorized client fetches ciphertext and decrypts locally using the in-memory derived key." }
    ],
    keyFeatures: [
      {
        title: "Zero-Knowledge AES-GCM Encryption",
        desc: "Authenticated encryption via Web Crypto API ensures confidentiality and tamper detection before data ever reaches the network."
      },
      {
        title: "PBKDF2 Cryptographic Key Derivation",
        desc: "Password-Based Key Derivation Function 2 with cryptographic salt and high iteration counts to thwart brute-force and rainbow table attacks."
      },
      {
        title: "Refresh Token Rotation with Reuse Revocation",
        desc: "Documented in `refreshTokenController.js`: Detects token theft replay attempts and instantly revokes all active sessions for the compromised user account."
      },
      {
        title: "Multi-Layered Middleware Security",
        desc: "Hardened with Helmet HTTP headers, express-rate-limit against brute-force attacks, express-mongo-sanitize against NoSQL injection, and xss-clean."
      },
      {
        title: "Blind Metadata Management",
        desc: "Organizes notes by user ID while keeping content completely unreadable by server administrators or database operators."
      }
    ],
    technicalImplementation: [
      "Client vs Server Cryptography Separation: Clarified architecture where Web Crypto API runs inside user agents, while server utilities (`crypto.createCipheriv`) provide backend verification.",
      "Token Reuse Detection Algorithm: When a refresh token is presented, the DB verifies it against `foundUser.refreshToken`. If not found, a replay breach is detected, triggering `hackeduser.refreshToken = []` and returning HTTP 403.",
      "Short Access Token Lifespan: Access tokens configured with a 50-second expiration window to minimize exposure windows if an access token is intercepted.",
      "Input Defense Pipeline: Express middleware chain parses requests through Helmet headers, rate limiting (100 requests per 15 minutes), and NoSQL injection sanitizer."
    ],
    securityMeasures: [
      "Zero-knowledge architecture: Master encryption key never transmitted over the wire.",
      "HttpOnly, Secure, SameSite=None refresh cookies.",
      "Instant token family revocation upon replay attack detection.",
      "Protection against XSS and NoSQL injection through automated sanitization middleware."
    ],
    engineeringDecisions: [
      "Chose AES-GCM over CBC mode to provide authenticated encryption with built-in integrity tags, preventing bit-flipping attacks.",
      "Stored refresh tokens in a rotating array to support multi-device logins while preserving cross-device breach detection."
    ],
    futureWork: [
      "Planned: Client-side end-to-end encrypted note sharing via asymmetric public-private keypairs (Web Crypto ECDH).",
      "Planned: Biometric WebAuthn / FIDO2 authentication integration.",
      "Planned: Local encrypted offline storage utilizing IndexedDB."
    ]
  }
];
