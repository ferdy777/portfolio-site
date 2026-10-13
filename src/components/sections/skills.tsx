"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const skillCategories = [
  {
    name: "Core",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "Architecture & State",
    skills: ["Context API", "Zustand", "Redux", "REST APIs", "Swagger"],
  },
  {
    name: "Styling & UI",
    skills: ["Tailwind CSS", "SASS", "Bootstrap", "Responsive Design"],
  },
  {
    name: "Testing & Tools",
    skills: ["Cypress", "Jest", "E2E Testing", "Git", "Figma", "Postman"],
  },
];

function SkillRow({
  index,
  category,
}: {
  index: number;
  category: (typeof skillCategories)[number];
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-1 md:grid-cols-[minmax(0,220px)_1fr] gap-3 md:gap-10 py-7 border-b border-slate-200 dark:border-white/10 last:border-b-0"
    >
      <div className="flex items-baseline gap-3 md:block">
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-slate-900 dark:text-white">
          {category.name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-5 py-2.5 text-sm font-medium rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills({ standalone = true }: { standalone?: boolean }) {
  return (
    <section
      id="skills"
      className={standalone ? "py-14 sm:py-20 bg-slate-50 dark:bg-transparent" : "py-14 sm:py-20"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {standalone && (
            <>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400"
              >
                <span>04</span>
                <span className="h-px w-8 bg-blue-600/40 dark:bg-blue-400/40" />
                <span className="uppercase text-slate-500 dark:text-slate-400">Skills</span>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  Technical{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Expertise
                  </span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </motion.div>
            </>
          )}

          <div>
            {skillCategories.map((category, index) => (
              <SkillRow key={category.name} index={index} category={category} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
