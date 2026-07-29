export const OFFER_END: string | null = "2026-08-11T23:59:59Z";

export function getOfferDeadline(): number {
  if (OFFER_END) return new Date(OFFER_END).getTime();
  const now = new Date();
  const sunday = new Date(now);
  sunday.setUTCDate(now.getUTCDate() + (7 - now.getUTCDay()) % 7 || 7);
  sunday.setUTCHours(23, 59, 59, 0);
  return sunday.getTime();
}
