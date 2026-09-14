"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Landmark, Briefcase, GraduationCap, Flame, Smartphone } from "lucide-react";

const categories = [
  { icon: MapPin, label: "India" },
  { icon: Globe, label: "World" },
  { icon: Landmark, label: "Politics" },
  { icon: Briefcase, label: "Business" },
  { icon: GraduationCap, label: "Campus" },
  { icon: Flame, label: "Trending" },
  { icon: Smartphone, label: "Internet & Culture" },
];

export function Categories() {
  return (
    <section className="w-full min-h-screen py-32 px-6 bg-brand-black text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-center mb-24"
        >
          WHAT WILL YOU <span className="text-brand-red block md:inline">FIND HERE?</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-5xl">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const
                }}
                className="flex flex-col items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-white/5 border border-white/10 hover:bg-brand-red hover:border-brand-red transition-colors group cursor-default"
              >
                <Icon className="w-10 h-10 md:w-16 md:h-16 mb-4 text-white/50 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <span className="text-sm md:text-lg font-bold text-center px-2 group-hover:text-white transition-colors">
                  {category.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 border-t-2 border-white/10 pt-10 w-full text-center"
        >
          <p className="text-2xl md:text-4xl font-black uppercase tracking-widest text-white/30">
            Only what matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
