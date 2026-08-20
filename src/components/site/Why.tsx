import { motion } from "framer-motion";

const points = [
  {
    n: "01",
    title: "Design Premium",
    desc: "Tipografia editorial, espaçamento refinado, motion considerado. Todo detalhe é intencional.",
  },
  {
    n: "02",
    title: "Conversão",
    desc: "Estruturado em torno de uma única pergunta: o que faz o visitante dizer sim hoje?",
  },
  {
    n: "03",
    title: "Entrega Rápida",
    desc: "Escopo enxuto, sprints focados, revisões semanais — a maioria dos projetos lança em 2 a 4 semanas.",
  },
  {
    n: "04",
    title: "Atendimento Pessoal",
    desc: "Você fala direto com quem está construindo sua página. Sem intermediários.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[color:var(--primary)]" />
              Por que a QueryLab
            </div>
            <h2 className="mt-6 text-balance text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl md:text-[56px]">
              Um estúdio que trata sua página como <span className="text-brand">produto</span>.
            </h2>
            <p className="mt-8 max-w-lg text-[15.5px] leading-[1.8] text-muted-foreground">
              Não somos uma agência de marketing. Somos um time pequeno e sênior que entrega
              experiências web premium — feitas para parecer caras e funcionar sem falhas.
            </p>

            <div className="mt-12 grid max-w-md grid-cols-3 border-t border-[color:var(--hairline)]">
              {[
                { k: "98", l: "Nota média" },
                { k: "2–4sem", l: "Entrega" },
                { k: "+312%", l: "Conversão" },
              ].map((m) => (
                <div key={m.l} className="py-6 pr-4">
                  <div className="text-[26px] font-bold tracking-[-0.03em] text-foreground">
                    {m.k}
                  </div>
                  <div className="mt-1 text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[color:var(--hairline)]">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group flex gap-8 border-b border-[color:var(--hairline)] py-9"
              >
                <span className="font-mono text-[12px] tracking-widest text-brand">{p.n}</span>
                <div>
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
