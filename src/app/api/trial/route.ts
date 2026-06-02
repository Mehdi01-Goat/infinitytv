import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, contact, contactType, device } = await req.json();

    const deviceLabels: Record<string, string> = {
      "smart-tv":    "📺 Smart TV",
      "firestick":   "🔥 Firestick / Fire TV",
      "android-box": "📦 Android Box",
      "mag":         "📡 MAG Box",
      "android":     "📱 Android Phone / Tablet",
      "ios":         "🍎 iPhone / iPad",
      "windows":     "💻 Windows PC",
      "other":       "🔌 Other",
    };

    const contactLabel = contactType === "whatsapp"
      ? `📱 WhatsApp: ${contact}`
      : `✈️ Telegram: ${contact}`;

    const message = `
🎁 *New Free Trial Request*

👤 *Name:* ${fullName}
📧 *Email:* ${email}
${contactLabel}
📺 *Device:* ${deviceLabels[device] || device}

_Activate within 30 minutes_
`.trim();

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id:    TELEGRAM_CHAT_ID,
          text:       message,
          parse_mode: "Markdown",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process trial request" }, { status: 500 });
  }
}
