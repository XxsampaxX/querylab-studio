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
    <section id="process" className="relative py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-[color:var(--hairline)] pb-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[color:var(--primary)]" />
              Processo
            </div>
            <h2 className="mt-6 max-w-2xl text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Um fluxo calmo e <span className="text-brand">deliberado</span>.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.75] text-muted-foreground">
            Todo projeto segue o mesmo sistema de quatro etapas — sem achismos, sem atrasos,
            sem surpresas no dia do lançamento.
          </p>
        </div>

        <div className="grid md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="border-b border-[color:var(--hairline)] py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="font-mono text-[12px] tracking-widest text-brand">{s.n}</span>
              <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.02em] text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
