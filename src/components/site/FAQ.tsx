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
    <section id="faq" className="relative py-20 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-b border-[color:var(--hairline)] pb-12">
          <div className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[color:var(--primary)]" />
            Dúvidas
          </div>
          <h2 className="mt-6 text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
            Perguntas <span className="text-brand">frequentes</span>.
          </h2>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[color:var(--hairline)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left"
                >
                  <span
                    className={`text-[16px] font-semibold tracking-[-0.02em] transition-colors duration-200 md:text-[18px] ${
                      isOpen ? "text-brand" : "text-foreground"
                    }`}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border-hairline text-muted-foreground"
                  >
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-2xl pb-7 text-[14.5px] leading-[1.8] text-muted-foreground">
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
