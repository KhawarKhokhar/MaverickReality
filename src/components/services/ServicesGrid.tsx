import Link from "next/link";

const SERVICES = [
  {
    title: "Residential Houses",
    desc: "Single-family homes in Plano, Frisco, McKinney, Allen, and Dallas suburbs.",
    href: "/contact",
    icon: "🏡",
  },
  {
    title: "Lots & Land",
    desc: "Build-ready lots and acreage in Prosper, Celina, Aubrey, and North Fort Worth.",
    href: "/contact",
    icon: "🌾",
  },
  {
    title: "Luxury Homes",
    desc: "Exclusive listings, private showings, and concierge-level support.",
    href: "/contact",
    icon: "✨",
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          What We Offer
        </h2>
        <p className="mt-1 text-slate-600">
          Six ways we serve buyers, sellers, builders, and investors in DFW.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>

            <Link
              href={s.href}
              className="mt-4 inline-flex text-sm font-semibold text-emerald-700 group-hover:underline"
            >
              Get help →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
