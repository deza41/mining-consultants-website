"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy address");

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {}
    setLabel(ok ? "Copied" : "Press Ctrl+C to copy");
    setTimeout(() => setLabel("Copy address"), 2200);
  }

  return (
    <button className="btn ghost" type="button" onClick={copy}>
      {label}
    </button>
  );
}
