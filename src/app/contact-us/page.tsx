"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import PolicyConsent from "@/components/forms/PolicyConsent";
import { usePolicyGate } from "@/components/forms/usePlicyGate";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const { acceptedPolicy, setAcceptedPolicy, policyError, validatePolicy } =
    usePolicyGate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Gate all submits on policy acceptance
    if (!validatePolicy()) return;

    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData.entries());

      // TODO: send to your API
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      alert("Thanks! Your message has been sent.");
      e.currentTarget.reset();
      setAcceptedPolicy(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Contact Maverick Realty LLC
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-6xl">
              Let’s Talk Real Estate.
            </h1>

            <p className="mt-4 text-base text-white/90 md:text-lg">
              Buying, selling, investing, or looking for land? Send a message
              and we’ll get back quickly.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO STRIP */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            title="Call Us"
            value="(469) 577-0265"
            href="tel:+14695770265"
            icon="📞"
            note="Mon–Sat • 9am–7pm"
          />
          <InfoCard
            title="Email"
            value="Info@mavericrealty.com"
            href="mailto:Info@mavericrealty.com"
            icon="✉️"
            note="We reply within 2 hours"
          />
          <InfoCard
            title="Office"
            value="7901 4TH ST N, STE 300, ST. PETERSBURG, FL 33702"
            icon="📍"
            note="Appointments recommended"
          />
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* LEFT: FORM */}
          <div className="md:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight">
                Send Us a Message
              </h2>
              <p className="mt-1 text-slate-600">
                Tell us what you need — houses, lots, new builds, or investment
                property.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </Field>

                  <Field label="Phone">
                    <input
                      name="phone"
                      required
                      placeholder="(xxx) xxx-xxxx"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </Field>
                </div>

                <Field label="Email">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </Field>

                <Field label="I’m interested in">
                  <select
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Buying a House</option>
                    <option>Selling a House</option>
                    <option>Buying a Lot / Land</option>
                    <option>New Construction</option>
                    <option>Investment Property</option>
                    <option>Relocation Help</option>
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us your goals, timeline, and preferred areas..."
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </Field>

                {/* Privacy Policy gate */}
                <label className="text-xs text-slate-500 flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5"
                    checked={acceptedPolicy}
                    onChange={(e) => setAcceptedPolicy(e.target.checked)}
                    required
                  />

                  <span>
                    By submitting, you agree to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-emerald-700 hover:underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                    . By clicking "Submit" you agree to receive emails, general
                    communications, and marketing text messages and phone calls
                    from Maverick Realty LLC. You also agree to the Terms of
                    Use and Privacy Policy linked below. Reply STOP to stop or
                    HELP for help. Message & data rates may apply. Message
                    frequency varies.
                  </span>
                </label>

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
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: MAP + HOURS */}
          <div className="md:col-span-6 grid gap-4">
            {/* Map card */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between p-4">
                <h3 className="font-semibold">Office Location</h3>
                <a
                  className="text-sm font-semibold text-emerald-700 hover:underline"
                  href="https://maps.google.com/?q=7901+4TH+ST+N+STE+300+ST.+PETERSBURG+FL+33702"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps →
                </a>
              </div>

              {/* Replace iframe src with your Google Maps embed if you want */}
              <div className="aspect-video w-full bg-slate-100">
                <iframe
                  title="Maverick Realty Office"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=7901%204TH%20ST%20N,%20STE%20300,%20ST.%20PETERSBURG,%20FL%2033702&output=embed"
                />
              </div>

              <div className="p-4 text-sm text-slate-700">
                7901 4TH ST N, STE 300 <br />
                ST. PETERSBURG, FL 33702 USA
              </div>
            </div>

            {/* Hours card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">Hours</h3>
              <div className="mt-3 grid grid-cols-2 gap-y-2 text-sm text-slate-700">
                <div className="font-medium">Mon–Fri</div>
                <div>9:00 AM – 7:00 PM</div>
                <div className="font-medium">Saturday</div>
                <div>10:00 AM – 5:00 PM</div>
                <div className="font-medium">Sunday</div>
                <div>By Appointment</div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                After-hours consultations available upon request.
              </p>
            </div>

            {/* Quick CTA */}
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-semibold">Prefer a quick call?</h3>
              <p className="mt-1 text-sm text-white/80">
                We can walk through your goals in 10 minutes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="tel:+14695770265"
                  className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
                >
                  Call Now
                </a>
                <Link
                  href="/services"
                  className="rounded-full border border-white/15 bg-white/0 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ----------------- Small UI helpers ----------------- */

function InfoCard({
  title,
  value,
  href,
  icon,
  note,
}: {
  title: string;
  value: string;
  href?: string;
  icon: string;
  note?: string;
}) {
  const content = href ? (
    <a href={href} className="font-semibold text-slate-900 hover:underline">
      {value}
    </a>
  ) : (
    <div className="font-semibold text-slate-900">{value}</div>
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="text-2xl">{icon}</div>
        <div className="min-w-0">
          <div className="text-sm font-medium text-slate-600">{title}</div>
          <div className="mt-1 wrap-break-word">{content}</div>
          {note && <div className="mt-1 text-xs text-slate-500">{note}</div>}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1 text-sm font-medium text-slate-800">
      <span>{label}</span>
      {children}
    </label>
  );
}
