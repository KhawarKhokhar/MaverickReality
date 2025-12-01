"use client";

import Link from "next/link";

type PolicyConsentProps = {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string | null;
  className?: string;
};

export default function PolicyConsent({
  checked,
  onChange,
  error,
  className = "",
}: PolicyConsentProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          required
          aria-invalid={!!error}
          aria-describedby={error ? "policy-error" : undefined}
        />
        <span>
          I agree to the{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-emerald-700 hover:underline underline-offset-4"
            target="_blank"
          >
            Privacy Policy
          </Link>{" "}
          and consent to be contacted about my inquiry.
        </span>
      </label>

      {error && (
        <p id="policy-error" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
