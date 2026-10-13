"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CaseStudy {
  company: string;
  title: string;
  description: string;
  outcome: string;
  link: string;
  tags: string[];
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const caseStudies: CaseStudy[] = [
  {
    company: "Eglobal ICT Hub",
    title: "IT Consulting Platform Website",
    description:
      "Public-facing website for an IT consulting and solution provider helping businesses through digital transformation. Built and maintained frontend pages with a clean, accessible UI aligned to the company's branding.",
    outcome: "Public-facing site · brand-aligned UI across every page",
    link: "https://eglobalicthub.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "QuickMech",
    title: "Vehicle Booking & AI Pricing Platform",
    description:
      "Marketing website and multi-step booking system for an automotive services platform connecting vehicle owners with towing and repair services, with AI-powered vehicle pricing, damage assessment, and VIN/model lookup via real-time APIs.",
    outcome: "AI-powered pricing · VIN lookup · multi-step booking flow",
    link: "https://quickmechs.com/",
    tags: ["React", "JavaScript", "Material-UI", "Context API"],
  },
  {
    company: "Utility Hub",
    title: "Nationwide Utility Bill Payment Platform",
    description:
      "Frontend pages — including the services and landing sections — for a bill payment platform serving utility customers across Nigeria, built for a smooth, responsive cross-device payment experience.",
    outcome: "Responsive, cross-device bill payment experience",
    link: "https://utilityhub.ng/",
    tags: ["Next.js", "TypeScript", "Context API", "Tailwind CSS"],
  },
  {
    company: "Gmedics",
    title: "Pharmaceutical Trade Network Website",
    description:
      "Frontend pages — Home, About Us, Services, and Contact — for a pharmaceutical trading company connecting drug manufacturers with healthcare providers, distributors, and pharmacies across Nigeria.",
    outcome: "Connects manufacturers, distributors & pharmacies nationwide",
    link: "https://gmedics.com.ng/",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden"
    >
      {/* Visual panel — live screenshot of the actual site */}
      <div className="relative flex flex-col justify-end p-8 min-h-[220px] overflow-hidden bg-slate-900">
        <img
          src={`https://api.microlink.io/?url=${encodeURIComponent(study.link)}&screenshot=true&meta=false&embed=screenshot.url`}
          alt={`${study.company} website preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="relative text-white/90 text-sm font-semibold tracking-widest uppercase">
          {study.company}
        </span>
        <span className="relative text-white/70 text-xs mt-1">
          {study.outcome}
        </span>
      </div>

      {/* Content */}
      <div className="p-8 sm:p-10 flex flex-col">
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
          {study.company}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {study.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {study.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
        >
          Visit Site
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400"
          >
            <span>03</span>
            <span className="h-px w-8 bg-blue-600/40 dark:bg-blue-400/40" />
            <span className="uppercase text-slate-500 dark:text-slate-400">Selected Work</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16 max-w-2xl"
          >
            Products built and shipped to production.
          </motion.h2>

          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.company} study={study} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
