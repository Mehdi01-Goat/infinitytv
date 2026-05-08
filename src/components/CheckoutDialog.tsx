"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, ChevronDown, MessageCircle, Check } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP = "14702642482";

const paymentMethods = [
  { value: "card",          label: "Card"        },
  { value: "paypal",        label: "PayPal"      },
  { value: "e-transfer",    label: "E-Transfer"  },
  { value: "crypto",        label: "Crypto"      },
  { value: "moneygram",     label: "MoneyGram"   },
  { value: "western-union", label: "Western Union"},
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
    }
  };

  /* ── Success state ─────────────────────────────────────────────── */
  if (isSuccess) {
    const waMsg = encodeURIComponent(
      `Hi! I placed order #${orderId} for the ${planName} plan (${connections}) at ${planPrice}. I'm ready to complete my payment.`
    );
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-sm bg-card border-border">
          <DialogHeader className="sr-only">
            <DialogTitle>Order Confirmed</DialogTitle>
            <DialogDescription>Your order has been received.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center text-center pt-8 pb-6 px-2 gap-4">

            <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold">Order Received</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Order <span className="text-foreground font-medium">#{orderId}</span> · {planPrice}
              </p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              We'll contact you on WhatsApp within <span className="text-foreground font-medium">5 minutes</span> to complete your payment and activate your service.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="block w-full mt-1"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#1fbe5c] text-white font-semibold gap-2 rounded-xl py-5 text-sm">
                <MessageCircle size={15} />
                Message us on WhatsApp
              </Button>
            </a>

            <button onClick={() => handleClose(false)} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Close
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

        {/* Price line */}
        <div className="flex items-center justify-between py-3 border-y border-border">
          <span className="text-sm text-muted-foreground">Total</span>
          <div className="flex items-center gap-2">
            {planOldPrice && (
              <span className="text-xs text-muted-foreground line-through">{planOldPrice}</span>
            )}
            <span className="text-xl font-heading font-bold text-foreground">{planPrice}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-sm">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" value={fullName}
                onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm">Email</Label>
              <Input id="email" type="email" placeholder="you@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          {/* WhatsApp */}
          <div className="space-y-1.5">
            <Label htmlFor="whatsapp" className="text-sm">WhatsApp Number</Label>
            <Input id="whatsapp" type="tel" placeholder="+1 234 567 8900" value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)} required />
            <p className="text-[11px] text-muted-foreground">We'll send your credentials here.</p>
          </div>

          {/* Payment method */}
          <div className="space-y-2">
            <Label className="text-sm">Payment Method</Label>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPaymentMethod(value)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-150 ${
                    paymentMethod === value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {paymentMethod === value && <Check size={11} />}
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Promo code */}
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

          {/* Submit */}
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
            <p className="text-[11px] text-center text-muted-foreground">
              🔒 SSL Secured · 7-Day Money-Back Guarantee · Activates in ~30 min
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
