"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-brand-offwhite text-brand-black overflow-hidden pt-20">
      {/* Glitchy Text Fragments (simulated noise converging) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        {mounted && [...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (Math.random() - 0.5) * window.innerWidth,
              y: (Math.random() - 0.5) * window.innerHeight,
              opacity: 0,
              filter: "blur(10px)",
              scale: Math.random() * 3 + 0.5,
              rotate: (Math.random() - 0.5) * 90,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: [0, 0.4, 0],
              filter: "blur(0px)",
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1] as const,
              delay: Math.random() * 0.5,
            }}
            className="absolute text-brand-black/10 font-black text-6xl md:text-9xl tracking-tighter"
          >
            {["N", "E", "W", "S", ".", "I", "N", "Q"][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-black text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] uppercase flex flex-col items-center w-full"
        >
          <span>NEWS.</span>
          <span className="text-brand-red mt-1 md:mt-2">WITHOUT THE NOISE.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12 flex flex-col items-center w-full"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight relative inline-block">
            Meet INQWIKLLY.
            {/* Hand-drawn style underline */}
            <motion.svg 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.8, ease: "easeInOut" }}
              className="absolute -bottom-3 left-0 w-full h-4 text-brand-red overflow-visible" 
              viewBox="0 0 100 10" 
              preserveAspectRatio="none"
            >
              <path 
                d="M 0 5 Q 50 12 100 2" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>

          <p className="mt-8 text-xl md:text-2xl font-bold max-w-md text-brand-black">
            Your daily news, in 30 seconds.
          </p>

          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 px-10 py-5 bg-brand-black text-white font-black text-lg md:text-xl uppercase tracking-wider rounded-full hover:bg-brand-red transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            Join the waitlist
          </button>

          <p className="mt-8 text-xs md:text-sm text-brand-black/60 font-bold max-w-sm uppercase tracking-widest leading-relaxed">
            No unnecessary details.<br/>No endless videos.<br/>Just news that gets to the point.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
