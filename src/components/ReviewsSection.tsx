"use client";
import { Star, CheckCircle } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const reviews = [
  { name: "James R.", location: "United States", rating: 5, text: "Best IPTV service I've ever used. Zero buffering, even during live sports. The channel selection is incredible!", date: "2 days ago", plan: "12-Month Plan" },
  { name: "Maria S.", location: "Canada", rating: 5, text: "Setup was instant and support helped me within minutes. HD quality on every channel. Highly recommend InfinityTV!", date: "5 days ago", plan: "6-Month Plan" },
  { name: "David K.", location: "United Kingdom", rating: 5, text: "I've tried many IPTV providers and InfinityTV is by far the most reliable. Works perfectly on my Firestick and Smart TV.", date: "1 week ago", plan: "12-Month Plan" },
  { name: "Sophie L.", location: "France", rating: 4, text: "Great variety of international channels. My family loves it — something for everyone. Customer service is top notch.", date: "1 week ago", plan: "3-Month Plan" },
  { name: "Michael T.", location: "Australia", rating: 5, text: "Switched from cable and never looked back. Saving money and getting way more channels in better quality. 10/10!", date: "2 weeks ago", plan: "12-Month Plan" },
  { name: "Angela W.", location: "South Africa", rating: 5, text: "The sports coverage is unmatched. Every NFL, NBA, and soccer game I want to watch is available. Fantastic service!", date: "2 weeks ago", plan: "6-Month Plan" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} className={i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"} />
    ))}
  </div>
);

const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

const ReviewsSection = () => {
  const { t } = useTranslation();
  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);
  return (
    <section className="py-10 md:py-20 border-t border-border">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("reviews_eyebrow")}</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("reviews_title_1")} <span className="text-gradient">{t("reviews_title_gradient")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">{t("reviews_sub")}</p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-secondary rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-border">
            <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}</div>
            <span className="font-heading font-bold text-foreground text-base sm:text-lg">{avgRating} / 5</span>
            <span className="text-xs sm:text-sm text-muted-foreground">based on verified reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div key={i} className="rounded-xl border border-border glass-card p-5 flex flex-col gap-3 hover:border-glow transition-all duration-300">
              <div className="flex items-center justify-between">
                <StarRating rating={review.rating} />
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{review.text}"</p>
              <div className="flex items-center justify-between pt-1 border-t border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">{initials(review.name)}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-none">{review.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{review.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                  <CheckCircle size={11} /><span>{t("reviews_verified")}</span>
                </div>
              </div>
              <div className="text-[10px] text-muted-foreground/70 bg-secondary rounded px-2 py-1 w-fit">{review.plan}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReviewsSection;
