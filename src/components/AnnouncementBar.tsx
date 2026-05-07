"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const DEADLINE_KEY = "itv_offer_deadline";
const DURATION_MS = 72 * 60 * 60 * 1000;

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const stored = localStorage.getItem(DEADLINE_KEY);
  if (stored) {
    const val = parseInt(stored, 10);
    if (val > Date.now()) return val;
  }
  const newDeadline = Date.now() + DURATION_MS;
  localStorage.setItem(DEADLINE_KEY, String(newDeadline));
  return newDeadline;
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return "00:00:00";
  const totalSecs = Math.floor(ms / 1000);
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  const [remaining, setRemaining] = useState<number>(DURATION_MS);

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-primary text-white text-xs sm:text-sm py-2 sm:py-2.5 px-8 sm:px-12 text-center">
      <span className="font-medium">
        🎉 Limited Time: Get <strong>50% OFF</strong> with our Annual Plan —{" "}
        <strong>$4.91/month</strong>
        <span className="mx-2 opacity-60">·</span>
        <span className="font-mono font-bold">Ends in {formatCountdown(remaining)}</span>
      </span>
      <a href="#pricing" className="ml-2 sm:ml-3 underline underline-offset-2 font-bold hover:opacity-80 transition-opacity whitespace-nowrap">
        Claim Offer →
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity p-1"
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
