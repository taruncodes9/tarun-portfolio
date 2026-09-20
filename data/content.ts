/**
 * Personal portfolio / resume content
 * Tarun Chhabra
 */

export const profile = {
  name: "Tarun Chhabra",
  title: "Full-Stack Web Developer",
  tagline:
    "Building modern web applications, APIs, and scalable WordPress/WooCommerce solutions.",
  about:
    "Software Developer with professional experience in PHP, Laravel, Core PHP, WordPress, and WooCommerce. I work on real-world client applications, REST APIs, database-driven systems, and custom integrations. Currently expanding my full-stack expertise with React.js, Next.js, and Node.js while building modern, scalable web solutions.",
  email: "tarunchhabra763@gmail.com",
  github: "https://github.com/taruncodes9",
  linkedin: "https://www.linkedin.com/in/tarun-chhabra9/",
  resume: `${process.env.GITHUB_ACTIONS === "true" ? "/tarun-portfolio" : ""}/Tarun Chhabra_Backend_Resume.pdf`,
} as const;

export const skills = [
  "PHP",
  "Laravel",
  "Core PHP",
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
] as const;

export type ProjectVisualKind = "delivery" | "engine" | "hub" | "handshake";

export interface Project {
  title: string;
  description: string;
  stack: readonly string[];
  /** Which schematic appears in the hover preview. */
  visual: ProjectVisualKind;
}

export const projects: readonly Project[] = [
  // --------------------------------------------------
  // PROFESSIONAL / REAL-WORLD PROJECTS
  // --------------------------------------------------

  {
    title: "Multi-Restaurant Mobile App Platform",
    description:
      "A multi-restaurant food ordering platform connecting a React Native mobile application with a central WordPress system and multiple independent WordPress/WooCommerce restaurant backends.",
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "REST API",
      "React Native",
      "MySQL",
    ],
    visual: "hub",
  },

  {
    title: "Multi-Restaurant API Architecture",
    description:
      "Custom REST API architecture for restaurant discovery, products, authentication, guest carts, user carts, orders, coupons, rewards, and communication between multiple WordPress installations.",
    stack: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "REST API",
      "MySQL",
    ],
    visual: "engine",
  },

  {
    title: "Custom API Integrations",
    description:
      "Backend integrations connecting web applications with external services for authentication, communication, email delivery, and third-party APIs.",
    stack: [
      "PHP",
      "Laravel",
      "REST API",
      "Twilio",
      "Brevo",
      "Gmail SMTP",
    ],
    visual: "handshake",
  },

  {
    title: "WordPress & WooCommerce Solutions",
    description:
      "Custom WordPress and WooCommerce development including backend functionality, product systems, APIs, cart workflows, database operations, and client-specific features.",
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "MySQL",
      "REST API",
    ],
    visual: "delivery",
  },

  // --------------------------------------------------
  // PERSONAL / PORTFOLIO PROJECTS
  // --------------------------------------------------

  {
    title: "Buswala — Bus Booking Platform",
    description:
      "A modern bus booking and lead-generation platform designed to help users discover routes, compare travel options, and quickly connect with bus operators.",
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    visual: "delivery",
  },

  {
    title: "Developer Portfolio & Agency Website",
    description:
      "A modern developer and web-agency portfolio featuring animated interactions, project showcases, service sections, lead-generation flows, and responsive design.",
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
    ],
    visual: "engine",
  },

  {
    title: "E-Commerce Management Platform",
    description:
      "A full-stack e-commerce application with product management, categories, authentication, shopping cart, orders, and an administrative dashboard.",
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    visual: "hub",
  },

  {
    title: "Client CRM & Lead Management System",
    description:
      "A web-based CRM for managing leads, customers, follow-ups, sales pipelines, notes, and communication history through a centralized dashboard.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    visual: "handshake",
  },

  {
    title: "Laravel Admin & API Platform",
    description:
      "A backend management platform built with Laravel featuring authentication, role-based access, CRUD operations, database relationships, validation, and REST APIs.",
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "JavaScript",
    ],
    visual: "engine",
  },

  {
    title: "Real-Time Order Tracking System",
    description:
      "A food and delivery tracking concept allowing users to follow order progress through different stages while providing an administrative interface for managing orders.",
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    visual: "delivery",
  },

  {
    title: "WordPress REST API Headless CMS",
    description:
      "A headless WordPress architecture where WordPress manages content while a modern Next.js frontend consumes custom REST APIs to deliver a fast and interactive experience.",
    stack: [
      "WordPress",
      "PHP",
      "REST API",
      "Next.js",
      "React.js",
    ],
    visual: "hub",
  },
];

export interface ExperienceItem {
  period: string;
  role: string;
  company?: string;
  description: string;
  tags: readonly string[];
}

export const experience: readonly ExperienceItem[] = [
  {
    period: "2025 – Present",
    role: "PHP / Web Developer",
    company: "Digittrix Infotech Pvt. Ltd.",
    description:
      "Working on real-world client projects using PHP, Laravel, WordPress, WooCommerce, REST APIs, and MySQL. Responsible for developing features, integrating APIs, working with databases, debugging production issues, and adapting applications to changing client requirements.",
    tags: [
      "PHP",
      "Laravel",
      "WordPress",
      "WooCommerce",
      "REST API",
      "MySQL",
    ],
  },

  {
    period: "2025 – Present",
    role: "Full-Stack Development",
    company: "Personal Projects & Learning",
    description:
      "Expanding modern full-stack development skills with React.js, Next.js, and Node.js while building portfolio projects and experimenting with modern frontend architecture, APIs, animations, and deployment workflows.",
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "JavaScript",
      "GSAP",
    ],
  },
];