import Link from "next/link";

export const metadata = {
  title: "About | Maverick Realty LLC",
  description:
    "Learn about Maverick Realty LLC — our mission, values, and services.",
};

const VALUES = [
  {
    title: "Client-First Guidance",
    desc: "We listen closely, communicate clearly, and protect your best interest at every step.",
    icon: "🤝",
  },
  {
    title: "Market Expertise",
    desc: "We leverage deep local insight, pricing data, and trend analysis to guide smart decisions.",
    icon: "📊",
  },
  {
    title: "Trusted Network",
    desc: "From lenders to inspectors to contractors—our partners help make your experience smooth.",
    icon: "🧩",
  },
  {
    title: "Transparent Process",
    desc: "No pressure. No guesswork. Just clear timelines, expectations, and next steps.",
    icon: "🔍",
  },
];

const STATS = [
  { label: "Transactions Guided", value: "500+" },
  { label: "Client Satisfaction", value: "5★ Average" },
  { label: "Response Time", value: "< 2 hrs" },
  { label: "Years Serving Clients", value: "10+" },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              About Maverick Realty LLC
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-6xl">
              Real Estate Guidance You Can Rely On.
            </h1>

            <p className="mt-4 text-base text-white/90 md:text-lg">
              At Maverick Realty LLC, we help buyers, sellers, and investors move
              with confidence. Our approach is simple: honest advice, sharp market
              strategy, and a smooth experience from start to finish.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + STATS */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h2 className="text-2xl font-bold tracking-tight">
              Our Mission
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We exist to make real estate simple, clear, and rewarding. Whether
              you’re buying your first home, selling for maximum return, or
              investing for long-term growth, we bring the strategy and support
              you need to move forward with certainty.
            </p>

            <p className="mt-3 text-slate-600 leading-relaxed">
              We believe real estate should feel less stressful and more
              empowering. That’s why we prioritize transparency, education, and
              strong negotiation on every deal.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <div className="text-2xl font-bold text-slate-900">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight">
              What Makes Us Different
            </h2>
            <p className="mt-2 text-slate-600">
              We’re not just here to close deals — we’re here to guide you well.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-3 font-semibold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INFO + CONTACT CARD */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          {/* left */}
          <div className="md:col-span-7">
            <h2 className="text-2xl font-bold tracking-tight">
              Company Information
            </h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              We’re proud to serve clients with professional care, fast
              communication, and dependable advice. Reach out anytime — we’re
              happy to help.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">
                  Maverick Realty LLC
                </span>
              </p>
              <p>
                <span className="text-slate-500">Phone:</span>{" "}
                <a
                  href="tel:+14695770265"
                  className="font-semibold text-emerald-700 hover:underline"
                >
                  (469) 577-0265
                </a>
              </p>
              <p>
                <span className="text-slate-500">Email:</span>{" "}
                <a
                  href="mailto:Info@mavericrealty.com"
                  className="font-semibold text-emerald-700 hover:underline"
                >
                  Info@mavericrealty.com
                </a>
              </p>
              <p>
                <span className="text-slate-500">Address:</span>{" "}
                7901 4TH ST N, STE 300, ST. PETERSBURG, FL. 33702 USA
              </p>
            </div>
          </div>

          {/* right contact card */}
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Let’s Talk Real Estate
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Tell us what you’re looking for — buying, selling, or investing —
                and we’ll guide you from there.
              </p>

              <div className="mt-5 grid gap-2">
                <Link
                  href="/contact"
                  className="rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700 transition"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  View Services
                </Link>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                By contacting us, you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-emerald-700 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
