/**
 * Personal portfolio / resume content
 * Tarun Chhabra - Full-Stack Web Developer & Backend Engineer
 * Authentic data from resume + Digittrix Infotech experience
 */

export const profile = {
  name: "Tarun Chhabra",
  title: "Full-Stack Web Developer",
  phone: "+91 9781116662",
  tagline:
    "Building scalable web applications, REST APIs, enterprise CRM systems, and high-performance backend solutions.",
  about:
    "I am a Software Developer with a Master of Computer Applications (MCA) from Chitkara University and a strong foundation in backend architecture. Currently working as a Full-Time PHP/Laravel Developer at Digittrix Infotech Pvt. Ltd., I engineer production CRM systems, multi-restaurant APIs, custom WooCommerce solutions, and third-party gateway integrations (Twilio, Brevo). My backend foundation was built with Java, Spring Boot, Hibernate, and MySQL during my internship at Pisoft Informatics. I also develop modern Windows utilities using C# and .NET 8, and build modern interactive frontends with React.js and Next.js.",
  email: "tarunchhabra763@gmail.com",
  github: "https://github.com/taruncodes9",
  linkedin: "https://www.linkedin.com/in/tarun-chhabra9/",
  resume: `${process.env.GITHUB_ACTIONS === "true" ? "/tarun-portfolio" : ""}/Tarun Chhabra_Backend_Resume.pdf`,
} as const;

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade: string;
  badge: string;
}

