import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva um projeto?",
    a: "Landing pages geralmente ficam prontas em 2 a 3 semanas. Sites institucionais e páginas de vendas costumam levar de 3 a 5 semanas, dependendo do escopo e do conteúdo disponível.",
  },
  {
    q: "Quanto custa um projeto da QueryLab?",
    a: "Cada projeto é orçado com base nos seus objetivos. Após a reunião de briefing enviamos uma proposta fechada, com entregas claras — sem cobrança por hora, sem surpresas.",
  },
  {
    q: "Vocês escrevem o texto (copy)?",
    a: "Conduzimos a arquitetura da mensagem e a estrutura da página, e podemos produzir o texto completo em parceria com você. Se já tem um copywriter, integramos com o processo dele.",
  },
  {
    q: "Que tecnologias vocês usam?",
    a: "Stack moderna, rápida e confiável: React, TypeScript, Tailwind, Framer Motion e hospedagem no edge. Toda página carrega em menos de um segundo e atinge 95+ no Lighthouse.",
  },
  {
    q: "Vocês oferecem suporte após o lançamento?",
    a: "Sim. Todo projeto inclui 30 dias de suporte pós-lançamento, além de mensalidades opcionais para otimização contínua, testes A/B e novas seções.",
  },
  {
    q: "Vocês fazem redesign do meu site atual?",
    a: "Sim. Redesign é um dos nossos serviços principais — auditamos o que funciona, preservamos o SEO já conquistado e reconstruímos a experiência do zero.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-hairline bg-foreground/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-brand" /> Dúvidas
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Perguntas <span className="text-gradient-brand">frequentes</span>.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border-hairline bg-card/60 transition-colors duration-300 ${
                  isOpen ? "border-brand/25 bg-card" : "hover:border-foreground/15"
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
                      isOpen ? "bg-brand text-primary-foreground" : "bg-foreground/[0.04] text-foreground"
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
