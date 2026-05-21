"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "@/context/LanguageContext";

const FaqSection = () => {
  const { t } = useTranslation();
  const faqs = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
  ];
  return (
    <section id="faq" className="py-10 md:py-20 border-t border-border">
      <div className="container max-w-2xl">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          {t("faq_title_1")} <span className="text-gradient">{t("faq_title_gradient")}</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg bg-card px-5 overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:no-underline py-4">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FaqSection;
