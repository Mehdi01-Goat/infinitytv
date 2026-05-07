"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle, Loader2, Shield, Zap, Lock, ChevronDown, MessageCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const WHATSAPP = "14702642482";

const paymentMethods = [
  { value: "cards",         label: "Card",       emoji: "💳" },
  { value: "paypal",        label: "PayPal",     emoji: "🅿️" },
  { value: "e-transfer",    label: "E-Transfer", emoji: "🏦" },
  { value: "crypto",        label: "Crypto",     emoji: "₿"  },
  { value: "moneygram",     label: "MoneyGram",  emoji: "💰" },
  { value: "western-union", label: "W. Union",   emoji: "🌐" },
];

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName: string;
  planPrice: string;
  connections: string;
  planOldPrice?: string;
  planPerMonth?: string;
}

const CheckoutDialog = ({
  open, onOpenChange,
  planName, planPrice, connections,
  planOldPrice, planPerMonth,
}: CheckoutDialogProps) => {
  const [fullName, setFullName]       = useState("");
  const [email, setEmail]             = useState("");
  const [whatsapp, setWhatsapp]       = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode]     = useState("");
  const [showPromo, setShowPromo]     = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]     = useState(false);
  const [orderId, setOrderId]         = useState("");

  const resetForm = () => {
    setFullName(""); setEmail(""); setWhatsapp(""); setPaymentMethod("");
    setPromoCode(""); setShowPromo(false); setIsSuccess(false); setOrderId("");
  };
  const handleClose = (val: boolean) => { if (!val) resetForm(); onOpenChange(val); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !whatsapp || !paymentMethod) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    const newOrderId = `INF-${String(Date.now()).slice(-6)}`;
    try {
      await supabase.functions.invoke("send-order-notification", {
        body: { fullName, email, whatsapp, paymentMethod, planName, planPrice, connections, promoCode, orderId: newOrderId },
      });
    } catch {
      // Supabase failure handled silently — WhatsApp follow-up is the primary channel
    } finally {
      setOrderId(newOrderId);
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  };

  /* ── Success state ───────────────────────────────────────────────────── */
  if (isSuccess) {
    const waMsg = encodeURIComponent(
      `Hi! I placed order #${orderId} for the ${planName} plan (${connections}) at ${planPrice}. I'm ready to complete my payment.`
    );
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader className="sr-only">
            <DialogTitle>Order Received</DialogTitle>
            <DialogDescription>Your order has been received.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center text-center py-4 gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold mb-1">Order Received!</h3>
              <p className="text-sm text-muted-foreground">We'll activate you as fast as possible.</p>
            </div>

            {/* Order ID badge */}
            <div className="bg-secondary border border-border rounded-lg px-4 py-2 text-sm font-mono w-full text-center">
              Order <span className="text-primary font-bold">#{orderId}</span>
              <span className="text-muted-foreground ml-2">· {planName} · {planPrice}</span>
            </div>

            {/* What happens next */}
            <div className="w-full bg-secondary/50 border border-border rounded-xl p-4 text-left space-y-3">
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">What happens next</p>
              {[
                { icon: "📲", text: "We message you on WhatsApp within 5 minutes" },
                { icon: "💳", text: "You send payment via your chosen method" },
                { icon: "🎬", text: "Credentials sent — you're streaming in minutes" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm">
                  <span className="text-base shrink-0">{icon}</span>
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp fast-track CTA */}
            <div className="w-full space-y-2">
              <p className="text-xs text-muted-foreground">Want to go faster? Message us right now:</p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#1fbe5c] text-white font-bold gap-2 rounded-full">
                  <MessageCircle size={16} />
                  Chat on WhatsApp →
                </Button>
              </a>
            </div>

            <Button variant="outline" onClick={() => handleClose(false)} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  /* ── Order form ──────────────────────────────────────────────────────── */
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>Complete Your Order</DialogTitle>
          <DialogDescription>Order {planName} for {planPrice}</DialogDescription>
        </DialogHeader>

        {/* Zone 1 — Order summary */}
        <div className="rounded-xl border border-primary/35 bg-gradient-to-br from-primary/12 to-primary/5 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-heading font-bold text-foreground text-base">
                {planName} · {connections}
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                {planOldPrice && (
                  <span className="text-sm text-muted-foreground line-through">{planOldPrice}</span>
                )}
                <span className="text-2xl font-heading font-bold text-primary">{planPrice}</span>
                {planPerMonth && planName !== "1 Month" && (
                  <span className="text-xs text-muted-foreground">({planPerMonth}/mo)</span>
                )}
              </div>
            </div>
            <div className="shrink-0 text-center bg-primary/20 border border-primary/30 rounded-xl px-3 py-2">
              <span className="text-primary text-xs font-bold leading-tight block">⚡ Activates</span>
              <span className="text-primary text-xs font-bold leading-tight block">~30 min</span>
            </div>
          </div>
        </div>

        {/* Zone 2 — Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" value={fullName}
                onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="whatsapp">WhatsApp Number</Label>
            <Input id="whatsapp" type="tel" placeholder="+1 234 567 8900" value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)} required />
          </div>

          {/* Payment method — visual cards */}
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <div className="grid grid-cols-3 gap-2">
              {paymentMethods.map(({ value, label, emoji }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPaymentMethod(value)}
                  className={`relative flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-200 ${
                    paymentMethod === value
                      ? "border-primary bg-primary/10 shadow-glow"
                      : "border-border bg-secondary/50 hover:border-primary/40 hover:bg-secondary"
                  }`}
                >
                  {paymentMethod === value && (
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle size={9} className="text-white" />
                    </div>
                  )}
                  <span className="text-xl leading-none">{emoji}</span>
                  <span className="text-[10px] font-semibold text-center leading-tight">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Promo / referral code */}
          <div>
            <button
              type="button"
              onClick={() => setShowPromo((p) => !p)}
              className="flex items-center gap-1 text-xs text-primary hover:underline transition-all"
            >
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${showPromo ? "rotate-180" : ""}`}
              />
              Have a promo or referral code?
            </button>
            {showPromo && (
              <Input
                className="mt-2"
                placeholder="Enter code (e.g. JOHN10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              />
            )}
          </div>

          {/* Zone 3 — Submit + trust */}
          <div className="space-y-3 pt-1">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary text-white font-bold py-6 text-base hover:opacity-90 shadow-glow rounded-full"
            >
              {isSubmitting
                ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
                : "Place Order — Activate in ~30min →"
              }
            </Button>

            <div className="flex items-center justify-center gap-5 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield size={11} className="text-emerald-400" />7-Day Guarantee
              </span>
              <span className="flex items-center gap-1">
                <Zap size={11} className="text-primary" />Instant Setup
              </span>
              <span className="flex items-center gap-1">
                <Lock size={11} className="text-blue-400" />SSL Secured
              </span>
            </div>

            <p className="text-[10px] text-center text-muted-foreground">
              After submitting, our team contacts you within minutes via WhatsApp with payment details.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
