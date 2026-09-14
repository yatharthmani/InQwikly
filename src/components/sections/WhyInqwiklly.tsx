"use client";

import { motion } from "framer-motion";

export function WhyInqwiklly() {
  return (
    <section className="w-full min-h-[80vh] py-32 px-6 bg-brand-offwhite text-brand-black flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8"
        >
          WHY <span className="text-brand-red">INQWIKLLY?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold max-w-3xl leading-tight text-brand-black/80"
        >
          Because staying informed shouldn&apos;t feel like homework.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="mt-20 relative inline-block"
        >
          <div className="relative z-10 px-8 py-6 md:px-12 md:py-8 text-2xl md:text-5xl font-black uppercase tracking-tight">
            30 seconds. One story. You&apos;re informed.
          </div>
          
          {/* Hand-drawn style circle highlight */}
          <svg 
            className="absolute inset-0 w-full h-full text-brand-red overflow-visible pointer-events-none -z-10" 
            viewBox="0 0 400 100" 
            preserveAspectRatio="none"
          >
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              d="M 200,5 C 320,5 390,20 390,50 C 390,80 320,95 200,95 C 80,95 10,80 10,50 C 10,20 80,5 200,5 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              style={{
                transformOrigin: "center",
                transform: "scale(1.05, 1.3) rotate(-2deg)"
              }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
