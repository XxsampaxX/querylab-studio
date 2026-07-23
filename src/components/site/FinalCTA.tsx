import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY } from "./constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[36px] border-hairline bg-gradient-to-b from-card via-card/80 to-surface p-10 md:p-20">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue/25 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-brand" /> Vamos construir
            </div>

            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-[72px]">
              Pronto para transformar{" "}
              <span className="text-gradient-brand">cliques em clientes?</span>
            </h2>

            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
              Envie uma mensagem no WhatsApp — respondemos em poucas horas com o próximo passo
              claro.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 text-[15px] font-semibold text-primary-foreground shadow-[0_20px_60px_-16px_rgba(85,227,59,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--brand-2)] hover:shadow-[0_28px_80px_-14px_rgba(85,227,59,0.9)]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`tel:+5513996524953`}
                className="inline-flex items-center gap-3 rounded-2xl border-hairline bg-white/[0.03] px-5 py-4 text-[15px] font-semibold text-foreground transition-all hover:bg-white/[0.06]"
              >
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
