import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Target, Gauge, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";
import { LaptopMockup } from "./LaptopMockup";

const features = [
  { icon: Target, label: "Design Estratégico" },
  { icon: Zap, label: "Alta Conversão" },
  { icon: Gauge, label: "Entrega Rápida" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 md:pt-44">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-brand" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.03] py-1.5 pl-1.5 pr-3.5 text-xs text-muted-foreground"
            >
              <span className="flex h-6 items-center gap-1.5 rounded-full bg-brand/15 px-2.5 font-semibold text-brand">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                Novo
              </span>
              Estúdio digital premium · Vagas no 1º trimestre
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-[56px] lg:text-[68px]"
            >
              Landing pages que{" "}
              <span className="text-gradient-brand">transformam visitantes</span> em clientes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground"
            >
              Design estratégico, performance rápida e experiências focadas em conversão para
              empresas que querem crescer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-[14px] font-semibold text-primary-foreground shadow-[0_18px_50px_-14px_rgba(85,227,59,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--brand-2)] hover:shadow-[0_24px_60px_-14px_rgba(85,227,59,0.85)]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-xl border-hairline bg-white/[0.03] px-5 py-3.5 text-[14px] font-semibold text-foreground transition-all hover:bg-white/[0.06]"
              >
                Ver Portfólio
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Resposta rápida
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue" /> Atendimento personalizado
              </span>
            </motion.div>

            {/* Feature strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-12 grid max-w-xl grid-cols-3 gap-3"
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group rounded-2xl border-hairline bg-card/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-card"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/12 text-brand ring-1 ring-brand/25">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <div className="mt-3 text-[13px] font-semibold text-foreground">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <LaptopMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
