import Link from "next/link";

export default function CTAContactBanner() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-14">
        <div className="grid gap-6 rounded-3xl bg-white/5 p-6 md:grid-cols-12 md:items-center md:p-8">
          <div className="md:col-span-8">
            <h3 className="text-2xl font-bold text-white">
              Ready to buy a home or secure land in DFW?
            </h3>
            <p className="mt-2 text-white/80">
              Get a curated shortlist in 24 hours—matched to your budget, commute,
              and neighborhood goals.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-2">
            <Link
              href="/contact"
              className="rounded-xl bg-emerald-500 px-4 py-3 text-center font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Book a Free Consult
            </Link>
            <Link
              href="/valuation"
              className="rounded-xl border border-white/15 bg-white/0 px-4 py-3 text-center font-semibold text-white hover:bg-white/10 transition"
            >
              Get Home Value
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
