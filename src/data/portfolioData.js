export const personalInfo = {
  name: "Kolliboyina Asritha",
  shortName: "Asritha",
  role: "Backend-Focused Full-Stack Developer",
  tagline: "Building resilient REST APIs, distributed web applications, and security-conscious architectures.",
  degree: "B.Tech in Computer Science",
  institution: "Vishnu Institute of Technology",
  location: "Bhimavaram, Andhra Pradesh",
  cgpa: "8.92 / 10",
  graduationYear: "2027",
  email: "asrithaasritha99@gmail.com",
  phone: "7989178986",
  resumePath: "/resume.pdf",
  profiles: {
    github: {
      name: "GitHub",
      url: "https://github.com/Kolliboyina-Asritha",
      username: "Kolliboyina-Asritha",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/asritha-kolliboyina-5762bb2b8",
      username: "asritha-kolliboyina-5762bb2b8",
    },
    leetcode: {
      name: "LeetCode",
      url: "https://leetcode.com/u/Asrithakolliboyina/",
      username: "Asrithakolliboyina",
    },
    geeksforgeeks: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/asrithaashl7e",
      username: "asrithaashl7e",
    },
  },
  bio: [
    "I am a Computer Science engineering undergraduate (2023–2027) at Vishnu Institute of Technology with an 8.92 CGPA and a strong focus on backend systems, RESTful API architecture, relational and NoSQL databases, and application security.",
    "Rather than treating backend development as mere data plumbing, I prioritize clean architectural boundaries, robust authentication protocols (JWT, token rotation, RBAC), defense-in-depth principles (Helmet, sanitization, rate limiting), and scalable data models. My practical experience spans building enterprise-scale HRMS platforms, zero-knowledge encrypted note systems, explainable cybersecurity threat detection engines, and full-stack marketplaces.",
    "I believe in mastering fundamentals through consistent problem-solving practice in Data Structures and Algorithms, rigorous API testing using Postman/Bruno, and writing maintainable code that solves real-world operational problems."
  ],
  engineeringPillars: [
    {
      title: "Backend & System Design",
      desc: "Architecting modular REST APIs with Node.js/Express and Java, implementing layered controller-service-model patterns, database indexing, and asynchronous job processing."
    },
    {
      title: "Practical Web Security",
      desc: "Implementing defense-in-depth: client-side Web Crypto AES-GCM, PBKDF2 key derivation, JWT refresh token rotation with reuse revocation, and granular Role-Based Access Control."
    },
    {
      title: "Database Engineering",
      desc: "Designing normalized and document-based schemas across MongoDB, MySQL, and Firestore with query optimization, aggregation pipelines, and referential integrity."
    },
    {
      title: "DSA & Problem Solving",
      desc: "Practicing data structures and algorithmic paradigms daily on LeetCode and GeeksforGeeks, with a focus on optimal time-space trade-offs and clean code."
    }
  ]
};

