"use client";

import { useState, useEffect } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, ChevronDown, MessageCircle, Check, Mail, Shield, Lock } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP = "14702642482";
const SUPPORT_EMAIL = "contact@infinitytv.io";

const paymentMethods = [
  {
    value: "card",
    label: "Credit / Debit Card",
    icons: (
      <span className="flex items-center gap-1">
        <svg width="28" height="18" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" rx="4" fill="#1A1F71"/>
          <path d="M16.5 16.5H14l1.6-9h2.5L16.5 16.5zM23.4 7.7c-.5-.2-1.3-.4-2.2-.4-2.5 0-4.2 1.3-4.2 3.1 0 1.4 1.2 2.1 2.2 2.6 1 .5 1.3.8 1.3 1.2 0 .6-.8 1-1.6 1-.7 0-1.5-.2-2.2-.5l-.3-.1-.3 2c.6.3 1.7.5 2.8.5 2.6 0 4.3-1.3 4.3-3.2 0-1.1-.6-1.9-2-2.5-.8-.4-1.4-.7-1.4-1.2 0-.4.4-.8 1.4-.8.8 0 1.4.2 1.9.4l.2.1.3-1.9zM27.6 7.5h-1.9c-.6 0-1 .2-1.3.7l-3.6 8.3h2.5l.5-1.4h3.1l.3 1.4H29l-1.4-9zm-3.1 5.8l.9-2.6.5 2.6h-1.4zM13.7 7.5l-2.4 6.1-.3-1.3c-.4-1.5-1.8-3.1-3.3-3.9l2.2 8.1h2.6l3.8-9h-2.6z" fill="white"/>
          <path d="M9.3 7.5H5.1l-.1.3c3.3.8 5.5 2.8 6.4 5.2l-.9-4.8c-.1-.5-.6-.7-1.2-.7z" fill="#F9A533"/>
        </svg>
        <svg width="28" height="18" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" rx="4" fill="#252525"/>
          <circle cx="14" cy="12" r="7" fill="#EB001B"/>
          <circle cx="24" cy="12" r="7" fill="#F79E1B"/>
          <path d="M19 7.2A7 7 0 0121.8 12 7 7 0 0119 16.8 7 7 0 0116.2 12 7 7 0 0119 7.2z" fill="#FF5F00"/>
        </svg>
      </span>
    ),
  },
  {
    value: "paypal",
    label: "PayPal",
    icons: (
      <svg width="52" height="14" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.3 3H4.1L1 17h3.2l.7-3h3.2c3 0 5.3-1.5 6-4.4.6-2.8-1-6.6-5.8-6.6zm.6 6.6c-.3 1.4-1.5 2.2-3 2.2H4.5l.8-4h1.3c1.6 0 2.6.7 2.3 1.8zM20 7.5c-.7 0-1.5.2-2 .5l.2-1H15l-2 9.5h3.2l1-4.8c.2-1 1-1.7 2-1.7.7 0 1 .4.8 1.2l-1 5.3h3.2l1.1-5.5c.4-2.2-.7-3.5-3.3-3.5zM32.4 7.5h-3.1l-4.3 9.5h3.4l.7-1.6h3.5l.2 1.6h3.1L32.4 7.5zm-2.3 5.8l1.6-3.6.6 3.6h-2.2z" fill="#003087"/>
        <path d="M44 3h-4.2L36.7 17H40l.7-3h3.2c3 0 5.3-1.5 6-4.4.6-2.8-1-6.6-5.9-6.6zm.6 6.6c-.3 1.4-1.5 2.2-3 2.2h-1.4l.8-4H42c1.6 0 2.6.7 2.6 1.8z" fill="#009CDE"/>
      </svg>
    ),
  },
  {
    value: "e-transfer",
    label: "E-Transfer",
    icons: (
      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-1.5 py-0.5">
        Bank Transfer
      </span>
    ),
  },
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
  const [fullName, setFullName]           = useState("");
  const [email, setEmail]                 = useState("");
  const [whatsapp, setWhatsapp]           = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode]         = useState("");
  const [showPromo, setShowPromo]         = useState(false);
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [isSuccess, setIsSuccess]         = useState(false);
  const [orderId, setOrderId]             = useState("");

  // Fire InitiateCheckout when dialog opens
  useEffect(() => {
    if (open && typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: planName,
        currency: "USD",
        value: parseFloat(planPrice.replace(/[^0-9.]/g, "")),
      });
    }
  }, [open]);

  const resetForm = () => {
    setFullName(""); setEmail(""); setWhatsapp(""); setPaymentMethod("");
    setPromoCode(""); setShowPromo(false); setIsSuccess(false); setOrderId("");
  };
  const handleClose = (val: boolean) => { if (!val) resetForm(); onOpenChange(val); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !whatsapp || !paymentMethod) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    const newOrderId = `INF-${String(Date.now()).slice(-6)}`;
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, whatsapp, paymentMethod, planName, planPrice, connections, promoCode, orderId: newOrderId }),
      });
    } catch {
      // silent — Telegram notification handles delivery
    } finally {
      setOrderId(newOrderId);
      setIsSuccess(true);
      setIsSubmitting(false);

      // Fire Lead conversion event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: planName,
          currency: "USD",
          value: parseFloat(planPrice.replace(/[^0-9.]/g, "")),
        });
      }
    }
  };

  /* ── Success state ─────────────────────────────────────────────── */
  if (isSuccess) {
    const waMsg = encodeURIComponent(
      `Hi! I placed order #${orderId} for the ${planName} plan (${connections}) at ${planPrice}. I'm ready to complete my payment.`
    );
    const emailSubject = encodeURIComponent(`Order #${orderId} — Payment`);
    const emailBody = encodeURIComponent(
      `Hi,\n\nI placed order #${orderId} for the ${planName} plan (${connections}) at ${planPrice}.\nI'm ready to complete my payment.\n\nThank you.`
    );
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-sm bg-card border-border">
          <DialogHeader className="sr-only">
            <DialogTitle>Order Confirmed</DialogTitle>
            <DialogDescription>Your order has been received.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col pt-8 pb-6 px-1 gap-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="h-7 w-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold tracking-tight">Order Confirmed</h3>
                <p className="text-xs text-muted-foreground mt-1 font-mono">#{orderId}</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 px-4 py-3 space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plan</span>
                <span className="font-medium text-foreground">{planName} · {connections}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold text-foreground">{planPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="text-emerald-400 font-medium">Awaiting payment</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              Contact us via WhatsApp or email to finalize your payment. Your service is activated within{" "}
              <span className="text-foreground font-medium">30 minutes</span> of confirmation.
            </p>

            <div className="flex flex-col gap-2.5">
              <a href={`https://wa.me/${WHATSAPP}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#25D366] hover:bg-[#1fbe5c] text-white font-semibold gap-2 rounded-xl py-5 text-sm">
                  <MessageCircle size={15} />
                  Continue on WhatsApp
                </Button>
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}?subject=${emailSubject}&body=${emailBody}`}>
                <Button variant="outline" className="w-full gap-2 rounded-xl py-5 text-sm border-border hover:border-primary/40 hover:text-primary">
                  <Mail size={15} />
                  Continue by Email
                </Button>
              </a>
            </div>

            <button onClick={() => handleClose(false)} className="text-xs text-center text-muted-foreground hover:text-foreground transition-colors">
              I&apos;ll reach out later
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  /* ── Order form ────────────────────────────────────────────────── */
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border max-h-[90vh] overflow-y-auto">

        <DialogHeader>
          <DialogTitle className="font-heading text-lg font-bold">Complete Your Order</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            {planName} · {connections}
            {planPerMonth && planName !== "1 Month" && (
              <span className="ml-2 text-primary font-semibold">{planPerMonth}/mo</span>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between py-3 border-y border-border">
          <span className="text-sm text-muted-foreground">Total due today</span>
          <div className="flex items-center gap-2">
            {planOldPrice && (
              <span className="text-xs text-muted-foreground line-through">{planOldPrice}</span>
            )}
            <span className="text-xl font-heading font-bold text-foreground">{planPrice}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-sm">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" value={fullName}
                onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm">Email Address</Label>
              <Input id="email" type="email" placeholder="you@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="whatsapp" className="text-sm">WhatsApp Number</Label>
            <Input id="whatsapp" type="tel" placeholder="+1 234 567 8900" value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)} required />
            <p className="text-[11px] text-muted-foreground">Recommended for faster support. No WhatsApp? We&apos;ll deliver via email.</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm">Payment Method</Label>
            <div className="flex flex-col gap-2">
              {paymentMethods.map(({ value, label, icons }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPaymentMethod(value)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-150 ${
                    paymentMethod === value
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      paymentMethod === value ? "border-primary" : "border-muted-foreground/40"
                    }`}>
                      {paymentMethod === value && (
                        <span className="w-2 h-2 rounded-full bg-primary block" />
                      )}
                    </span>
                    {label}
                  </span>
                  <span>{icons}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setShowPromo((p) => !p)}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown size={12} className={`transition-transform duration-200 ${showPromo ? "rotate-180" : ""}`} />
              Have a promo or referral code?
            </button>
            {showPromo && (
              <Input
                className="mt-2"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              />
            )}
          </div>

          <div className="space-y-3 pt-1">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary text-white font-bold py-5 hover:opacity-90 shadow-glow rounded-xl"
            >
              {isSubmitting
                ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
                : "Place Order →"
              }
            </Button>

            <div className="flex items-center justify-center gap-4 pt-1">
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Lock size={10} className="text-emerald-400" />
                SSL Secured
              </span>
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Shield size={10} className="text-emerald-400" />
                7-Day Guarantee
              </span>
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Check size={10} className="text-emerald-400" />
                Activates in ~30 min
              </span>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
