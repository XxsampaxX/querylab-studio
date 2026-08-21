import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

const services = [
  {
    title: "Landing Pages",
    desc: "Páginas únicas focadas em conversão, feitas para transformar tráfego em leads qualificados.",
    tag: "01",
  },
  {
    title: "Sites Institucionais",
    desc: "Presença de marca completa — narrativa estratégica, design refinado e entrega confiável.",
    tag: "02",
  },
  {
    title: "Páginas de Vendas",
    desc: "Páginas longas feitas para vender — estrutura persuasiva com execução premium.",
    tag: "03",
  },
  {
    title: "Redesign de Sites",
    desc: "Modernize um site existente com novo design, melhor UX e performance mensurável.",
    tag: "04",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-[color:var(--hairline)] pb-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[color:var(--primary)]" />
              Serviços
            </div>
            <h2 className="mt-6 max-w-2xl text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Soluções digitais <span className="text-brand">completas</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.75] text-muted-foreground">
            Quatro serviços, uma obsessão — construir experiências web que parecem premium e
            funcionam como uma máquina de crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative border-b border-[color:var(--hairline)] py-12 transition-colors duration-300 md:px-10 md:odd:border-r md:odd:pl-0 md:even:pr-0"
            >
              <span className="font-mono text-[12px] tracking-widest text-brand">{s.tag}</span>
              <h3 className="mt-6 text-[26px] font-semibold tracking-[-0.02em] text-foreground md:text-[30px]">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground transition-colors duration-300 group-hover:text-brand">
                Iniciar um projeto
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
