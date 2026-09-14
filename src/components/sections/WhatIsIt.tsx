"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WhatIsIt() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"],
  });

  const pathLength = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-[80vh] flex items-center justify-center bg-brand-red text-white py-32 px-6"
    >
      <div className="max-w-5xl w-full text-center flex flex-col items-center">
        <motion.div style={{ opacity, y }} className="flex flex-col items-center">
          <h2 className="text-[10vw] sm:text-5xl md:text-7xl font-black tracking-tighter uppercase relative inline-block mb-12 md:mb-16">
            WHAT IS INQWIKLLY?
            <svg 
              className="absolute -bottom-3 md:-bottom-5 left-0 w-full h-4 md:h-6 text-white overflow-visible" 
              viewBox="0 0 100 10" 
              preserveAspectRatio="none"
            >
              <motion.path 
                style={{ pathLength }}
                d="M 0 5 Q 50 15 100 2" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
            </svg>
          </h2>
          
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight md:leading-tight tracking-tight">
            A new-age news platform built for people who want to know what&apos;s happening — without spending hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
