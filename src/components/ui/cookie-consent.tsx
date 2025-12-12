"use client";

import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/lib/cookies";

type ConsentPrefs = {
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_NAME = "lc_consent";
const CACHE_COOKIE = "lc_cache";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPrefs>({ analytics: true, marketing: true });

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
      <div className="mx-auto max-w-4xl rounded-2xl shadow-2xl border border-white/40 backdrop-blur-md bg-gradient-to-br from-[#7CBECE]/95 via-[#A1D1D8]/95 to-white/95">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">We use cookies</h2>
              <p className="mt-2 text-gray-700">
                We use essential cookies and, with your permission, analytics and marketing cookies to improve your experience.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-white/70 px-4 py-3">
                  <span className="text-gray-900 font-medium">Essential</span>
                  <span className="text-xs text-gray-500">Required</span>
                </label>
                <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-white/70 px-4 py-3">
                  <span className="text-gray-900 font-medium">Analytics</span>
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-[#5A9BA5]"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((prev) => ({ ...prev, analytics: e.target.checked }))}
                  />
                </label>
                <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-white/70 px-4 py-3">
                  <span className="text-gray-900 font-medium">Marketing</span>
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-[#5A9BA5]"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs((prev) => ({ ...prev, marketing: e.target.checked }))}
                  />
                </label>
              </div>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-col gap-3">
                <button
                  onClick={() => save({ analytics: true, marketing: true })}
                  className="w-full rounded-xl bg-gradient-to-r from-[#5A9BA5] to-[#7CBECE] text-white px-6 py-3 text-sm font-semibold shadow-lg hover:brightness-105"
                >
                  Accept all
                </button>
                <button
                  onClick={() => save(prefs)}
                  className="w-full rounded-xl bg-white text-gray-900 px-6 py-3 text-sm font-semibold border border-gray-300 hover:bg-gray-50"
                >
                  Save preferences
                </button>
                <button
                  onClick={() => save({ analytics: false, marketing: false })}
                  className="w-full rounded-xl bg-transparent text-gray-700 px-6 py-3 text-sm font-semibold underline"
                >
                  Reject non‑essential
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-600 text-center">
                Read our <a href="/privacy" className="underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

