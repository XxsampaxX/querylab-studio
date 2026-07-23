import { motion } from "framer-motion";
import { Layers, Globe, ShoppingBag, RefreshCw, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

const services = [
  {
    icon: Layers,
    title: "Landing Pages",
    desc: "Conversion-focused single pages engineered to turn traffic into qualified leads.",
    tag: "01",
  },
  {
    icon: Globe,
    title: "Institutional Websites",
    desc: "Complete brand presence — strategic narrative, refined design and reliable delivery.",
    tag: "02",
  },
  {
    icon: ShoppingBag,
    title: "Sales Pages",
    desc: "Long-form pages built to sell — persuasive structure with premium execution.",
    tag: "03",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Modernize an existing site with new design, better UX and measurable performance.",
    tag: "04",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-brand" /> Services
            </div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Complete digital <span className="text-gradient-brand">solutions</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Four services, one obsession — building web experiences that look premium and
            perform like a growth engine.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border-hairline bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_80px_-30px_rgba(85,227,59,0.35)]"
            >
              {/* animated gradient border on hover */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--x,50%) var(--y,0%), rgba(85,227,59,0.12), transparent 60%)",
                }}
              />
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-brand ring-1 ring-white/10 transition-all duration-500 group-hover:bg-brand/12 group-hover:ring-brand/40">
                  <s.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <span className="font-mono text-xs text-muted-foreground/70">{s.tag}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground md:text-[26px]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-foreground/80 transition-colors group-hover:text-brand">
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
