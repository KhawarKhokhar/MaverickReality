"use client";

import { FormEvent, useState } from "react";
import PolicyConsent from "./PolicyConsent";
import { usePolicyGate } from "./usePlicyGate";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    acceptedPolicy,
    setAcceptedPolicy,
    policyError,
    validatePolicy,
  } = usePolicyGate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Gate submit
    if (!validatePolicy()) return;

    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData.entries());

      // call your API route here
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) })

      alert("Form submitted!");
      e.currentTarget.reset();
      setAcceptedPolicy(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <label className="text-sm font-medium text-slate-800">Full Name</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-800">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-800">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Tell us what you’re looking for in DFW..."
        />
      </div>

      {/* Policy gate */}
      <PolicyConsent
        checked={acceptedPolicy}
        onChange={(v) => setAcceptedPolicy(v)}
        error={policyError}
      />

      <button
        type="submit"
        disabled={loading || !acceptedPolicy}
        className={[
          "rounded-xl px-4 py-3 text-sm font-semibold transition",
          acceptedPolicy
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-slate-200 text-slate-500 cursor-not-allowed",
        ].join(" ")}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
