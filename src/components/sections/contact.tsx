"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Contact() {
  const contactMethods = [
    { icon: Mail, title: "Email", value: "ferdstep7@gmail.com", href: "mailto:ferdstep7@gmail.com" },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+234 815 304 1080",
      href: "https://wa.me/2348153041080",
    },
    { icon: Github, title: "GitHub", value: "github.com/ferdy777", href: "https://github.com/ferdy777" },
  ];

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400"
          >
            <span>05</span>
            <span className="h-px w-8 bg-blue-600/40 dark:bg-blue-400/40" />
            <span className="uppercase text-slate-500 dark:text-slate-400">Contact</span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                Connect
              </span>
            </h2>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for new opportunities
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto">
                I am always interested in hearing about new projects and opportunities. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="flex items-center justify-between gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-[1.02] transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-linear-to-br from-blue-500 to-cyan-400 text-white group-hover:rotate-6 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-slate-600 dark:text-slate-400">{method.title}</div>
                        <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">
                          {method.value}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {["Let's Talk", "Open to Work", "Remote Friendly"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-1.5 text-xs font-semibold rounded-full border border-slate-300 dark:border-white/15 text-slate-500 dark:text-slate-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}