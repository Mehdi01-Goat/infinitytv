"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/context/LanguageContext";

const DEVICES = [
  { value: "smart-tv",     label: "Smart TV", icon: "📺" },
  { value: "firestick",    label: "Firestick / Fire TV", icon: "🔥" },
  { value: "android-box",  label: "Android Box", icon: "📦" },
  { value: "mag",          label: "MAG Box", icon: "📡" },
  { value: "android",      label: "Android Phone / Tablet", icon: "📱" },
  { value: "ios",          label: "iPhone / iPad", icon: "🍎" },
  { value: "windows",      label: "Windows PC", icon: "💻" },
  { value: "other",        label: "Other", icon: "🔌" },
];

interface TrialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TrialDialog({ open, onOpenChange }: TrialDialogProps) {
  const { t } = useTranslation();

  const [fullName, setFullName]       = useState("");
  const [email, setEmail]             = useState("");
  const [contact, setContact]         = useState("");
  const [contactType, setContactType] = useState<"whatsapp" | "telegram">("whatsapp");
  const [device, setDevice]           = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]     = useState(false);

  const resetForm = () => {
    setFullName(""); setEmail(""); setContact(""); setDevice("");
    setIsSuccess(false); setContactType("whatsapp");
  };
  const handleClose = (val: boolean) => { if (!val) resetForm(); onOpenChange(val); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !contact || !device) {
      toast.error("Please fill in all fields and select a device.");
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, contact, contactType, device }),
      });
    } catch {
      // silent
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", { content_name: "Free Trial", currency: "EUR", value: 0 });
      }
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-sm bg-card border-border">
          <DialogHeader className="sr-only">
            <DialogTitle>Trial Requested</DialogTitle>
            <DialogDescription>Your free trial has been requested.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center text-center gap-5 pt-8 pb-6 px-2">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="h-7 w-7 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Trial Request Received!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                We&apos;ll reach out to you shortly on {contactType === "whatsapp" ? "WhatsApp" : "Telegram"} to activate your 24-hour free trial.
              </p>
            </div>
            <Button onClick={() => handleClose(false)} className="w-full bg-gradient-primary text-white font-bold rounded-xl py-5">
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-lg font-bold">24-Hour Free Trial</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Full access — no credit card required. We&apos;ll set it up for you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">

          {/* Full Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="trialName" className="text-sm">Full Name</Label>
              <Input id="trialName" placeholder="John Doe" value={fullName}
                onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="trialEmail" className="text-sm">Email Address</Label>
              <Input id="trialEmail" type="email" placeholder="you@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          {/* Contact method toggle */}
          <div className="space-y-1.5">
            <Label className="text-sm">Contact Via</Label>
            <div className="grid grid-cols-2 gap-2">
              {(["whatsapp", "telegram"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setContactType(type)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    contactType === type
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    contactType === type ? "border-primary" : "border-muted-foreground/40"
                  }`}>
                    {contactType === type && <span className="w-2 h-2 rounded-full bg-primary block" />}
                  </span>
                  {type === "whatsapp" ? "WhatsApp" : "Telegram"}
                </button>
              ))}
            </div>
            <Input
              placeholder={contactType === "whatsapp" ? "+1 234 567 8900" : "@username or phone"}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type={contactType === "whatsapp" ? "tel" : "text"}
              required
            />
            <p className="text-[11px] text-muted-foreground">
              Recommended for faster delivery. We&apos;ll send your trial credentials here.
            </p>
          </div>

          {/* Device selection */}
          <div className="space-y-2">
            <Label className="text-sm">Your Device</Label>
            <div className="grid grid-cols-2 gap-2">
              {DEVICES.map((d) => (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => setDevice(d.value)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-left ${
                    device === d.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span className="text-base shrink-0">{d.icon}</span>
                  <span className="truncate">{d.label}</span>
                  {device === d.value && <Check size={12} className="ml-auto shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-primary text-white font-bold py-5 hover:opacity-90 shadow-glow rounded-xl"
          >
            {isSubmitting
              ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
              : "Request Free Trial →"
            }
          </Button>

          <p className="text-[11px] text-center text-muted-foreground">
            Trial activates within <span className="text-foreground font-medium">30 minutes</span> · No credit card required
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
