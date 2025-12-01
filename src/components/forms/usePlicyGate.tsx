"use client";

import { useState } from "react";

export function usePolicyGate() {
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [policyError, setPolicyError] = useState<string | null>(null);

  const validatePolicy = () => {
    if (!acceptedPolicy) {
      setPolicyError("Please accept the Privacy Policy before submitting.");
      return false;
    }
    setPolicyError(null);
    return true;
  };

  return {
    acceptedPolicy,
    setAcceptedPolicy,
    policyError,
    setPolicyError,
    validatePolicy,
  };
}
