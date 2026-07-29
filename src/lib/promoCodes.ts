export type PromoCode = { code: string; discount: number; influencer: string };

export const PROMO_CODES: Record<string, PromoCode> = {
  "APDI20": { code: "APDI20", discount: 20, influencer: "Apdi" },
};

export function validatePromoCode(input: string): PromoCode | null {
  return PROMO_CODES[input.trim().toUpperCase()] ?? null;
}

export function applyDiscount(price: string, discount: number): { original: number; final: number; saved: number } {
  const original = parseFloat(price.replace(/[^0-9.]/g, ""));
  const final    = parseFloat((original * (1 - discount / 100)).toFixed(2));
  return { original, final, saved: parseFloat((original - final).toFixed(2)) };
}
