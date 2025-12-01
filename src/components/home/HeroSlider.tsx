"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: string;
  headline: string;
  sub: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageUrl: string;
  tag: string;
};

const SLIDES: Slide[] = [
  {
    id: "s1",
    tag: "DFW Houses",
    headline: "Discover Beautiful Homes Across North Texas",
    sub: "Find family-friendly neighborhoods in Plano, Frisco, McKinney, and more.",
    ctaPrimary: { label: "View Houses", href: "/services" },
    ctaSecondary: { label: "Contact Agent", href: "/contact" },
    imageUrl: "https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg",
  },
  {
    id: "s2",
    tag: "Lots & Land",
    headline: "Premium Lots in DFW Growth Corridors",
    sub: "Build-ready land in Prosper, Celina, North Fort Worth, and beyond.",
    ctaPrimary: { label: "Browse Lots", href: "/services" },
    ctaSecondary: { label: "Talk to Us", href: "/contact" },
    imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: "s3",
    tag: "Local Expertise",
    headline: "Your Trusted North Texas Real Estate Partner",
    sub: "We help buyers and sellers navigate the DFW market with confidence.",
    ctaPrimary: { label: "Our Services", href: "/services" },
    ctaSecondary: { label: "About Us", href: "/about" },
    imageUrl: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 30 : -30,
    scale: 0.98,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -30 : 30,
    scale: 0.98,
  }),
};

export default function HeroSlider() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const slide = useMemo(() => SLIDES[index], [index]);

  const paginate = (nextDir: number) => {
    setIndex(([i]) => {
      const next = (i + nextDir + SLIDES.length) % SLIDES.length;
      return [next, nextDir];
    });
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="h-screen relative overflow-hidden bg-slate-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={slide.id}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          />
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 md:py-28">
 
        {/* Tag */}
        <motion.div
          key={slide.id + "tag"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold"
        >
          {/* <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {slide.tag} */}
        </motion.div>

        {/* Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={slide.id + "h"}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-3xl text-3xl font-bold text-center leading-tight tracking-tight md:text-6xl"
          >
            {slide.headline}
          </motion.h1>
        </AnimatePresence>

        {/* Sub */}
        <AnimatePresence mode="wait">
          <motion.p
            key={slide.id + "p"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 max-w-xl text-base text-center text-white/90 md:text-lg"
          >
            {slide.sub}
          </motion.p>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          key={slide.id + "cta"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          <Link
            href={slide.ctaPrimary.href}
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow"
          >
            {slide.ctaPrimary.label}
          </Link>

          {slide.ctaSecondary && (
            <Link
              href={slide.ctaSecondary.href}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              {slide.ctaSecondary.label}
            </Link>
          )}
        </motion.div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="hidden md:grid absolute left-5 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => paginate(1)}
        className="hidden md:grid absolute right-5 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
