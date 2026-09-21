/**
 * Personal portfolio / resume content
 * Tarun Chhabra
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
    period: "Sept 2025 - Present",
    role: "PHP Laravel Developer",
    company: "Digittrix Infotech Pvt. Ltd.",
    description:
      "Full-time PHP/Laravel developer at Digittrix Infotech Pvt. Ltd., working on real-world client projects involving backend development, REST APIs, database management, and application deployment.",
    tags: [
      "PHP",
      "Laravel",
      "REST API",
      "MySQL",
      "WordPress",
      "WooCommerce",
    ],
  },

  {
    period: "Jan 2025 - July 2025",
    role: "Internship Java",
    company: "Pisoft Solutions",
    description:
      "Completed a Java internship at Pisoft Solutions focused on Spring Boot, Spring MVC, Thymeleaf, and Spring Data JPA, gaining hands-on experience in MVC architecture and backend web application development.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Thymeleaf",
      "Spring Data JPA",
    ],
  },
];