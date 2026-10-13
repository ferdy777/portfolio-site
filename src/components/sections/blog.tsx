"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const drafts = [
  {
    category: "Architecture",
    title: "Structuring a shared component library across client projects",
    snippet:
      "Notes on building reusable, brand-agnostic UI components that hold up across multiple production sites.",
  },
  {
    category: "Performance",
    title: "Getting booking flows to feel instant with real-time APIs",
    snippet:
      "What it takes to keep multi-step forms responsive when every step depends on a live API call.",
  },
  {
    category: "Engineering",
    title: "TypeScript patterns for safer API integrations",
    snippet:
      "Practical typing approaches for REST APIs that keep the frontend honest about what the backend actually returns.",
  },
];

function DraftCard({ draft }: { draft: (typeof drafts)[number] }) {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden"
    >
      <div className="h-32 flex items-center justify-center bg-slate-100 dark:bg-white/[0.03] border-b border-slate-200 dark:border-white/10">
        <PenLine className="w-6 h-6 text-slate-400 dark:text-slate-600" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
          {draft.category}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2 leading-snug">
          {draft.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {draft.snippet}
        </p>
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
          Draft · Coming soon
        </span>
      </div>
    </motion.div>
  );
}

export function Blog() {
  return (
    <section id="blog" className="py-14 sm:py-20">
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
            <span>04</span>
            <span className="h-px w-8 bg-blue-600/40 dark:bg-blue-400/40" />
            <span className="uppercase text-slate-500 dark:text-slate-400">Blog</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 max-w-2xl"
          >
            Writing about the craft, when I&apos;m not shipping it.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-14"
          >
            Nothing published yet — here&apos;s what&apos;s in the works.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {drafts.map((draft) => (
              <DraftCard key={draft.title} draft={draft} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
