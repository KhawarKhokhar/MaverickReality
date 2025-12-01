import Link from "next/link";

const AREAS = [
  {
    name: "Plano",
    href: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Frisco",
    href: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "McKinney",
    href: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Prosper / Celina",
    href: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function DFWAreasStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Areas We Serve
          </h2>
          <p className="mt-1 text-slate-600">
            DFW neighborhoods and growth corridors we specialize in.
          </p>
        </div>
        <Link href="/contact" className="text-sm font-semibold text-emerald-700 hover:underline">
          Ask about your area →
        </Link>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-4">
        {AREAS.map((a) => (
          <Link
            key={a.name}
            href={a.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"
          >
            <div
              className="aspect-4/5 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
              style={{ backgroundImage: `url(${a.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/0" />
            <div className="absolute bottom-0 p-4">
              <div className="text-lg font-semibold text-white">{a.name}</div>
              <div className="text-xs text-white/80">Explore listings & lots</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
