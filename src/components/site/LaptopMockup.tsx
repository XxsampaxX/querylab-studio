import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Activity, Sparkles } from "lucide-react";

export function LaptopMockup() {
  return (
    <div className="relative animate-float">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px] animate-pulse-glow" />
        <div className="absolute left-1/3 top-2/3 h-[220px] w-[320px] -translate-y-1/2 rounded-full bg-blue/25 blur-[120px]" />
      </div>

      {/* Laptop */}
      <div className="relative mx-auto w-full max-w-[560px]">
        {/* Screen bezel */}
        <div className="rounded-[22px] border border-white/10 bg-gradient-to-b from-[#1a252d] to-[#0b1218] p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
          <div className="dark relative overflow-hidden rounded-[14px] border border-white/10 bg-[#050A0E]">
            {/* Camera notch */}
            <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/20" />
            <DashboardUI />
          </div>
        </div>
        {/* Laptop base */}
        <div className="relative mx-auto h-3 w-[102%] -translate-x-[1%] rounded-b-[14px] bg-gradient-to-b from-[#1a252d] to-[#0a1015] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]">
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-lg bg-black/40" />
        </div>
        {/* Reflection */}
        <div className="mx-auto mt-6 h-24 w-[80%] bg-gradient-to-b from-brand/10 to-transparent blur-2xl" />
      </div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -left-4 top-16 hidden rounded-2xl border-hairline bg-card/95 p-3 backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 text-brand">
            <TrendingUp className="h-4 w-4" strokeWidth={2.4} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Conversion</div>
            <div className="text-sm font-semibold text-foreground">+312% MoM</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="absolute -right-2 bottom-10 hidden rounded-2xl border-hairline bg-card/95 p-3 backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue/15 text-blue">
            <Sparkles className="h-4 w-4" strokeWidth={2.4} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Page Score</div>
            <div className="text-sm font-semibold text-foreground">98 · Perfect</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DashboardUI() {
  const bars = [40, 62, 48, 78, 55, 88, 72, 95, 82, 100, 90];
  return (
    <div className="grid h-[340px] grid-cols-[130px_1fr] text-foreground sm:h-[380px]">
      {/* Sidebar */}
      <div className="flex flex-col gap-1 border-r border-white/5 bg-[#070E13] p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-brand to-blue" />
          <div className="text-[11px] font-semibold">QueryLab</div>
        </div>
        {["Overview", "Traffic", "Funnels", "Pages", "Reports"].map((l, i) => (
          <div
            key={l}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
              i === 0 ? "bg-white/5 text-foreground" : "text-muted-foreground"
            }`}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-brand/60" />
            {l}
          </div>
        ))}
        <div className="mt-auto rounded-lg border border-brand/30 bg-brand/10 p-2">
          <div className="text-[9px] text-brand">CONVERSIONS</div>
          <div className="text-sm font-semibold text-foreground">1,284</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5 p-3">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-muted-foreground">Landing Page</div>
            <div className="text-[12px] font-semibold">Performance overview</div>
          </div>
          <div className="flex items-center gap-1.5 rounded-md bg-brand px-2 py-1 text-[10px] font-semibold text-primary-foreground">
            Publish <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Users, label: "Visitors", value: "42.8k", change: "+18%" },
            { icon: Activity, label: "CTR", value: "8.4%", change: "+3.1%" },
            { icon: TrendingUp, label: "Revenue", value: "$62k", change: "+41%" },
          ].map(({ icon: Icon, label, value, change }) => (
            <div key={label} className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <div className="flex items-center justify-between">
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
                <Icon className="h-2.5 w-2.5 text-brand" />
              </div>
              <div className="mt-1 text-[13px] font-semibold">{value}</div>
              <div className="text-[8.5px] text-brand">{change}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
          <div className="mb-1.5 flex items-center justify-between">
            <div className="text-[10px] font-semibold">Traffic · Last 14d</div>
            <div className="flex gap-1">
              <div className="rounded bg-brand/15 px-1.5 py-0.5 text-[8.5px] text-brand">Live</div>
            </div>
          </div>
          <div className="flex h-[110px] items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="relative flex-1 origin-bottom rounded-t bg-gradient-to-t from-brand/70 to-blue/70"
                style={{
                  height: `${h}%`,
                  animation: `barGrow 1.2s cubic-bezier(.2,.8,.2,1) ${i * 60}ms both`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Top Page</div>
            <div className="mt-1 text-[11px] font-semibold">/hero-v3</div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-brand to-blue" />
            </div>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Load Time</div>
            <div className="mt-1 text-[11px] font-semibold">0.8s</div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-brand to-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