export const education: readonly EducationItem[] = [
  {
    degree: "MCA",
    field: "Master of Computer Application",
    institution: "Chitkara University, Punjab",
    period: "2023 - 2025",
    grade: "7.8 CGPA",
    badge: "POST GRADUATION",
  },
  {
    degree: "BCA",
    field: "Bachelor of Computer Application",
    institution: "Punjabi University, Patiala",
    period: "2020 - 2023",
    grade: "7.2 CGPA",
    badge: "GRADUATION",
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  detail: string;
}

export const certifications: readonly CertificationItem[] = [
  {
    title: "Java Deep Diving – From the Beginning",
    issuer: "Udemy",
    detail: "Comprehensive mastery of Core Java, OOPs, Collections, and Multi-threading.",
  },
  {
    title: "Chitkara University Typing Competition (3rd Place)",
    issuer: "Chitkara University",
    detail: "Achieved a verified typing speed of 42 WPM in university-level competition.",
  },
];

export const skills = [
  // Backend & Core Languages
  "PHP",
  "Laravel",
  "Core PHP",
  "Java",
  "Spring Boot",
  "Hibernate",
  "Spring MVC",
  "Spring Data JPA",
  "Thymeleaf",
  "C#",
  ".NET 8",
  "WPF",
  "Win32 API",
  "Node.js",
  "JavaScript",
  "SQL",
  // Databases
  "MySQL",
  "MariaDB",
  "MongoDB",
  // CMS & E-Commerce
  "WordPress",
  "WooCommerce",
  "Custom WordPress Plugins",
  "Shopify (Basic CMS)",
  // APIs & Tools
  "REST APIs",
  "Postman",
  "Twilio SMS & OTP",
  "Brevo SMTP",
  "PHPMailer",
  "Git",
  "GitHub",
  "XAMPP",
  "Nginx",
  "Apache",
  // Frontend
  "React.js",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "GSAP",
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
    genre: "High Performance",
    description: "Robust MVC architectures, high-throughput REST APIs, and system utilities",
    skills: [
      "PHP",
      "Laravel",
      "Core PHP",
      "Java",
      "Spring Boot",
      "Hibernate",
      "Spring MVC",
      "Spring Data JPA",
      "C#",
      ".NET 8",
      "WPF",
      "Win32 API",
    ],
  },
  {
    title: "Databases & Tools",
    iconName: "Database",
    genre: "Data & DevOps",
    description: "Relational data management, API verification, and version control",
    skills: [
      "MySQL",
      "Postman",
      "Git",
      "GitHub",
      "XAMPP",
      "MongoDB",
      "Nginx",
      "Apache",
      "Linux",
    ],
  },
  {
    title: "CMS & E-Commerce",
    iconName: "ShoppingBag",
    genre: "Commercial Solutions",
    description: "Multi-restaurant platforms, custom plugins, and WooCommerce backends",
    skills: [
      "WordPress",
      "WooCommerce",
      "Custom WordPress Plugins",
      "REST API Custom Endpoints",
      "Shopify (Basic CMS)",
      "Headless CMS",
    ],
  },
  {
    title: "Frontend & Integrations",
    iconName: "Layout",
    genre: "UI & Third-Party APIs",
    description: "Modern web interfaces, SMS/email gateways, and reactive UI frameworks",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Thymeleaf",
      "Twilio SMS/OTP",
      "Brevo SMTP",
      "PHPMailer",
      "GSAP",
      "HTML5/CSS3",
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
    subtitle: "Flagship desktop utilities, multi-tenant restaurant platforms, and QR ordering engines",
    badge: "TRENDING NOW",
  },
  {
    id: "laravel",
    title: "Laravel & PHP Systems",
    subtitle: "Digittrix client platforms, ScanDine QR ordering, and enterprise admin backends",
    badge: "CORE STACK",
  },
  {
    id: "api",
    title: "Java, Spring Boot & Backend APIs",
    subtitle: "Production REST architectures, Spring Data JPA platforms, and third-party integrations",
    badge: "BACKEND HEAVY",
  },
  {
    id: "wordpress",
    title: "WordPress & WooCommerce Solutions",
    subtitle: "Custom plugin development, multi-restaurant synchronization, and dynamic cart engines",
    badge: "ECOMMERCE",
  },
  {
    id: "fullstack",
    title: "Full-Stack Applications",
    subtitle: "Complete end-to-end architectures connecting React/Next.js frontends to secure backends",
    badge: "FULL STACK",
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
  // 2. ScanDine — QR Restaurant Ordering System (From Resume)
  // --------------------------------------------------
  {
    id: "scandine",
    title: "ScanDine — QR-Enabled Restaurant System",
    tagline: "Contactless QR Ordering & Real-Time Kitchen Dispatch Platform",
    description:
      "A QR-enabled Restaurant Ordering System allowing customers to scan table QR codes, browse interactive menus, and place orders directly with automated email dispatch via PHPMailer.",
    detailedOverview:
      "Engineered a full-stack contactless dining system designed to streamline restaurant operations. Diners scan QR codes placed on physical tables, which instantly opens a customized digital menu without requiring any app download. Customers customize items, select quantities, and submit orders directly to the kitchen. Built with PHP and MySQL under an optimized XAMPP local environment, featuring automated email confirmations dispatched to guests and restaurant management via PHPMailer.",
    features: [
      "Dynamic table-specific QR code routing displaying customized menus",
      "Interactive digital menu with category filtering, item add-ons, and cart management",
      "Complete administrative CRUD module for menus, live pricing, and customer orders",
      "Automated transactional email receipts and kitchen notifications via PHPMailer",
      "Normalized MySQL database schema optimized for fast order retrieval during rush hours",
    ],
    stack: [
      "PHP",
      "MySQL",
      "PHPMailer",
      "JavaScript",
      "HTML5",
      "CSS3",
      "XAMPP",
    ],
    categories: ["featured", "laravel", "fullstack"],
    matchScore: 98,
    year: "2024",
    badge: "QR PLATFORM",
    visual: "delivery",
    github: "https://github.com/taruncodes9",
    role: "Full-Stack PHP Developer",
  },

  // --------------------------------------------------
  // 3. Multi-Restaurant Mobile App Platform (Digittrix)
  // --------------------------------------------------
  {
    id: "multi-restaurant-mobile-app",
    title: "Multi-Restaurant Mobile App Platform",
    tagline: "Distributed Multi-Vendor Food Ordering & Delivery Ecosystem",
    description:
      "A multi-restaurant food ordering platform connecting a React Native mobile application with a central WordPress system and multiple independent WordPress/WooCommerce restaurant backends.",
    detailedOverview:
      "Engineered at Digittrix Infotech, this enterprise multi-tenant architecture powers food ordering across dozens of independent restaurant branches. A central master system handles user authentication, geolocation restaurant discovery, and push notifications, while routing carts and orders to independent satellite restaurant databases.",
    features: [
      "Centralized master server managing user discovery and restaurant catalogs",
      "Cross-platform React Native mobile client for iOS and Android",
      "Independent restaurant backends running autonomous WooCommerce databases",
      "Multi-vendor cart split and concurrent checkout synchronization",
      "Real-time order status webhooks and kitchen dispatch alerts",
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
    role: "Backend Architect & API Developer (Digittrix)",
  },

  // --------------------------------------------------
  // 4. Multi-Restaurant API Architecture (Digittrix)
  // --------------------------------------------------
  {
    id: "multi-restaurant-api-architecture",
    title: "Multi-Restaurant API Architecture",
    tagline: "High-Throughput Microservice REST API Architecture",
    description:
      "Custom REST API architecture for restaurant discovery, products, authentication, guest carts, user carts, orders, coupons, rewards, and communication between multiple WordPress installations.",
    detailedOverview:
      "Designed and deployed at Digittrix Infotech, this core REST API layer facilitates communication across independent restaurant management nodes with token-based security, query optimization, and sub-200ms response times.",
    features: [
      "Custom REST endpoints for dynamic menu caching and rapid product queries",
      "Dual cart state handling for anonymous guest sessions and synchronized users",
      "Inter-server webhook and signature verification between central and satellite nodes",
      "Coupon validation, loyalty reward points, and discount calculation rules",
      "Optimized MySQL indexes reducing complex join query execution times by 40%",
    ],
    stack: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "REST API",
      "MySQL",
      "Postman",
    ],
    categories: ["laravel", "api"],
    matchScore: 97,
    year: "2025",
    badge: "ARCHITECTURE",
    visual: "engine",
    role: "API Engineer (Digittrix)",
  },

  // --------------------------------------------------
  // 5. Online Course Management System (Java Spring Boot - From Resume)
  // --------------------------------------------------
  {
    id: "online-course-management",
    title: "Online Course Management System",
    tagline: "Enterprise Course Registration & Enrollment Tracking Backend",
    description:
      "A full-stack web application developed using Java, Spring Boot, and Spring Data JPA for managing online course operations such as student registrations, course catalogs, and enrollment tracking.",
    detailedOverview:
      "Architected a robust educational course platform following strict MVC design patterns. The backend provides comprehensive REST APIs for course publishing, curriculum structuring, student enrollment status, and grading records. Thoroughly tested using Postman test collections with MySQL relational persistence.",
    features: [
      "Modular Spring Boot REST controllers following clean MVC architecture",
      "Spring Data JPA repositories for relational student-to-course mapping",
      "Complete CRUD endpoints for student profiles, course catalogs, and enrollments",
      "Automated request validation and custom HTTP error response handling",
      "Thoroughly validated and tested using Postman API collections",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "Postman",
    ],
    categories: ["api", "fullstack"],
    matchScore: 97,
    year: "2024",
    badge: "JAVA & SPRING",
    visual: "engine",
    github: "https://github.com/taruncodes9",
    role: "Java Backend Developer",
  },

  // --------------------------------------------------
  // 6. Hotel Management System (Java Spring Boot - From Resume)
  // --------------------------------------------------
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    tagline: "Automated Room Booking & Reservation Management Platform",
    description:
      "A Spring Boot backend application to manage hotel room bookings, guest records, and real-time room availability with full CRUD functionality and Postman verification.",
    detailedOverview:
      "Developed a reliable hospitality management system that handles room categorization (Deluxe, Suite, Standard), room availability state tracking, customer reservation records, and billing calculations. Powered by Spring MVC and Hibernate ORM for reliable transaction management.",
    features: [
      "Room inventory management tracking real-time availability and cleaning statuses",
      "Reservation scheduling engine preventing double-booking conflicts",
      "Guest profile tracking with check-in, check-out, and billing history",
      "Hibernate ORM entity mappings for transactional database operations",
      "Full CRUD REST API endpoints validated with Postman test suites",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "Spring Data JPA",
      "MySQL",
      "Postman",
    ],
    categories: ["api", "laravel"],
    matchScore: 96,
    year: "2024",
    badge: "SPRING BOOT",
    visual: "hub",
    github: "https://github.com/taruncodes9",
    role: "Java Backend Developer",
  },

  // --------------------------------------------------
  // 7. Student Management System (Java Spring Boot - From Resume)
  // --------------------------------------------------
  {
    id: "student-management-system",
    title: "Student Management System",
    tagline: "Academic Records & Enrollment REST API Backend",
    description:
      "A RESTful backend using Spring Boot to manage academic operations including student admissions, semester registrations, course enrollments, and academic performance tracking.",
    detailedOverview:
      "Engineered an institutional student management system designed for universities and colleges. Manages student identity records, program assignments, semester roll numbers, and course enrollments with secure database transactions.",
    features: [
      "Student admission lifecycle management with unique roll number generation",
      "Relational data schema mapping departments, courses, and registered students",
      "Spring Data JPA repositories with custom query methods",
      "Full CRUD REST APIs tested across edge cases with Postman",
      "Consistent JSON response formatting and HTTP status code mappings",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "Postman",
    ],
    categories: ["api"],
    matchScore: 95,
    year: "2024",
    badge: "REST API",
    visual: "engine",
    github: "https://github.com/taruncodes9",
    role: "Java Backend Developer",
  },

  // --------------------------------------------------
  // 8. Custom API Integrations (Digittrix)
  // --------------------------------------------------
  {
    id: "custom-api-integrations",
    title: "Custom API Integrations",
    tagline: "Production-Grade Third-Party Communication & Verification Services",
    description:
      "Backend integrations connecting web applications with external services for authentication, communication, email delivery, and third-party APIs.",
    detailedOverview:
      "Developed at Digittrix Infotech, this production integration layer connects PHP/Laravel systems with Twilio SMS for two-factor verification, Brevo and Gmail SMTP for transactional emails, and asynchronous webhooks with cryptographic verification.",
    features: [
      "Twilio Programmable SMS & OTP authentication pipeline with rate-limiting",
      "Brevo & Gmail SMTP transactional email queues with delivery status tracking",
      "Secure webhook listener endpoints with cryptographic signature validation",
      "Robust retry mechanisms and fallback notification channels",
      "Complete Postman test suites and environment configs",
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
    badge: "INTEGRATIONS",
    visual: "handshake",
    role: "Backend Integrator (Digittrix)",
  },

  // --------------------------------------------------
  // 9. WordPress & WooCommerce Solutions (Digittrix)
  // --------------------------------------------------
  {
    id: "wordpress-woocommerce-solutions",
    title: "WordPress & WooCommerce Solutions",
    tagline: "Tailored E-Commerce Backend & Custom Plugins",
    description:
      "Custom WordPress and WooCommerce development including backend functionality, product systems, APIs, cart workflows, database operations, and client-specific features.",
    detailedOverview:
      "Developed at Digittrix Infotech, creating specialized custom plugins, complex multi-attribute variation matrices, customized checkout flows, and database optimizations for heavy WooCommerce stores.",
    features: [
      "Custom WordPress plugin development adhering to strict coding standards",
      "Advanced product variation engines with dynamic pricing rules and stock triggers",
      "Streamlined checkout flow reducing abandonment rate and improving mobile conversions",
      "Direct database optimizations and custom tables for reporting workloads",
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
    role: "WordPress & WooCommerce Developer (Digittrix)",
  },

  // --------------------------------------------------
  // 10. Client CRM & Lead Management System (Digittrix)
  // --------------------------------------------------
  {
    id: "client-crm-lead-management",
    title: "Client CRM & Lead Management System",
    tagline: "Sales Pipeline Automation & Customer Relationship Platform",
    description:
      "A web-based CRM for managing leads, customers, follow-ups, sales pipelines, notes, and communication history through a centralized dashboard.",
    detailedOverview:
      "Developed an operational CRM system at Digittrix designed to optimize lead conversion for sales teams. Provides drag-and-drop pipeline visualization, client communication history logs, automated reminder tasks for sales reps, and managerial visibility into team velocity and deal close rates.",
    features: [
      "Visual Kanban sales pipeline tracking deals across customized stage funnels",
      "Comprehensive contact record cards containing conversation notes and reminder dates",
      "Automated follow-up scheduling with notification alerts for account executives",
      "Granular user permissions separating agent actions from manager reporting views",
      "Exportable reporting metrics tracking conversion rates and sales velocity",
    ],
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
      "JavaScript",
    ],
    categories: ["laravel", "fullstack", "api"],
    matchScore: 98,
    year: "2025",
    badge: "ENTERPRISE CRM",
    visual: "handshake",
    role: "Full-Stack Developer (Digittrix)",
  },

  // --------------------------------------------------
  // 11. Buswala — Bus Booking Platform
  // --------------------------------------------------
  {
    id: "buswala",
    title: "Buswala — Bus Booking Platform",
    tagline: "Intercity Route Discovery & Operator Lead Booking Platform",
    description:
      "A modern bus booking and lead-generation platform designed to help users discover routes, compare travel options, and quickly connect with bus operators.",
    detailedOverview:
      "Developed a full-stack web portal for intercity travel search. Buswala enables travelers to search departure/arrival destinations, compare seating classes, inspect boarding points, and submit booking inquiries directly dispatched to travel operators.",
    features: [
      "Instant route search engine with origin/destination autocomplete and date filtering",
      "Lead generation system dispatches inquiries via instant notifications to operators",
      "Responsive, mobile-optimized UI designed for travelers on handheld devices",
      "MongoDB document models structured for rapid bus schedules and route lookups",
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
  // 12. Developer Portfolio & Streaming Showcase
  // --------------------------------------------------
  {
    id: "developer-portfolio",
    title: "Developer Portfolio & Streaming Showcase",
    tagline: "Cinematic Netflix-Inspired Developer Streaming Platform",
    description:
      "A modern developer portfolio modeled after Netflix with profile selection (Developer, Recruiter, Visitor), horizontal row sliders, interactive modals, and fluid typography.",
    detailedOverview:
      "Designed and coded a standout personal portfolio modeled after premium streaming platforms. Showcases software projects like movies and TV shows across horizontally scrollable rows, complete with ambient red glow cursor, interactive preview modals, smooth GSAP animations, and GitHub Actions CI/CD deployment.",
    features: [
      "Netflix-inspired 'Who's exploring?' profile selection (Developer, Recruiter, Visitor)",
      "Horizontally scrollable project rows with smooth chevron slider navigation",
      "Modern cinematic Netflix Red ambient light glow cursor follower",
      "Interactive project preview modals with tech stacks, deep overviews, and live links",
      "Zero-latency static export deployed automatically to GitHub Pages via GitHub Actions",
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
    role: "PHP / Laravel Developer",
    company: "Digittrix Infotech Pvt. Ltd.",
    season: "Season 2 (Current)",
    description:
      "Full-time PHP/Laravel developer at Digittrix Infotech Pvt. Ltd., engineering client web applications, REST APIs, database architectures, and third-party communication pipelines.",
    highlights: [
      "Engineered multi-restaurant mobile backend APIs and synchronized satellite store databases",
      "Developed custom CRM solutions with automated lead tracking and notification pipelines",
      "Integrated third-party APIs including Twilio SMS/OTP, Brevo transactional email, and payment gateways",
      "Configured and maintained production deployments on Apache and Nginx web servers",
    ],
    tags: [
      "PHP",
      "Laravel",
      "REST API",
      "MySQL",
      "WordPress",
      "WooCommerce",
      "Twilio",
      "Brevo",
      "Nginx",
      "Apache",
    ],
  },

  {
    period: "Jan 2025 - July 2025",
    role: "Full Stack Java Developer Intern",
    company: "Pisoft Informatics Pvt. Ltd.",
    season: "Season 1",
    description:
      "Completed a 6-month Java internship at Pisoft Informatics focused on Spring Boot, Hibernate, Thymeleaf, and Spring Data JPA, gaining hands-on experience in MVC architecture, backend development, debugging, and deployment.",
    highlights: [
      "Developed scalable web applications using Spring Boot, Hibernate, and Thymeleaf",
      "Implemented RESTful APIs and integrated MySQL databases with Spring Data JPA",
      "Performed CRUD operations and managed relational database schemas using MySQL",
      "Gained hands-on experience in backend debugging, deployment, and team collaboration",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Spring MVC",
      "Thymeleaf",
      "Spring Data JPA",
      "MySQL",
      "Postman",
    ],
  },
];
