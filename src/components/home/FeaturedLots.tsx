import Link from "next/link";

type Lot = {
  id: string;
  title: string;
  area: string;
  acres: string;
  price: string;
  utilities: string;
  imageUrl: string;
};

const LOTS: Lot[] = [
  {
    id: "l1",
    title: "Build-Ready Corner Lot",
    area: "Celina, TX",
    acres: "0.38 acres",
    price: "$210,000",
    utilities: "Water/Electric",
    imageUrl:
      "https://images.unsplash.com/photo-1627520568003-4676e77e039a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "l2",
    title: "Acreage with Views",
    area: "North Fort Worth",
    acres: "2.1 acres",
    price: "$470,000",
    utilities: "Well/Septic ready",
    imageUrl:
      "https://images.unsplash.com/photo-1557944609-609262fd575d?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "l3",
    title: "Gated Community Lot",
    area: "Prosper, TX",
    acres: "0.52 acres",
    price: "$325,000",
    utilities: "City utilities",
    imageUrl:
      "https://images.unsplash.com/photo-1755569645703-9b84c3ee1280?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FeaturedLots() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Featured Lots & Land
            </h2>
            <p className="mt-1 text-slate-600">
              Prime land across growth corridors in DFW.
            </p>
          </div>
          <Link
            href="/lots"
            className="text-sm font-semibold text-emerald-700 hover:underline"
          >
            View all lots →
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {LOTS.map((l) => (
            <article
              key={l.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-4/3 bg-cover bg-center"
                   style={{ backgroundImage: `url(${l.imageUrl})` }} />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{l.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{l.area}</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-slate-100 px-2 py-2">
                    <div className="text-slate-500">Size</div>
                    <div className="font-semibold text-slate-900">{l.acres}</div>
                  </div>
                  <div className="rounded-xl bg-slate-100 px-2 py-2">
                    <div className="text-slate-500">Utilities</div>
                    <div className="font-semibold text-slate-900">{l.utilities}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-slate-900">{l.price}</div>
                  <Link
                    href={`/lot/${l.id}`}
                    className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-950"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
