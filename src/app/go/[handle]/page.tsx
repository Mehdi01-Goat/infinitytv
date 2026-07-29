import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getInfluencer } from "@/lib/influencers";
import InfluencerLandingClient from "./InfluencerLandingClient";

type Props = { params: { handle: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const inf = getInfluencer(params.handle);
  if (!inf) return {};
  return {
    title: `${inf.name} × InfinityTV — Exclusive ${inf.discount}% Off`,
    description: `${inf.name} sent you here! Use code ${inf.code} for ${inf.discount}% off InfinityTV. 22,000+ channels, instant setup.`,
    alternates: {
      canonical: `https://www.infinitytv.io/go/${params.handle}`,
    },
  };
}

export default function InfluencerPage({ params }: Props) {
  const inf = getInfluencer(params.handle);
  if (!inf) redirect("/streaming");
  return <InfluencerLandingClient influencer={inf} />;
}