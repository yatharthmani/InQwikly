"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function ClosingCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"],
  });

  const pathLength = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section 
      id="waitlist"
      ref={containerRef}
      className="w-full min-h-screen py-32 px-6 bg-brand-red text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-4xl w-full text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase relative inline-block mb-10"
        >
          WELCOME TO INQWIKLLY.
          <svg 
            className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-6 text-white overflow-visible" 
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
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-medium tracking-tight transform -rotate-2 italic text-white/90 mb-20 font-serif"
        >
          Know more. Scroll less.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === "loading" || status === "success"}
                className="w-full px-6 py-4 rounded-full bg-white text-brand-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-brand-black/20 placeholder:text-brand-black/40 disabled:opacity-50 transition-all"
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="absolute right-2 top-2 bottom-2 px-6 bg-brand-black text-white font-bold rounded-full hover:bg-brand-offwhite hover:text-brand-black disabled:opacity-50 transition-colors"
              >
                {status === "loading" ? "..." : "Join"}
              </button>
            </div>
            
            {message && (
              <p className={`text-sm font-bold mt-2 ${status === "error" ? "text-brand-black" : "text-white"}`}>
                {message}
              </p>
            )}
          </form>

          <a 
            href="https://instagram.com/inqwiklly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-12 text-white/80 hover:text-white font-bold tracking-wide uppercase text-sm underline underline-offset-4 transition-colors"
          >
            Follow on Instagram @inqwiklly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
