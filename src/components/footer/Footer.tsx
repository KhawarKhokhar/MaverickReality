import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Explore",
    links: [
      { label: "Buy in DFW", href: "#buy" },
      { label: "Rentals", href: "#rental" },
      { label: "Sell Your Home", href: "#sell" },
      { label: "New Construction", href: "#newconst" },
      { label: "Neighborhoods", href: "#neighborhoods" },
    ],
  },
  {
    title: "Popular Areas",
    links: [
      { label: "Plano", href: "#plano" },
      { label: "Frisco", href: "#frisco" },
      { label: "McKinney", href: "#mckinney" },
      { label: "Prosper", href: "#prosper" },
      { label: "Denton", href: "#denton" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Market Reports", href: "#market-reports" },
      { label: "Mortgage Calculator", href: "#tools/mortgage" },
      { label: "Home Valuation", href: "#valuation" },
      { label: "Relocation Guide", href: "#relocation" },
      { label: "Blog", href: "#blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      {/* Top area */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand / contact */}
          <div className="md:col-span-4">
             <Link href="/" className="flex items-center gap-2">
             
          <img src="/logo.png" alt="Maverick" 
          style={{ height: "80px", width: "200px", objectFit: "contain" }}
          />
            </Link>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Local experts helping buyers, sellers, and investors across North
              Texas. From first homes to forever homes—we guide you every step.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <p>
                <span className="text-slate-400">Call:</span>{" "}
                <a href="tel:+19725551234" className="hover:underline text-white">
                  (469) 577-0265
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href="mailto:info@maverickrealtyz.com"
                  className="hover:underline text-white"
                >
                  info@maverickrealtyz.com
                </a>
              </p>
              <p className="text-slate-400">
                7901 4TH ST N, STE 300, ST. PETERSBURG,<br/> FL 33702 USA
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h3 className="text-white font-semibold tracking-tight">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-slate-300 hover:text-white hover:underline underline-offset-4"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-10 grid gap-4 rounded-2xl bg-white/5 p-5 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h4 className="text-white font-semibold">
              Get weekly North Texas market updates
            </h4>
            <p className="mt-1 text-sm text-slate-300">
              New listings, price trends, and neighborhood insights—no spam.
            </p>
          </div>
          <form className="md:col-span-5 flex gap-2">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()}  Maverick Reality LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white hover:underline">
              Privacy
            </Link>
            <Link href="#/accessibility" className="hover:text-white hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
