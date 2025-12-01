import Link from "next/link";

type House = {
  id: string;
  title: string;
  city: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  imageUrl: string;
  tag?: string;
};

const HOUSES: House[] = [
  {
    id: "h1",
    title: "Modern Family Home",
    city: "Frisco, TX",
    price: "$685,000",
    beds: 4,
    baths: 3,
    sqft: "2,780",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    tag: "Open House",
  },
  {
    id: "h2",
    title: "Golf Course View",
    city: "Plano, TX",
    price: "$720,000",
    beds: 4,
    baths: 4,
    sqft: "3,120",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1742418287943-bd52777876c9?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "h3",
    title: "New Construction",
    city: "Prosper, TX",
    price: "$899,000",
    beds: 5,
    baths: 4,
    sqft: "3,650",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
    tag: "New Build",
  },
];

export default function FeaturedHouses() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Featured Houses in DFW
          </h2>
          <p className="mt-1 text-slate-600">
            Hand-picked homes in top North Texas neighborhoods.
          </p>
        </div>
        <Link
          href="/buy"
          className="text-sm font-semibold text-emerald-700 hover:underline"
        >
          View all houses →
        </Link>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {HOUSES.map((h) => (
          <article
            key={h.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              {/* tag */}
              {h.tag && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900">
                  {h.tag}
                </span>
              )}
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url(${h.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-black/0" />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{h.title}</h3>
                <div className="text-sm font-bold text-slate-900">{h.price}</div>
              </div>
              <p className="mt-1 text-sm text-slate-600">{h.city}</p>

              <div className="mt-3 flex gap-3 text-xs text-slate-700">
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  {h.beds} Beds
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  {h.baths} Baths
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  {h.sqft} sqft
                </span>
              </div>

              <Link
                href={`/listing/${h.id}`}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-950 transition"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
