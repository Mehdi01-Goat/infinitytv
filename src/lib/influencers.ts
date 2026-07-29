export type Platform = "youtube" | "tiktok" | "instagram" | "twitch" | "other";

export type Influencer = {
  name: string;
  code: string;
  discount: number;
  platform: Platform;
  socialHandle: string;
  description?: string;
};

export const influencers: Record<string, Influencer> = {
  "apdi": {
    name: "Apdi",
    code: "APDI20",
    discount: 20,
    platform: "instagram",
    socialHandle: "@apdi",
    description: "",
  },
};

export function getInfluencer(handle: string): Influencer | null {
  return influencers[handle.toLowerCase()] ?? null;
}
