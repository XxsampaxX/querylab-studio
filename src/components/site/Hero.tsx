import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";
import { LaptopMockup } from "./LaptopMockup";

const features = [
  { label: "Design Estratégico" },
  { label: "Alta Conversão" },
  { label: "Entrega Rápida" },
];

const fade = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-brand" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* LEFT */}
          <div>
            <motion.div
              {...fade}
              transition={{ duration: 0.4 }}
              className="eyebrow flex items-center gap-3"
            >
              <span className="inline-block h-px w-8 bg-[color:var(--primary)]" />
              Estratégia • Design • Tecnologia
            </motion.div>

            <motion.h1
              {...fade}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 max-w-2xl text-balance text-[42px] font-bold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-[58px] lg:text-[70px]"
            >
              Transformamos visitantes em{" "}
              <span className="text-brand">clientes</span>.
            </motion.h1>

            <motion.p
              {...fade}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 max-w-lg text-[16px] font-normal leading-[1.75] text-muted-foreground"
            >
              Design estratégico, performance rápida e experiências focadas em conversão para
              empresas que querem crescer.
            </motion.p>

            <motion.div
              {...fade}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary group px-6 py-3.5 text-[14px]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#portfolio" className="btn-ghost px-6 py-3.5 text-[14px]">
                Ver Portfólio
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-[color:var(--hairline)] pt-6"
            >
              {features.map(({ label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--primary)]" />
                  <span className="text-[13px] font-medium text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <LaptopMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
