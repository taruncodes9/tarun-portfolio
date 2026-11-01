/**
 * Personal portfolio / resume content
 * Tarun Chhabra - Full-Stack Web Developer
 */

export const profile = {
  name: "Tarun Chhabra",
  title: "Full-Stack Web Developer",
  tagline:
    "Building scalable web applications, APIs, CRM systems, and modern backend solutions.",
  about:
    "I’m a Software Developer focused on PHP and Laravel, with hands-on experience building CRM systems, admin panels, REST APIs, and business web applications. I also work with WordPress, WooCommerce, and MySQL, and have experience deploying applications on Apache and Nginx servers. My backend foundation comes from working with Java and Spring Boot during my internship. Currently, I’m working as a PHP/Laravel Developer at Digittrix Infotech Pvt. Ltd. while expanding my skills in React.js and Next.js.",
  email: "tarunchhabra763@gmail.com",
  github: "https://github.com/taruncodes9",
  linkedin: "https://www.linkedin.com/in/tarun-chhabra9/",
  resume: `${process.env.GITHUB_ACTIONS === "true" ? "/tarun-portfolio" : ""}/Tarun Chhabra_Backend_Resume.pdf`,
} as const;

export const skills = [
  "PHP",
  "Laravel",
  "Core PHP",
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Spring Data JPA",
  "Thymeleaf",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "React Native",
  "WordPress",
  "Custom WordPress Plugins",
  "REST APIs",
  "WooCommerce",
  "MySQL/MariaDB",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "GSAP",
  "C#",
  ".NET 8",
  "WPF",
  "Win32 API",
] as const;

export interface SkillCategory {
  title: string;
  iconName: string;
  genre: string;
  description: string;
  skills: readonly string[];
}

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Backend & Systems",
    iconName: "Server",
    genre: "High Throughput",
    description: "Robust server architectures, RESTful APIs, and systems programming",
    skills: [
      "PHP",
      "Laravel",
      "Core PHP",
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "C#",
      ".NET 8",
      "Win32 API",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Frontend & Mobile",
    iconName: "Layout",
    genre: "User Experience",
    description: "Responsive, dynamic user interfaces and cross-platform mobile apps",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Thymeleaf",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "CMS & E-Commerce",
    iconName: "ShoppingBag",
    genre: "E-Commerce",
    description: "Custom plugin development, WooCommerce solutions, and headless CMS",
    skills: [
      "WordPress",
      "WooCommerce",
      "Custom WordPress Plugins",
      "Headless CMS",
      "REST API Custom Endpoints",
    ],
  },
  {
    title: "Databases & Tools",
    iconName: "Database",
    genre: "Infrastructure",
    description: "Relational/document databases, API testing, and version control",
    skills: [
      "MySQL/MariaDB",
      "MongoDB",
      "REST APIs",
      "Postman",
      "Git",
      "GitHub",
      "Apache",
      "Nginx",
    ],
  },
];

export type ProjectVisualKind = "delivery" | "engine" | "hub" | "handshake";

export type ProjectCategory =
  | "featured"
  | "fullstack"
  | "laravel"
  | "wordpress"
  | "api";

export interface ProjectCategoryRow {
  id: ProjectCategory;
  title: string;
  subtitle: string;
  badge?: string;
}

export const projectCategoryRows: readonly ProjectCategoryRow[] = [
  {
    id: "featured",
    title: "Top Picks & Featured Releases",
    subtitle: "Flagship desktop utilities, multi-tenant mobile platforms, and customer booking systems",
    badge: "TRENDING NOW",
  },
  {
    id: "fullstack",
    title: "Full-Stack Applications",
    subtitle: "Complete end-to-end architectures connecting React/Next.js frontends to secure backends",
    badge: "FULL STACK",
  },
  {
    id: "laravel",
    title: "Laravel & PHP Systems",
    subtitle: "Enterprise CRM platforms, administrative backends, and robust ORM architectures",
    badge: "BACKEND HEAVY",
  },
  {
    id: "wordpress",
    title: "WordPress & WooCommerce Solutions",
    subtitle: "Multi-restaurant platforms, headless CMS implementations, and custom eCommerce plugins",
    badge: "ECOMMERCE",
  },
  {
    id: "api",
    title: "APIs & Backend Architecture",
    subtitle: "Scalable REST microservices, third-party gateway integrations, and data dispatch pipelines",
    badge: "HIGH THROUGHPUT",
  },
];

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  features: readonly string[];
  stack: readonly string[];
  categories: readonly ProjectCategory[];
  matchScore: number;
  year: string;
  badge?: string;
  visual: ProjectVisualKind;
  href?: string;
  github?: string;
  role?: string;
}

