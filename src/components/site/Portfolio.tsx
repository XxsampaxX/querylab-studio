import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./constants";
import { FitnessPreview, TechPreview, BeautyPreview } from "./portfolio-previews";

const projects = [
  {
    kind: "Personal Trainer",
    title: "Método Kaia",
    desc: "Treino de força individual — landing page focada em agendamento com 42% de taxa de leads.",
    Preview: FitnessPreview,
  },
  {
    kind: "Empresa de Tecnologia",
    title: "Northbeam",
    desc: "Site de produto de infraestrutura de IA com hero cinematográfico e documentação profunda.",
    Preview: TechPreview,
  },
  {
    kind: "Marca de Beleza",
    title: "Ateliê Lumen",
    desc: "Boutique de skincare — storytelling editorial construído para converter em e-commerce.",
    Preview: BeautyPreview,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-[color:var(--hairline)] pb-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[color:var(--primary)]" />
              Trabalhos selecionados
            </div>
            <h2 className="mt-6 max-w-2xl text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Projetos que <span className="text-brand">convertem</span>.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.75] text-muted-foreground">
            Um recorte dos lançamentos recentes — todo projeto é desenhado, construído e
            entregue com o mesmo padrão de acabamento.
          </p>
        </div>

        <div>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className={`group grid items-center gap-10 border-b border-[color:var(--hairline)] py-14 md:grid-cols-[1.3fr_1fr] md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="dark relative overflow-hidden rounded-[10px] border border-[#1C291E] bg-[#050705]">
                <div className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <ScaleBox base={640} ratio={16 / 10}>
                    <p.Preview />
                  </ScaleBox>
                </div>
              </div>

              <div>
                <div className="eyebrow text-[color:var(--primary)]">{p.kind}</div>
                <h3 className="mt-4 text-[28px] font-bold tracking-[-0.03em] text-foreground md:text-[36px]">
                  {p.title}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-muted-foreground">
                  {p.desc}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                  {["Estratégia", "Design", "Desenvolvimento", "Lançamento"].map((t) => (
                    <span key={t} className="text-[12px] font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-9 inline-flex items-center gap-2 border-b border-[color:var(--hairline)] pb-1 text-[14px] font-medium text-foreground transition-colors duration-200 hover:border-[color:var(--primary)] hover:text-brand"
                >
                  Solicitar um projeto similar
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
