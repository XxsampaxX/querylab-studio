import { motion } from "framer-motion";
import { Award, TrendingUp, Rocket, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: Award,
    title: "Premium Design",
    desc: "Editorial typography, refined spacing, considered motion. Every detail is intentional.",
  },
  {
    icon: TrendingUp,
    title: "Conversion",
    desc: "Structured around a single question: what makes the visitor say yes today?",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Sharp scope, focused sprints, weekly reviews — most projects launch in 2 to 4 weeks.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Support",
    desc: "You talk directly with the designer building your page. No account managers.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative py-32 md:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-radial-brand opacity-70" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-brand" /> Why QueryLab
            </div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              A studio that treats your page like a{" "}
              <span className="text-gradient-brand">product</span>.
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted-foreground">
              We're not a marketing agency. We're a small, senior team that ships premium web
              experiences — engineered to look expensive and behave flawlessly.
            </p>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { k: "98", l: "Avg. Page Score" },
                { k: "2–4w", l: "Delivery" },
                { k: "+312%", l: "Conversion Lift" },
              ].map((m) => (
                <div key={m.l} className="rounded-2xl border-hairline bg-card/70 p-4">
                  <div className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {m.k}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex gap-5 rounded-3xl border-hairline bg-card/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-card md:p-8"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand/12 text-brand ring-1 ring-brand/25 transition-transform duration-500 group-hover:rotate-[-4deg]">
                  <p.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
