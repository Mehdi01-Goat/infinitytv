import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullName, email, whatsapp, paymentMethod, planName, planPrice, connections, promoCode, orderId } = body;

  const now = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";

  // ── Save to Supabase ──────────────────────────────────────────────
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    await supabase.from("orders").insert({
      order_id: orderId,
      full_name: fullName,
      email,
      whatsapp,
      payment_method: paymentMethod,
      plan_name: planName,
      plan_price: planPrice,
      connections,
      promo_code: promoCode || null,
    });
  } catch {
    // silent — Telegram notification is the primary channel
  }

  // ── Send Telegram notification ────────────────────────────────────
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (token && chatId) {
      const message = [
        `🆕 *New Order ${orderId}*`,
        ``,
        `📦 ${planName} · ${connections}`,
        `💰 ${planPrice}`,
        `💳 ${paymentMethod}`,
        promoCode ? `🎟 Promo: ${promoCode}` : null,
        ``,
        `👤 ${fullName}`,
        `📧 ${email}`,
        `📱 ${whatsapp}`,
        ``,
        `🕐 ${now}`,
      ]
        .filter((line) => line !== null)
        .join("\n");

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" }),
      });
    }
  } catch {
    // silent
  }

  return NextResponse.json({ ok: true });
}
