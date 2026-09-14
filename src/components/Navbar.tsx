"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar after scrolling past roughly half the hero section
    if (latest > (typeof window !== 'undefined' ? window.innerHeight * 0.5 : 500)) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }} // custom spring-like ease
      className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-brand-offwhite/90 backdrop-blur-md border-b border-brand-black/10"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-sm tracking-tighter">
          IN
        </div>
        <span className="font-black text-xl tracking-tight uppercase group-hover:text-brand-red transition-colors">
          Qwiklly
        </span>
      </Link>

      <button
        onClick={() => {
          document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="px-6 py-2.5 bg-brand-black text-white font-bold text-sm rounded-full hover:bg-brand-red transition-all transform active:scale-95"
      >
        Join waitlist
      </button>
    </motion.nav>
  );
}
