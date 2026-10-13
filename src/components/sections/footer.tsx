"use client";

import { motion } from "framer-motion";
import { Github, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ferdy777", label: "GitHub" },
    {
      icon: MessageCircle,
      href: "https://wa.me/2348153041080",
      label: "WhatsApp",
    },
    { icon: Mail, href: "mailto:ferdstep7@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-300 dark:border-slate-800 mb-10 items-start text-center md:text-left">
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent mb-2">
                Ferdy
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xs">
                Frontend Engineer | React, Next.js & TypeScript
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                {[
                  { label: "About", href: "#about" },
                  { label: "Experience", href: "#experience" },
                  { label: "Projects", href: "#projects" },
                  { label: "Skills", href: "#skills" },
                  { label: "Blog", href: "#blog" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(link.href.slice(1))
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Connect</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-center text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {currentYear} Stephen Ferdinard. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}