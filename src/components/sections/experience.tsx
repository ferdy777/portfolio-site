"use client";

import { motion } from "framer-motion";

interface Role {
  company: string;
  title: string;
  duration: string;
  location: string;
  bullets: string[];
  tags: string[];
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const roles: Role[] = [
  {
    company: "HZ Infra",
    title: "Frontend Engineer · Full-time",
    duration: "Oct 2025 — Present",
    location: "Nigeria · Remote",
    bullets: [
      "Architected and delivered a multi-tenant school management platform using React and TypeScript, enabling isolated data handling and independent onboarding for multiple school clients.",
      "Built secure tenant onboarding and authentication flows, streamlining client activation and enforcing role-based access across tenants.",
      "Developed a reusable component library with Tailwind CSS and Zustand, reducing UI duplication and accelerating feature delivery across platform modules.",
      "Integrated frontend interfaces with Swagger-documented REST APIs for accurate, low-latency data flow between client and server.",
      "On a client e-invoicing platform (NRS/FIRS-integrated, built for Andersen Nigeria), built invoice filtering, a \"Received Invoices\" tab, payment status management, and role-based access control (RBAC) across Client Administrator, Client User, and Vendor roles.",
      "Fixed CORS/proxy issues and added a refresh token interceptor on the e-invoicing platform to eliminate random session logouts, and audited the Tax Dashboard for currency formatting and UI bugs.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "REST APIs"],
  },
  {
    company: "Quickmech",
    title: "Frontend Engineer · Full-time",
    duration: "Oct 2023 — Sep 2025",
    location: "Remote",
    bullets: [
      "Engineered a multi-step vehicle booking system with VIN decoding and dynamic form validation using React and MaterialUI, reducing user input errors and improving booking completion flow.",
      "Integrated AI-powered vehicle pricing and damage assessment services via real-time APIs, enabling instant, data-driven cost estimates for end users.",
      "Collaborated with backend engineers on VIN lookup and vehicle data API integrations for accurate identification and reliable data exchange across the platform.",
      "Built a scalable, reusable component library with Tailwind CSS and Context API, improving UI consistency and reducing development time across booking modules.",
      "Worked closely with designers via Figma to deliver responsive, pixel-perfect interfaces, ensuring a consistent user experience across all device sizes.",
    ],
    tags: ["React", "Material-UI", "Context API", "REST APIs"],
  },
  {
    company: "Eglobal ICT Hub",
    title: "Frontend Developer · Full-time",
    duration: "Jan 2023 — Sep 2023",
    location: "Nigeria · Remote",
    bullets: [
      "Contributed to multiple client-facing projects including the Utility-Hub Website and Utility-Hub Web App, delivering features across both marketing and product surfaces.",
      "Built the services page UI for the Utility-Hub Website using Next.js, TypeScript, and Context API, translating design specs into a fully responsive, production-ready page.",
      "Developed responsive authentication pages (Login, Signup, Forgot Password) for the Utility-Hub Web App, delivering a smooth, accessible onboarding experience.",
      "Integrated frontend features with backend APIs using Postman documentation for reliable data flow between frontend and backend.",
    ],
    tags: ["Next.js", "TypeScript", "Context API", "Figma"],
  },
  {
    company: "HNG Internship",
    title: "Frontend Developer Intern",
    duration: "Oct 2022 — Nov 2022",
    location: "Nigeria · Remote",
    bullets: [
      "Built responsive web pages and UI components using HTML, CSS, and JavaScript, translating design specs into functional, cross-browser-compatible interfaces.",
      "Implemented responsive layouts using CSS Flexbox and Grid, ensuring consistent user experience across desktop and mobile devices.",
      "Collaborated with cross-functional teams in an agile, sprint-based workflow, participating in code reviews and following Git/GitHub best practices.",
      "Tested and debugged interfaces across browsers and screen sizes, fixing layout and compatibility issues before each submission.",
      "Delivered weekly stage tasks under tight deadlines, using Git and GitHub for version control and feedback from reviewers and mentors.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Git"],
  },
];

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <motion.div variants={itemVariants} className="relative pl-10 sm:pl-14">
      {/* Timeline rail */}
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-slate-200 dark:bg-white/10 last:hidden" />
      <span className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

      <div className="mb-12 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6 sm:p-8">
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {role.duration}
        </span>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-1">
          {role.company}
        </h3>

        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-1">
          {role.title}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-500 mb-5">{role.location}</p>

        <ul className="space-y-2.5 mb-5">
          {role.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 bg-slate-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400"
          >
            <span>02</span>
            <span className="h-px w-8 bg-blue-600/40 dark:bg-blue-400/40" />
            <span className="uppercase text-slate-500 dark:text-slate-400">
              Professional Journey
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.15] mb-16 max-w-3xl"
          >
            3+ years of shipping products people rely on.
          </motion.h2>

          <div className="max-w-3xl">
            {roles.map((role, index) => (
              <RoleCard key={role.company} role={role} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
