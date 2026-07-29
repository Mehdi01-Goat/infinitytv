"use client";

import { useState } from "react";
import { X, Gift } from "lucide-react";
import type { Influencer } from "@/lib/influencers";

const platformEmojis: Record<string, string> = {
  youtube: "📺",
  tiktok: "🎵",
  instagram: "📸",
  twitch: "🎮",
  other: "🌐",
};

export default function InfluencerBanner({ influencer }: { influencer: Influencer }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-b border-primary/20 px-8 py-3 text-center text-sm">
      <span className="inline-flex flex-wrap items-center justify-center gap-1">
        <span>{platformEmojis[influencer.platform] ?? "🌐"}</span>
        <strong className="text-foreground">{influencer.name}</strong>
        {" sent you here"}
        {influencer.description && (
          <span className="text-muted-foreground"> · {influencer.description}</span>
        )}
        <span className="mx-1 opacity-40">—</span>
        <span className="text-primary font-bold">
          Use code {influencer.code} for {influencer.discount}% off
        </span>
        <Gift size={13} className="text-primary" />
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors"
        aria-label="Dismiss"
      >
        <X size={13} />
      </button>
    </div>
  );
}