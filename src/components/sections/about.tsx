"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-20 overflow-hidden bg-white dark:bg-transparent"
    >
      {/* Faint portrait watermark, right side — echoes the hero photo without competing with it */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-1/2 opacity-[0.05] dark:opacity-[0.08]">
        <Image
          src="/images/profile.jpeg"
          alt=""
          fill
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#070a12] via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400"
          >
            <span>01</span>
            <span className="h-px w-8 bg-blue-600/40 dark:bg-blue-400/40" />
            <span className="uppercase text-slate-500 dark:text-slate-400">About</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.15] mb-8"
          >
            Frontend systems built to scale
            <br className="hidden sm:block" /> — and to ship fast.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
          >
            Frontend Engineer with 3+ years of experience building production web applications with JavaScript, React, TypeScript, and Next.js across SaaS, automotive, and fintech products. Skilled at translating designs into responsive, reusable component libraries, integrating REST APIs, and delivering client-facing platforms end-to-end. Strong focus on clean, maintainable code, performance, and accessibility, with hands-on experience in state management, authentication, and role-based access control. Collaborative and detail-oriented professional who works effectively with designers, product teams, and backend engineers, and is committed to continuous learning and delivering a great user experience.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 mt-8">
            {["React & Next.js", "TypeScript", "Design Systems", "REST API Integration"].map(
              (focus) => (
                <span
                  key={focus}
                  className="px-4 py-1.5 text-sm font-medium rounded-full border border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300"
                >
                  {focus}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
