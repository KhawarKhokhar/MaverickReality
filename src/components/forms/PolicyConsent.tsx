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
          aria-invalid={!!error}
          aria-describedby={error ? "policy-error" : undefined}
        />
         <span>
    I agree to receive communications by text message regarding offers and
    transactions from Maverick Realty LLC.
    You may opt out by replying STOP or ask for more information by replying
    HELP. Message frequency varies. Message and data rates may apply.
    You may review our Privacy Policy{" "}
    <a
      href="https://www.maverickrealtyz.com/privacy-policy"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-600 hover:text-blue-800"
    >
      https://www.maverickrealtyz.com/privacy-policy
    </a>{" "}
    to learn how your data is used.
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
