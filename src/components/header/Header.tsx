"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar (desktop only) */}
      <div className="hidden md:block bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              7901 4TH ST N, STE 300, ST. PETERSBURG, FL 33702 USA
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/contact-us" className="hover:underline">
              Call Now: (469) 577-0265
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={[
          "transition-all",
          scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white",
        ].join(" ")}
      >
        {/* ✅ Force nav height so spacer can match */}
        <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Maverick"
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-md font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/services"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              Our Services
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 hover:bg-slate-50"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-slate-900" />
              <span className="block h-0.5 w-6 bg-slate-900" />
              <span className="block h-0.5 w-6 bg-slate-900" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl p-5">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Maverick"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-2">
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-emerald-600 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-700 shadow-sm"
              >
                Contact Us
              </Link>
              <a
                href="tel:+14695770265"
                className="rounded-xl bg-slate-900 px-4 py-3 text-center font-semibold text-white hover:bg-slate-950"
              >
                Call (469) 577-0265
              </a>
            </div>
          </aside>
        </div>
      )}

      {/* ✅ Accurate spacer:
          - mobile: nav only (h-20)
          - desktop: utility (py-2 ≈ 40px) + nav (h-24) ≈ 160px */}
      <div className="h-20 md:h-40" />
    </header>
  );
}
