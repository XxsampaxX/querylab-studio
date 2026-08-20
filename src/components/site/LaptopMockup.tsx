import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Activity, Sparkles } from "lucide-react";

export function LaptopMockup() {
  return (
    <div className="relative animate-float">
      {/* Laptop */}
      <div className="relative mx-auto w-full max-w-[560px]">
        <div className="rounded-[12px] border border-[#1C291E] bg-[#0A0F0A] p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
          <div className="dark relative overflow-hidden rounded-[8px] border border-[#1C291E] bg-[#050705]">
            <div className="absolute left-1/2 top-1.5 z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-[#1C291E]" />
            <DashboardUI />
          </div>
        </div>
        {/* Laptop base */}
        <div className="relative mx-auto h-3 w-[102%] -translate-x-[1%] rounded-b-[10px] bg-[#0A0F0A] ring-1 ring-[#1C291E]">
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-md bg-black/50" />
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute -left-4 top-14 hidden card-surface p-3 backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <TrendingUp className="h-4 w-4 text-brand" strokeWidth={2} />
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Conversão</div>
            <div className="text-sm font-semibold text-foreground">+312% MoM</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute -right-2 bottom-8 hidden card-surface p-3 backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <Sparkles className="h-4 w-4 text-brand" strokeWidth={2} />
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Page Score</div>
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
      <div className="flex flex-col gap-1 border-r border-[#1C291E] bg-[#0A0F0A] p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-[color:var(--primary)]" />
          <div className="text-[11px] font-semibold">QueryLab</div>
        </div>
        {["Overview", "Traffic", "Funnels", "Pages", "Reports"].map((l, i) => (
          <div
            key={l}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
              i === 0 ? "bg-[#1C291E] text-foreground" : "text-muted-foreground"
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
            <div key={label} className="rounded-lg border border-[#1C291E] bg-[#0A0F0A] p-2">
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
        <div className="flex-1 rounded-lg border border-[#1C291E] bg-[#0A0F0A] p-2.5">
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
                className="relative flex-1 origin-bottom rounded-[2px] bg-[color:var(--primary)]"
                style={{
                  height: `${h}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-[#1C291E] bg-[#0A0F0A] p-2">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Top Page</div>
            <div className="mt-1 text-[11px] font-semibold">/hero-v3</div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#1C291E]">
              <div className="h-full w-[82%] rounded-full bg-[color:var(--primary)]" />
            </div>
          </div>
          <div className="rounded-lg border border-[#1C291E] bg-[#0A0F0A] p-2">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Load Time</div>
            <div className="mt-1 text-[11px] font-semibold">0.8s</div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#1C291E]">
              <div className="h-full w-[95%] rounded-full bg-[color:var(--primary)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