export const projects: readonly Project[] = [
  // --------------------------------------------------
  // 1. WheelConvert
  // --------------------------------------------------
  {
    id: "wheelconvert",
    title: "WheelConvert",
    tagline: "Radial File Converter & Background HUD Utility for Windows 10/11",
    description:
      "A fast, background Windows utility featuring an interactive radial pie menu HUD triggered at the cursor via global hotkey. Supports instant file conversions (Images, PDF, Word DOCX, TXT), interactive image cropping, compression, and EXIF inspection without losing active window focus.",
    detailedOverview:
      "WheelConvert is an advanced desktop productivity application designed for power users and developers. Running quietly in the Windows system tray with zero background CPU overhead, it hooks globally to mouse and keyboard hotkeys. When invoked over selected files in File Explorer, an interactive radial pie menu appears directly at the cursor coordinates. Users can convert images across formats, rasterize or extract text from PDFs, package documents into Word DOCX, perform interactive image crops with live visual previews, and inspect EXIF metadata without ever leaving their active window.",
    features: [
      "Zero-focus-loss Win32 background window with WS_EX_NOACTIVATE and global hotkeys",
      "Interactive radial pie menu HUD drawn with custom WPF geometry at the cursor",
      "Multi-format conversion engine supporting PNG, JPEG, WebP, BMP, ICO, PDF, DOCX, and TXT",
      "SkiaSharp vector PDF rendering & 64-bit Windows.Data.Pdf engine rasterization",
      "Interactive crop dialog with aspect ratio locking and lossless compression",
      "EXIF metadata inspector and sanitization pipeline",
      "Dual architecture packaging: Inno Setup universal installer & standalone portable x64/x86 binaries",
    ],
    stack: [
      ".NET 8",
      "C#",
      "WPF",
      "Win32 P/Invoke",
      "SkiaSharp",
      "PdfPig",
      "Shell COM",
      "Inno Setup",
    ],
    categories: ["featured", "api"],
    matchScore: 99,
    year: "2026",
    badge: "LATEST RELEASE",
    visual: "engine",
    href: "https://taruncodes9.github.io/WheelConvert/",
    github: "https://github.com/taruncodes9/WheelConvert",
    role: "Desktop Systems Architect & Lead Developer",
  },

  // --------------------------------------------------
  // 2. Multi-Restaurant Mobile App Platform
  // --------------------------------------------------
  {
    id: "multi-restaurant-mobile-app",
    title: "Multi-Restaurant Mobile App Platform",
    tagline: "Distributed Multi-Vendor Food Ordering & Delivery Ecosystem",
    description:
      "A multi-restaurant food ordering platform connecting a React Native mobile application with a central WordPress system and multiple independent WordPress/WooCommerce restaurant backends.",
    detailedOverview:
      "Engineered an enterprise-grade multi-tenant architecture designed to power food ordering across dozens of independent restaurant branches. A central hub manages master user identity, location-based restaurant discovery, and consolidated push notifications, while routing cart items and checkout orders to independent restaurant WooCommerce instances. Built for zero-downtime reliability with isolated store databases.",
    features: [
      "Centralized master WordPress server managing user discovery and restaurant catalogs",
      "Cross-platform React Native mobile client for iOS and Android",
      "Isolated restaurant backends running autonomous WooCommerce databases",
      "Multi-vendor cart split and concurrent checkout synchronization",
      "Real-time order status notifications and kitchen dispatch alerts",
      "Geo-location radius filtering for nearby restaurant delivery zones",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "REST API",
      "React Native",
      "MySQL",
    ],
    categories: ["featured", "wordpress", "fullstack", "api"],
    matchScore: 98,
    year: "2025",
    badge: "ENTERPRISE",
    visual: "hub",
    role: "Backend Architect & API Developer",
  },

  // --------------------------------------------------
  // 3. Multi-Restaurant API Architecture
  // --------------------------------------------------
  {
    id: "multi-restaurant-api-architecture",
    title: "Multi-Restaurant API Architecture",
    tagline: "High-Throughput Microservice REST API Architecture",
    description:
      "Custom REST API architecture for restaurant discovery, products, authentication, guest carts, user carts, orders, coupons, rewards, and communication between multiple WordPress installations.",
    detailedOverview:
      "Designed and deployed the core backend REST API layer that facilitates communication across independent restaurant management nodes. Built custom API endpoints with token-based authentication, rate-limiting, and resilient database queries to handle peak dinner-rush traffic spikes with sub-200ms latency.",
    features: [
      "Custom REST endpoints for dynamic menu caching and rapid product queries",
      "Dual cart state handling for anonymous guest sessions and synchronized authenticated users",
      "Inter-server webhook and signature verification between central and satellite servers",
      "Comprehensive coupon validation, loyalty reward points, and discount calculations",
      "Optimized MySQL indexes reducing complex join query execution times by 40%",
    ],
    stack: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "REST API",
      "MySQL",
    ],
    categories: ["laravel", "api"],
    matchScore: 97,
    year: "2025",
    badge: "SYSTEM ARCHITECTURE",
    visual: "engine",
    role: "API Engineer",
  },

  // --------------------------------------------------
  // 4. Custom API Integrations
  // --------------------------------------------------
  {
    id: "custom-api-integrations",
    title: "Custom API Integrations",
    tagline: "Production-Grade Third-Party Communication & Verification Services",
    description:
      "Backend integrations connecting web applications with external services for authentication, communication, email delivery, and third-party APIs.",
    detailedOverview:
      "Architected reliable transactional infrastructure connecting Laravel and PHP backend applications with industry-standard third-party providers. Handled async queue processing, failure retries, rate limits, and secure secret management for communications and identity verification.",
    features: [
      "Twilio Programmable SMS & OTP authentication pipeline with automated rate-limiting",
      "Brevo & Gmail SMTP transactional email queues with delivery status tracking",
      "Secure webhook listener endpoints with cryptographic signature validation",
      "Robust retry mechanisms and fallback notification channels",
      "Complete Postman API test collections and environment configurations",
    ],
    stack: [
      "PHP",
      "Laravel",
      "REST API",
      "Twilio",
      "Brevo",
      "Gmail SMTP",
    ],
    categories: ["laravel", "api"],
    matchScore: 96,
    year: "2025",
    badge: "INTEGRATION",
    visual: "handshake",
    role: "Backend Integrator",
  },

  // --------------------------------------------------
  // 5. WordPress & WooCommerce Solutions
  // --------------------------------------------------
  {
    id: "wordpress-woocommerce-solutions",
    title: "WordPress & WooCommerce Solutions",
    tagline: "Tailored E-Commerce Backend & Custom Plugins",
    description:
      "Custom WordPress and WooCommerce development including backend functionality, product systems, APIs, cart workflows, database operations, and client-specific features.",
    detailedOverview:
      "Engineered tailored solutions extending WordPress and WooCommerce beyond out-of-the-box limitations. Developed custom plugins to accommodate specialized business models, complex multi-attribute inventory matrices, customized checkout flows, and automated ERP synchronizations.",
    features: [
      "Custom WordPress plugin development adhering to strict WordPress coding standards",
      "Advanced product variation engines with dynamic pricing rules and stock triggers",
      "Streamlined checkout flow reducing abandonment rate and improving mobile conversions",
      "Direct database optimizations and custom tables for heavy reporting workloads",
      "Secure payment gateway integrations and invoice generation pipelines",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "MySQL",
      "REST API",
    ],
    categories: ["wordpress"],
    matchScore: 95,
    year: "2025",
    badge: "ECOMMERCE",
    visual: "delivery",
    role: "WordPress & WooCommerce Developer",
  },

  // --------------------------------------------------
  // 6. Buswala — Bus Booking Platform
  // --------------------------------------------------
  {
    id: "buswala",
    title: "Buswala — Bus Booking Platform",
    tagline: "Intercity Route Discovery & Operator Lead Booking Platform",
    description:
      "A modern bus booking and lead-generation platform designed to help users discover routes, compare travel options, and quickly connect with bus operators.",
    detailedOverview:
      "Developed a full-stack web portal for intercity travel search. Buswala enables travelers to search departure/arrival destinations, compare seating classes (sleeper, semi-sleeper, AC), inspect boarding points on interactive maps, and submit instant booking inquiries directly dispatched to travel operators.",
    features: [
      "Instant route search engine with origin/destination autocomplete and date filtering",
      "Lead generation system dispatches inquiries via instant notifications to operators",
      "Responsive, mobile-optimized UI designed for travelers on handheld devices",
      "MongoDB document models structured for rapid bus schedules and route lookups",
      "Operator administration interface for managing buses, routes, fares, and bookings",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    categories: ["featured", "fullstack"],
    matchScore: 97,
    year: "2025",
    badge: "POPULAR",
    visual: "delivery",
    role: "Full-Stack Developer",
  },

  // --------------------------------------------------
  // 7. Developer Portfolio & Agency Website
  // --------------------------------------------------
  {
    id: "developer-portfolio",
    title: "Developer Portfolio & Agency Website",
    tagline: "Cinematic Netflix-Inspired Streaming Portfolio Experience",
    description:
      "A modern developer and web-agency portfolio featuring animated interactions, project showcases, service sections, lead-generation flows, and responsive design.",
    detailedOverview:
      "Designed and coded a standout personal portfolio modeled after premium streaming platforms. Showcases software projects like movies and TV shows across horizontally scrollable rows, complete with hover zoom effects, interactive preview modals, smooth GSAP animations, and GitHub Actions CI/CD deployment.",
    features: [
      "Netflix-inspired dark streaming layout with horizontally scrollable project rows",
      "Interactive project preview modals with tech stacks, deep overviews, and live links",
      "GSAP smooth scrolling, magnetic UI controls, and motion-safe accessible animations",
      "Zero-latency static export deployed automatically to GitHub Pages via GitHub Actions",
      "Responsive layout optimized for smartphones, tablets, laptops, and ultra-wide displays",
    ],
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
    ],
    categories: ["fullstack"],
    matchScore: 95,
    year: "2026",
    badge: "NETFLIX UI",
    visual: "engine",
    href: "https://taruncodes9.github.io/tarun-portfolio/",
    github: "https://github.com/taruncodes9/tarun-portfolio",
    role: "UI/UX Designer & Frontend Developer",
  },

  // --------------------------------------------------
  // 8. E-Commerce Management Platform
  // --------------------------------------------------
  {
    id: "ecommerce-management-platform",
    title: "E-Commerce Management Platform",
    tagline: "Full-Stack Online Retail Hub & Administrative Dashboard",
    description:
      "A full-stack e-commerce application with product management, categories, authentication, shopping cart, orders, and an administrative dashboard.",
    detailedOverview:
      "Built a complete end-to-end e-commerce solution featuring an intuitive customer shopping experience paired with an administrative management dashboard. Handles category trees, SKU inventory tracking, cart state management, checkout validation, and analytics reporting.",
    features: [
      "Customer catalog with search, price filtering, sorting, and pagination",
      "Secure JWT authentication with role-based access for shoppers and store admins",
      "Interactive cart with real-time stock verification and order total computation",
      "Admin dashboard with revenue statistics, order status toggling, and customer logs",
      "Clean RESTful backend API built with Node.js and MongoDB schemas",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    categories: ["fullstack"],
    matchScore: 96,
    year: "2025",
    badge: "FULL STACK",
    visual: "hub",
    role: "Full-Stack Developer",
  },

  // --------------------------------------------------
  // 9. Client CRM & Lead Management System
  // --------------------------------------------------
  {
    id: "client-crm-lead-management",
    title: "Client CRM & Lead Management System",
    tagline: "Sales Pipeline Automation & Customer Relationship Platform",
    description:
      "A web-based CRM for managing leads, customers, follow-ups, sales pipelines, notes, and communication history through a centralized dashboard.",
    detailedOverview:
      "Developed an operational CRM system designed to optimize lead conversion for sales teams. Provides drag-and-drop pipeline visualization, client communication history logs, automated reminder tasks for sales reps, and managerial visibility into team velocity and deal close rates.",
    features: [
      "Visual Kanban sales pipeline tracking deals across customized stage funnels",
      "Comprehensive contact record cards containing conversation notes and reminder dates",
      "Automated follow-up scheduling with notification alerts for account executives",
      "Granular user permissions separating agent actions from manager reporting views",
      "Exportable reporting metrics tracking conversion rates, drop-off stages, and team revenue",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    categories: ["laravel", "fullstack", "api"],
    matchScore: 98,
    year: "2025",
    badge: "ENTERPRISE CRM",
    visual: "handshake",
    role: "Full-Stack Developer",
  },

  // --------------------------------------------------
  // 10. Laravel Admin & API Platform
  // --------------------------------------------------
  {
    id: "laravel-admin-api-platform",
    title: "Laravel Admin & API Platform",
    tagline: "Secure Admin Panel with Granular Role-Based Access Controls",
    description:
      "A backend management platform built with Laravel featuring authentication, role-based access, CRUD operations, database relationships, validation, and REST APIs.",
    detailedOverview:
      "Architected a production backend portal leveraging the power of Laravel's ecosystem. Built clean Eloquent ORM relationship structures, automated database migrations, robust request validation form requests, and secure token authentication with Laravel Sanctum.",
    features: [
      "Multi-tenant Role-Based Access Control (RBAC) with granular permission trees",
      "Clean Eloquent ORM database relationships (One-to-Many, Many-to-Many, Polymorphic)",
      "Secure REST API endpoints with Sanctum token management and API throttling",
      "Automated background jobs and queue dispatching for resource-heavy computations",
      "Comprehensive server-side input validation and error sanitization",
    ],
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "JavaScript",
    ],
    categories: ["laravel", "api"],
    matchScore: 97,
    year: "2025",
    badge: "LARAVEL CORE",
    visual: "engine",
    role: "Backend Architect",
  },

  // --------------------------------------------------
  // 11. Real-Time Order Tracking System
  // --------------------------------------------------
  {
    id: "real-time-order-tracking",
    title: "Real-Time Order Tracking System",
    tagline: "Live Order Status & Dispatch Monitoring System",
    description:
      "A food and delivery tracking concept allowing users to follow order progress through different stages while providing an administrative interface for managing orders.",
    detailedOverview:
      "Designed a real-time event-driven dispatch interface that bridges restaurant operations and customer expectations. Provides a visual status progress tracker for customers and a rapid order action board for kitchen and delivery personnel.",
    features: [
      "Live order lifecycle state machine (Received -> Preparing -> Out for Delivery -> Delivered)",
      "Administrative order fulfillment dashboard with quick status update controls",
      "Animated step progress timeline showing timestamps and estimated delivery time",
      "Optimized polling and websocket-ready API architecture for low network overhead",
      "Mobile-friendly interface built with Next.js and Tailwind CSS",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    categories: ["fullstack", "api"],
    matchScore: 94,
    year: "2025",
    badge: "REAL TIME",
    visual: "delivery",
    role: "Full-Stack Developer",
  },

  // --------------------------------------------------
  // 12. WordPress REST API Headless CMS
  // --------------------------------------------------
  {
    id: "wordpress-headless-cms",
    title: "WordPress REST API Headless CMS",
    tagline: "Decoupled Architecture with Next.js & Custom WordPress Endpoints",
    description:
      "A headless WordPress architecture where WordPress manages content while a modern Next.js frontend consumes custom REST APIs to deliver a fast and interactive experience.",
    detailedOverview:
      "Engineered a modern headless architecture that decouples content management from frontend presentation. Editors retain WordPress's familiar publishing interface, while readers experience instantaneous page loads powered by Next.js static site generation and client-side hydration.",
    features: [
      "Decoupled headless CMS architecture with isolated frontend and backend services",
      "Custom WordPress REST endpoints delivering sanitized and optimized JSON data",
      "Next.js frontend with Static Site Generation (SSG) for lightning-fast delivery",
      "Dynamic routing and automated on-demand revalidation triggers",
      "Structured SEO metadata schema injection for optimal search engine ranking",
    ],
    stack: [
      "WordPress",
      "PHP",
      "REST API",
      "Next.js",
      "React.js",
    ],
    categories: ["wordpress", "fullstack", "api"],
    matchScore: 96,
    year: "2025",
    badge: "HEADLESS CMS",
    visual: "hub",
    role: "Full-Stack Architect",
  },
];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  season: string;
  description: string;
  tags: readonly string[];
  highlights: readonly string[];
}

