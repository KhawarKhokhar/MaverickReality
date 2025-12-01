import Link from "next/link";

const SERVICES = [
  {
    title: "Residential Houses",
    desc: "Single-family homes across Dallas, Plano, Frisco, McKinney & beyond.",
    href: "/buy",
  },
  {
    title: "Lots & Land",
    desc: "Build-ready lots, acreage, and investment land in growth corridors.",
    href: "/lots",
  },
  {
    title: "New Construction",
    desc: "Partnered builders, floor plans, and lot + build packages.",
    href: "/new-construction",
  },
  {
    title: "Luxury Homes",
    desc: "Exclusive listings, private tours, and concierge negotiation.",
    href: "/luxury",
  },
  {
    title: "Investor Properties",
    desc: "Cash-flow analysis, rental comps, and value-add opportunities.",
    href: "/invest",
  },
  {
    title: "Relocation Support",
    desc: "Virtual tours, school guidance, commute planning, and local insight.",
    href: "/relocation",
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What We Specialize In
          </h2>
          <p className="mt-1 text-slate-600">
            Six ways we help buyers and sellers across DFW.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100 transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-900">
                  Explore
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-3 text-sm font-semibold text-emerald-700 group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