export const experiences = [
  {
    id: "defenceminia",
    company: "DefenceMinia Technologies",
    role: "Full-Stack Developer Intern",
    period: "July 2026 – Present",
    status: "Current",
    type: "Remote",
    projectFocus: "WorkPulse — Enterprise Human Resource Management System",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "Socket.IO",
      "Cloudinary",
      "Postman"
    ],
    highlights: [
      "Architected and implemented core backend services for WorkPulse HRMS, organizing complex enterprise workflows across 14+ specialized modules.",
      "Engineered granular Role-Based Access Control (RBAC) supporting 5 distinct organizational roles: SuperAdmin, HR, Team Lead, Employee, and Intern.",
      "Implemented secure JWT authentication with HttpOnly refresh tokens, password hashing, and role-guarded route middleware.",
      "Integrated automated attendance workflows using scheduled cron routines (`absentcron`) and real-time team messaging powered by Socket.IO.",
      "Designed and validated comprehensive REST endpoints with Postman and Bruno collections, documenting schemas and response payloads."
    ]
  },
  {
    id: "talent-trek",
    company: "Talent Trek",
    role: "Web Development Intern",
    period: "May 2025 – August 2025",
    status: "Completed",
    type: "Remote",
    projectFocus: "WheelWise — Full-Stack Vehicle Marketplace Platform",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "Razorpay",
      "Cloudinary"
    ],
    highlights: [
      "Developed full-stack vehicle marketplace features connecting vehicle buyers and sellers with dedicated role-specific dashboards.",
      "Engineered protected RESTful endpoints for vehicle listings, favorites, multi-item cart management, and buyer review submissions.",
      "Integrated Razorpay payment gateway handling server-side order generation and status tracking workflows.",
      "Implemented Cloudinary media pipeline for multi-image vehicle uploads with automatic optimization and CDN delivery.",
      "Ensured secure user sessions using JWT-based authorization and input validation across inventory query parameters."
    ]
  }
];

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      featured: true,
      description: "Core languages used for systems programming, backend logic, and algorithms",
      skills: [
        { name: "Java", level: "Core / Backend", highlight: true, note: "OOP, Collections, Robust Application Logic" },
        { name: "JavaScript (ES6+)", level: "Full-Stack", highlight: true, note: "Node.js, Async/Await, Web Crypto, Modern DOM" },
        { name: "Python", level: "Scripting / ML", highlight: false, note: "FastAPI, Data Pipelines, ML Classification" },
        { name: "C", level: "Foundational", highlight: false, note: "Memory concepts, low-level data structures" },
        { name: "SQL", level: "Databases", highlight: true, note: "Complex Joins, Indexing, Schema Normalization" },
      ]
    },
    {
      name: "Web & Backend Technologies",
      featured: true,
      description: "Modern frameworks and protocols for building scalable web services",
      skills: [
        { name: "Node.js", highlight: true, note: "Event-driven runtime, non-blocking I/O" },
        { name: "Express.js", highlight: true, note: "Modular routing, custom middleware pipelines" },
        { name: "REST API Design", highlight: true, note: "Resource modeling, HTTP verbs, status contracts" },
        { name: "JWT & RBAC Security", highlight: true, note: "Access/Refresh rotation, role authorization guards" },
        { name: "React.js", highlight: true, note: "Component architecture, hooks, state management" },
        { name: "Tailwind CSS", highlight: false, note: "Responsive utility styling, modern design tokens" },
        { name: "Socket.IO", highlight: false, note: "Bidirectional real-time event communication" },
        { name: "HTML5 & CSS3", highlight: false, note: "Semantic structure, responsive layouts, accessibility" },
      ]
    },
    {
      name: "Databases & Storage",
      featured: false,
      description: "Data persistence, document stores, and cloud storage systems",
      skills: [
        { name: "MongoDB", highlight: true, note: "Mongoose ODM, aggregation pipelines, document schemas" },
        { name: "MySQL", highlight: true, note: "Relational modeling, transactions, foreign key constraints" },
        { name: "Firestore", highlight: false, note: "NoSQL document collections, real-time listeners" },
        { name: "Cloudinary", highlight: false, note: "Secure cloud asset storage and media delivery" },
      ]
    },
    {
      name: "Developer Tools & Testing",
      featured: false,
      description: "Version control, API validation suites, and developer environment",
      skills: [
        { name: "Git & GitHub", highlight: true, note: "Branching workflows, version control, PR reviews" },
        { name: "Postman", highlight: true, note: "API testing, automated runner collections, mock environments" },
        { name: "Bruno", highlight: false, note: "Offline-first Git-integrated API client" },
        { name: "VS Code", highlight: false, note: "Debugging, extensions, full-stack environment" },
      ]
    },
    {
      name: "Core Computer Science",
      featured: true,
      description: "Foundational engineering principles supporting scalable software development",
      skills: [
        { name: "Data Structures & Algorithms", highlight: true, note: "Algorithmic thinking, complexity analysis" },
        { name: "Object-Oriented Programming (OOP)", highlight: true, note: "Encapsulation, inheritance, polymorphism, abstraction" },
        { name: "Database Management Systems (DBMS)", highlight: true, note: "ACID properties, indexing, normalization" },
        { name: "Computer Networks", highlight: false, note: "TCP/IP, HTTP/HTTPS, DNS, WebSockets, TLS" },
        { name: "Operating Systems", highlight: false, note: "Concurrency, process scheduling, memory management" },
        { name: "SDLC & Agile", highlight: false, note: "Requirements analysis, modular implementation, testing" },
      ]
    }
  ]
};