export const experience: readonly ExperienceItem[] = [
  {
    period: "Sept 2025 - Present",
    role: "PHP Laravel Developer",
    company: "Digittrix Infotech Pvt. Ltd.",
    season: "Season 2",
    description:
      "Full-time PHP/Laravel developer at Digittrix Infotech Pvt. Ltd., working on real-world client projects involving backend development, REST APIs, database management, and application deployment.",
    highlights: [
      "Engineered multi-restaurant mobile backend APIs and database architectures",
      "Developed custom CRM solutions with automated lead tracking and notification pipelines",
      "Integrated third-party APIs including Twilio SMS, Brevo, and payment gateways",
      "Configured and maintained production deployments on Apache and Nginx web servers",
    ],
    tags: [
      "PHP",
      "Laravel",
      "REST API",
      "MySQL",
      "WordPress",
      "WooCommerce",
      "Nginx",
      "Apache",
    ],
  },

  {
    period: "Jan 2025 - July 2025",
    role: "Java Backend Intern",
    company: "Pisoft Solutions",
    season: "Season 1",
    description:
      "Completed a Java internship at Pisoft Solutions focused on Spring Boot, Spring MVC, Thymeleaf, and Spring Data JPA, gaining hands-on experience in MVC architecture and backend web application development.",
    highlights: [
      "Built modular web applications following strict Model-View-Controller patterns",
      "Implemented relational database mapping and repositories with Spring Data JPA",
      "Engineered server-rendered web views utilizing Thymeleaf templates",
      "Gained foundational software engineering practices in OOP and design patterns",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Thymeleaf",
      "Spring Data JPA",
      "MySQL",
    ],
  },
];
