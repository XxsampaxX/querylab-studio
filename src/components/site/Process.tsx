import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Briefing",
    desc: "Mapeamos o seu negócio, público e objetivos para definir como é o sucesso.",
  },
  {
    n: "02",
    title: "Estratégia",
    desc: "Posicionamento, arquitetura de mensagem e fluxo de conversão — antes de um único pixel.",
  },
  {
    n: "03",
    title: "Design & Desenvolvimento",
    desc: "Design editorial combinado com código de produção, motion e performance.",
  },
  {
    n: "04",
    title: "Lançamento",
    desc: "Publique rápido, meça, itere. Sua página vai ao ar otimizada de ponta a ponta.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-brand" /> Processo
            </div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Um fluxo calmo e <span className="text-gradient-brand">deliberado</span>.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Todo projeto segue o mesmo sistema de quatro etapas — sem achismos, sem atrasos,
            sem surpresas no dia do lançamento.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px overflow-hidden md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-px origin-left bg-gradient-to-r from-transparent via-brand/60 to-transparent"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-hairline bg-background font-mono text-[13px] font-semibold text-brand shadow-[0_0_0_6px_rgba(85,227,59,0.06)]">
                  {s.n}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
