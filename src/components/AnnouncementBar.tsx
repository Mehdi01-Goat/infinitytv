"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { getOfferDeadline } from "@/lib/offerConfig";

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
  const [remaining, setRemaining] = useState<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const deadline = getOfferDeadline();
    const tick = () => {
      const left = Math.max(0, deadline - Date.now());
      setRemaining(left);
      if (left === 0) setVisible(false);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  const announcementHtml = t("announcement")
    .replace(/<b>/g, '<strong>')
    .replace(/<\/b>/g, '</strong>');

  return (
    <div className="relative bg-gradient-primary text-white text-xs sm:text-sm py-2 sm:py-2.5 px-8 sm:px-12 text-center">
      <span className="font-medium">
        <span dangerouslySetInnerHTML={{ __html: announcementHtml }} />
        <span className="mx-2 opacity-60">·</span>
        <span className="font-mono font-bold">
          Ends in {remaining !== null ? formatCountdown(remaining) : "..."}
        </span>
      </span>
      <a href="#pricing" className="ml-2 sm:ml-3 underline underline-offset-2 font-bold hover:opacity-80 transition-opacity whitespace-nowrap">
        {t("announcement_cta")}
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