import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY } from "./constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-brand" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-y border-[color:var(--hairline)] py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[color:var(--primary)]" />
              Vamos construir
            </div>

            <h2 className="mt-8 max-w-3xl text-balance text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl md:text-[64px]">
              Pronto para transformar <span className="text-brand">cliques em clientes?</span>
            </h2>

            <p className="mt-8 max-w-lg text-[15.5px] leading-[1.8] text-muted-foreground">
              Envie uma mensagem no WhatsApp — respondemos em poucas horas com o próximo passo
              claro.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
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

              <a href="tel:+5513996524953" className="btn-ghost px-6 py-3.5 text-[14px]">
                <Phone className="h-4 w-4 text-brand" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
