const STEPS = [
  {
    title: "Discovery Call",
    desc: "We learn your goals: city, budget, timeline, and must-haves.",
  },
  {
    title: "Curated Shortlist",
    desc: "We filter DFW listings or lots to match your exact needs.",
  },
  {
    title: "Tours & Due Diligence",
    desc: "In-person or virtual tours, comps, zoning & inspection guidance.",
  },
  {
    title: "Offer to Closing",
    desc: "Negotiation + contract support through keys (or land purchase).",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Our Simple 4-Step Process
          </h2>
          <p className="mt-1 text-slate-600">
            Fast, transparent, and designed for North Texas buyers & sellers.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
