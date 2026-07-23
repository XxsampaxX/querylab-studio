import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does a project take?",
    a: "Landing pages typically ship in 2 to 3 weeks. Institutional websites and sales pages usually take 3 to 5 weeks, depending on scope and content readiness.",
  },
  {
    q: "How much does a QueryLab project cost?",
    a: "Every project is scoped to your goals. After the briefing call we send a fixed proposal with clear deliverables — no hourly billing, no surprises.",
  },
  {
    q: "Do you write the copy?",
    a: "We lead the message architecture and page structure, and can produce full copy in partnership with you. If you already have a copywriter, we integrate seamlessly.",
  },
  {
    q: "What tech stack do you use?",
    a: "Modern, fast and reliable: React, TypeScript, Tailwind, Framer Motion, and edge-first hosting. Every page loads in under a second and scores 95+ on Lighthouse.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We include 30 days of post-launch support on every project, plus optional retainers for continuous optimization, A/B tests and new sections.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Redesign is one of our core services — we audit what works, keep the SEO you've earned, and rebuild the experience from the ground up.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-brand" /> Questions
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Frequently <span className="text-gradient-brand">asked</span>.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border-hairline bg-card/60 transition-colors duration-300 ${
                  isOpen ? "border-brand/25 bg-card" : "hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-[16px] font-semibold tracking-tight text-foreground md:text-[17px]">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-brand text-primary-foreground" : "bg-white/[0.04] text-foreground"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.4} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <div className="px-6 pb-6 text-[14.5px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
