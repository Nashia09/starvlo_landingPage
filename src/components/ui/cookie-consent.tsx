"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie, setCookie } from "@/lib/cookies";

type ConsentPrefs = {
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_NAME = "lc_consent";
const CACHE_COOKIE = "lc_cache";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const existing = getCookie(COOKIE_NAME);
    if (!existing) setOpen(true);
  }, []);

  const save = (p: ConsentPrefs) => {
    const payload = JSON.stringify({ v: 1, ...p });
    setCookie(COOKIE_NAME, payload, 180);
    const cacheVal = p.analytics || p.marketing ? "yes" : "no";
    setCookie(CACHE_COOKIE, cacheVal, 180);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-xl rounded-lg border border-white/20 bg-black/80 backdrop-blur-md">
        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white">We use cookies</h2>
              <p className="mt-1 text-sm text-white">
                We use essential cookies and optional analytics/marketing cookies. See our <Link href="/privacy" className="underline text-white">Privacy Policy</Link>.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => save({ analytics: false, marketing: false })}
                className="rounded-md border border-white/40 bg-transparent text-white px-4 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Decline
              </button>
              <button
                onClick={() => save({ analytics: true, marketing: true })}
                className="rounded-md bg-[var(--color-primary)] text-white px-4 py-2 text-sm font-semibold hover:bg-[var(--color-primary-light)]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
