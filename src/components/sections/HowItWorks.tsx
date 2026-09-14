"use client";

import { motion } from "framer-motion";
import { Newspaper, Zap, Brain, Timer } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Newspaper, text: "We find the important story." },
  { icon: Zap, text: "We simplify it." },
  { icon: Brain, text: "We give you the context." },
  { icon: Timer, text: "You get it in ~30 seconds." },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen py-32 px-6 bg-brand-offwhite text-brand-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-center mb-20 md:mb-32"
        >
          HOW DOES IT <span className="text-brand-red">WORK?</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-brand-black flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors duration-500 shadow-xl">
                  <Icon className="w-10 h-10 text-brand-offwhite" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  {step.text}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 border-t-2 border-brand-black/10 pt-10 w-full text-center"
        >
          <p className="text-2xl md:text-4xl font-black uppercase tracking-widest text-brand-black/30">
            No unnecessary details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
