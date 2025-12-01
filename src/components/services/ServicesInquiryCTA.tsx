"use client";

import { FormEvent, useState } from "react";
import PolicyConsent from "../forms/PolicyConsent";
import { usePolicyGate } from "../forms/usePlicyGate";

export default function ServicesInquiryCTA() {
  const [loading, setLoading] = useState(false);

  const {
    acceptedPolicy,
    setAcceptedPolicy,
    policyError,
    validatePolicy,
  } = usePolicyGate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validatePolicy()) return;

    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData.entries());

      // TODO: send payload to your API
      // await fetch("/api/services-inquiry", { method: "POST", body: JSON.stringify(payload) });

      alert("Inquiry submitted!");
      e.currentTarget.reset();
      setAcceptedPolicy(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 rounded-3xl bg-white/5 p-6 md:grid-cols-12 md:items-center md:p-8">
          {/* left text */}
          <div className="md:col-span-7 text-white">
            <h3 className="text-2xl font-bold">
              Need help with a house or a lot in DFW?
            </h3>
            <p className="mt-2 text-white/80">
              Tell us what you’re looking for and we’ll send options within 24 hours.
            </p>

            <ul className="mt-5 grid gap-2 text-sm text-white/85">
              <li>• Houses, lots, new builds, and investment properties</li>
              <li>• Local insight for Plano, Frisco, McKinney, Prosper, Celina</li>
              <li>• Clear pricing + zero-pressure guidance</li>
            </ul>
          </div>

          {/* right form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-5 grid gap-3 rounded-2xl bg-white p-10"
          >
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              name="phone"
              required
              placeholder="Phone"
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select
              name="interest"
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">I’m interested in…</option>
              <option>Buying a House</option>
              <option>Selling a House</option>
              <option>Buying a Lot / Land</option>
              <option>New Construction</option>
              <option>Investment Property</option>
            </select>

            {/* Policy gate */}
            <PolicyConsent
              checked={acceptedPolicy}
              onChange={setAcceptedPolicy}
              error={policyError}
            />

            <button
              type="submit"
              disabled={loading || !acceptedPolicy}
              className={[
                "rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                acceptedPolicy
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-slate-200 text-slate-500 cursor-not-allowed",
              ].join(" ")}
            >
              {loading ? "Submitting..." : "Request Listings"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
