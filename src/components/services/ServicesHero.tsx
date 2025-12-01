"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Services • DFW & North Texas
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-6xl">
            Houses, Lots & Local Expertise  
            Across Dallas–Fort Worth.
          </h1>

          <p className="mt-4 text-base text-white/90 md:text-lg">
            Whether you’re buying a home, selling property, or securing land for a
            future build — we guide North Texas clients with clarity and confidence.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow"
            >
              Talk to an Agent
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Why Choose Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
