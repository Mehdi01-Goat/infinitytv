"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "When will I get my subscription activated?", a: "Once we receive your order, our team will activate your subscription based on your details (duration, number of connections, device). You will receive it after we complete the payment process." },
  { q: "What type of devices are supported?", a: "We support all major devices including Smart TVs (Samsung, LG, Android TV), Amazon Firestick, iOS, Android, Windows, macOS, Linux, and MAG devices." },
  { q: "Do you offer a free trial?", a: "We offer a 24-hour trial so you can test the service before committing. Contact us via WhatsApp to request your trial." },
  { q: "What channels are included?", a: "Our service includes 22,000+ live channels from around the world, including sports (PPV, UFC, NFL, NHL, NBA), movies, news, entertainment, and international channels in multiple languages." },
  { q: "Is there a refund policy?", a: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the service, contact our support team for a full refund." },
];

const FaqSection = () => (
  <section id="faq" className="py-20 border-t border-border">
    <div className="container max-w-2xl">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg bg-card px-5 overflow-hidden">
            <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm pb-4">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
