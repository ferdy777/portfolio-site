"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-20 overflow-hidden"
    >
      {/* Layered background: grid + gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-slate-950/60 dark:to-slate-950" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300 dark:bg-cyan-600 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, -100, 100, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.span
                className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-1 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋 Welcome to my portfolio
              </motion.span>

              <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I am{" "}
                <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Stephen Ferdinard
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium"
                variants={itemVariants}
              >
                Frontend Engineer
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                I build scalable, production-ready web applications using
                JavaScript, React, Next.js, and TypeScript — across SaaS,
                automotive, and fintech products. Focused on clean
                architecture, reusable components, and translating designs
                into fast, responsive interfaces.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/40 transition-all w-fit"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Photo */}
          <motion.div
            className="relative flex justify-center mx-auto mt-8 lg:mt-0"
            style={{ maxWidth: "22rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Glow frame sitting behind the photo */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[2rem] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-400 blur-xl opacity-30 dark:opacity-40" />

            <motion.div
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white dark:ring-slate-800 z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/profile.jpeg"
                alt="Stephen Ehimen Ferdinard"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                className="object-cover"
                priority
              />
              {/* Subtle bottom gradient so the image reads intentional, not a raw stock cutout */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}