export const dsaTopics = [
  { name: "Arrays & Two Pointers", status: "Active Focus", desc: "Sliding window, prefix sums, binary search variants" },
  { name: "Strings & Hashing", status: "Active Focus", desc: "Pattern matching, hash maps, frequency analysis" },
  { name: "Recursion & Backtracking", status: "Active Focus", desc: "Permutations, combinations, constraint satisfaction" },
  { name: "Greedy Algorithms", status: "Active Focus", desc: "Interval scheduling, optimal local choice strategies" },
  { name: "Dynamic Programming", status: "Active Focus", desc: "1D/2D memoization, knapsack variants, optimal substructure" },
  { name: "Graphs & Trees", status: "Active Focus", desc: "BFS, DFS, topological sorting, tree traversals" },
  { name: "SQL Query Optimization", status: "Active Focus", desc: "Subqueries, aggregations, joins, indexing strategies" }
];

export const certifications = [
  {
    title: "Cybersecurity Virtual Internship",
    issuer: "Palo Alto Networks — EduSkills",
    year: "2026",
    badge: "Security",
    description: "Hands-on virtual internship covering network security principles, threat analysis, perimeter defense, and cloud security fundamentals."
  },
  {
    title: "Deep Learning Specialization",
    issuer: "NVIDIA Deep Learning Institute",
    year: "2025",
    badge: "AI & ML",
    description: "Comprehensive training on deep learning architectures, neural network training, model optimization, and practical inference workflows."
  },
  {
    title: "MERN Stack Certification",
    issuer: "SmartBridge",
    year: "2026",
    badge: "Full-Stack",
    description: "Rigorous certification covering end-to-end full-stack web application engineering with MongoDB, Express.js, React.js, and Node.js."
  }
];

export const educationData = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Vishnu Institute of Technology",
  location: "Bhimavaram, Andhra Pradesh",
  period: "2023 – 2027",
  cgpa: "8.92 / 10",
  highlights: [
    "Consistent academic excellence with an 8.92/10 cumulative grade point average.",
    "Rigorous coursework in Data Structures, Algorithms, Database Systems, Computer Networks, and Operating Systems.",
    "Active participation in technical projects, security engineering labs, and continuous algorithmic problem-solving."
  ]
};

export const coreStrengths = [
  {
    id: "leadership",
    title: "Leadership",
    category: "Team & Execution",
    iconName: "Users",
    tagline: "Guiding collaborative execution and technical alignment",
    desc: "Experience leading project teams, organizing sprint deliverables, facilitating architectural consensus, and supporting peers through constructive technical reviews."
  },
  {
    id: "problem-solving",
    title: "Problem-Solving",
    category: "Algorithmic Rigor",
    iconName: "Puzzle",
    tagline: "Deconstructing complexity into deterministic modules",
    desc: "Approaching complex software problems with structural decomposition, evaluating time-space trade-offs, and implementing clean, maintainable logic."
  },
  {
    id: "communication",
    title: "Communication",
    category: "Collaboration",
    iconName: "MessageSquare",
    tagline: "Clear technical articulation and active documentation",
    desc: "Translating architectural decisions and API contracts into clear schemas, documentation, and actionable feedback across distributed and remote teams."
  },
  {
    id: "analytical-thinking",
    title: "Analytical & Deep Thinking",
    category: "Architecture",
    iconName: "Cpu",
    tagline: "Evaluating edge cases, attack vectors, and trade-offs",
    desc: "Rigorous attention to system constraints, data integrity models, security attack surfaces (SSRF, replay attacks, race conditions), and performance bottlenecks."
  },
  {
    id: "persistence",
    title: "Persistence",
    category: "Resilience",
    iconName: "Zap",
    tagline: "Methodical debugging through difficult roadblocks",
    desc: "Tenacious approach to isolating elusive bugs, tracing distributed network states, and iterating until systems operate reliably under edge conditions."
  },
  {
    id: "quick-learner",
    title: "Quick Learner",
    category: "Adaptability",
    iconName: "Rocket",
    tagline: "Rapidly absorbing new toolchains and paradigms",
    desc: "Swiftly mastering unfamiliar libraries, frameworks (FastAPI, Scikit-Learn, Web Crypto), and SDKs to deliver production-ready code with minimal turnaround."
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning & Curiosity",
    category: "Growth Mindset",
    iconName: "Compass",
    tagline: "Relentless curiosity about emerging technologies",
    desc: "Dedicated to ongoing expansion in application security, machine learning applications, advanced backend patterns, and competitive problem-solving."
  }
];

