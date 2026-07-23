import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./constants";
import { FitnessPreview, TechPreview, BeautyPreview } from "./portfolio-previews";

const projects = [
  {
    kind: "Personal Trainer",
    title: "Método Kaia",
    desc: "Treino de força individual — landing page focada em agendamento com 42% de taxa de leads.",
    accent: "from-brand/40 to-blue/30",
    Preview: FitnessPreview,
  },
  {
    kind: "Empresa de Tecnologia",
    title: "Northbeam",
    desc: "Site de produto de infraestrutura de IA com hero cinematográfico e documentação profunda.",
    accent: "from-blue/40 to-brand/20",
    Preview: TechPreview,
  },
  {
    kind: "Marca de Beleza",
    title: "Ateliê Lumen",
    desc: "Boutique de skincare — storytelling editorial construído para converter em e-commerce.",
    accent: "from-[#ff8fb1]/30 to-brand/25",
    Preview: BeautyPreview,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 md:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-radial-brand opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-brand" /> Trabalhos selecionados
            </div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Projetos que <span className="text-gradient-brand">convertem</span>.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Um recorte dos lançamentos recentes — todo projeto é desenhado, construído e
            entregue com o mesmo padrão de acabamento.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`group grid items-center gap-8 rounded-[28px] border-hairline bg-card/60 p-6 backdrop-blur-sm md:grid-cols-[1.35fr_1fr] md:gap-12 md:p-8 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl border-hairline bg-[#0a1319]">
                <div
                  className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-30 blur-2xl`}
                />
                <div className="relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <p.Preview />
                </div>
              </div>

              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
                  {p.kind}
                </div>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Estratégia", "Design", "Desenvolvimento", "Lançamento"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border-hairline bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-foreground transition-colors hover:text-brand"
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
