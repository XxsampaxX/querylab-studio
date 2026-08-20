import { Dumbbell, Sparkles, Cpu, ArrowRight, Star, Play } from "lucide-react";

/* -------- Fitness Coach -------- */
export function FitnessPreview() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0b0f0a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(65,107,58,0.28),transparent_60%)]" />
      <div className="absolute inset-0 grid grid-cols-[1fr_1.1fr]">
        <div className="p-5 sm:p-7">
          <div className="flex items-center gap-1.5 text-[9px] font-semibold tracking-widest text-brand">
            <Dumbbell className="h-3 w-3" /> MÉTODO KAIA
          </div>
          <div className="mt-3 text-[15px] leading-[1.05] font-bold sm:text-[22px]">
            Treine com<br />propósito real.
          </div>
          <div className="mt-2 max-w-[180px] text-[8.5px] leading-snug text-white/60 sm:text-[10px]">
            Programa de força de 12 semanas com acompanhamento individual.
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="rounded-md bg-brand px-2 py-1 text-[8.5px] font-semibold text-[#04120A]">
              Agendar
            </div>
            <div className="rounded-md border border-white/15 px-2 py-1 text-[8.5px] font-semibold">
              Programas
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[8px] text-white/60">
            <div className="flex -space-x-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-3.5 w-3.5 rounded-full border border-black bg-[color:var(--primary)]" />
              ))}
            </div>
            <span>+ 240 alunos treinados</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-[#1a2a1a] via-[#0f1a10] to-[#08110a]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><path d=%22M0 20h40M20 0v40%22 stroke=%22rgba(85,227,59,0.06)%22 stroke-width=%221%22/></svg>')]" />
            <div className="absolute inset-4 rounded-lg border border-brand/25 bg-black/40 p-2.5">
              <div className="flex items-center justify-between text-[8px] text-white/60">
                <span>TREINO</span>
                <span className="text-brand">Semana 4</span>
              </div>
              <div className="mt-2 text-[11px] font-bold">Inferiores · Pesado</div>
              <div className="mt-2 space-y-1">
                {[
                  { n: "Agachamento", s: "5×5" },
                  { n: "Terra Romeno", s: "4×8" },
                  { n: "Búlgaro", s: "3×10" },
                ].map((x) => (
                  <div key={x.n} className="flex justify-between rounded-md bg-white/5 px-2 py-1 text-[8.5px]">
                    <span>{x.n}</span>
                    <span className="text-brand">{x.s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 h-1 rounded-full bg-white/10">
                <div className="h-full w-3/5 rounded-full bg-[color:var(--primary)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------- Tech Company -------- */
export function TechPreview() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050a10] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(65,107,58,0.22),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold">
          <Cpu className="h-3 w-3 text-blue" /> Northbeam
        </div>
        <div className="hidden gap-3 text-[9px] text-white/60 sm:flex">
          <span>Produto</span><span>Docs</span><span>Preços</span><span>Blog</span>
        </div>
        <div className="rounded-md bg-white px-2 py-1 text-[9px] font-semibold text-[#050a10]">
          Começar
        </div>
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[8px] text-white/70">
          <span className="h-1 w-1 rounded-full bg-brand" /> Novo · v3.2 disponível
        </div>
        <div className="mt-2 text-[18px] font-semibold leading-[1.05] tracking-tight sm:text-[26px]">
          Infraestrutura<br />
          <span className="text-white">
            para times de IA.
          </span>
        </div>
        <div className="mx-auto mt-2 max-w-[220px] text-[9px] leading-snug text-white/60">
          Faça deploy de modelos na borda com um único comando.
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5">
          <div className="rounded-md bg-white px-2 py-1 text-[8.5px] font-semibold text-[#050a10]">Testar grátis</div>
          <div className="flex items-center gap-1 rounded-md border border-white/15 px-2 py-1 text-[8.5px]">
            <Play className="h-2 w-2" /> Ver demo
          </div>
        </div>
      </div>
      <div className="absolute inset-x-6 bottom-3 grid grid-cols-4 gap-1.5 opacity-60">
        {["Stripe", "Vercel", "Linear", "Notion"].map((b) => (
          <div key={b} className="rounded border border-white/10 py-1 text-center text-[7.5px] text-white/70">
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------- Beauty Brand -------- */
export function BeautyPreview() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#1a0f12] via-[#0d0709] to-[#050203] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_30%,rgba(255,143,177,0.2),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-3 text-[10px]">
        <div className="italic font-semibold tracking-wide">Ateliê Lumen</div>
        <div className="hidden gap-3 text-white/60 sm:flex">
          <span>Loja</span><span>Rituais</span><span>Diário</span>
        </div>
        <div className="rounded-full border border-white/20 px-2 py-1 text-[9px]">Sacola · 2</div>
      </div>
      <div className="absolute inset-0 grid grid-cols-[1fr_1fr] pt-10">
        <div className="p-5 sm:p-7">
          <div className="text-[9px] uppercase tracking-[0.2em] text-[#ff8fb1]">
            <Sparkles className="mr-1 inline h-2.5 w-2.5" />
            Novo Ritual
          </div>
          <div className="mt-2 font-serif text-[20px] leading-[1.05] sm:text-[28px]" style={{ fontFamily: "Georgia, serif" }}>
            Skincare, refinado à sua essência.
          </div>
          <div className="mt-2 max-w-[190px] text-[9px] leading-snug text-white/60">
            Formulações em pequenos lotes feitas em São Paulo.
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[8.5px] font-semibold text-black">
              Ver o ritual <ArrowRight className="h-2.5 w-2.5" />
            </div>
            <div className="flex items-center gap-0.5 text-[8px] text-white/60">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-2 w-2 fill-[#ff8fb1] text-[#ff8fb1]" />
              ))}
              <span className="ml-1">4.9 · 1.2k</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-3 grid grid-cols-2 gap-1.5">
            {[
              { name: "Sérum 01", price: "R$ 289" },
              { name: "Bálsamo 03", price: "R$ 189" },
              { name: "Essência", price: "R$ 229" },
              { name: "Bruma", price: "R$ 149" },
            ].map((p) => (
              <div key={p.name} className="relative overflow-hidden rounded-md bg-gradient-to-br from-[#2a1a1e] to-[#0f0709] p-2">
                <div className="h-8 rounded bg-gradient-to-br from-[#ff8fb1]/30 to-white/5" />
                <div className="mt-1.5 text-[8.5px] font-semibold">{p.name}</div>
                <div className="text-[8px] text-white/50">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
