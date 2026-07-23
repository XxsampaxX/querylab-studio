import { MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL, PHONE_DISPLAY } from "./constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo size={40} />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              A QueryLab é um estúdio de design digital premium. Construímos landing pages,
              páginas de vendas e sites institucionais que transformam visitantes em clientes.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[color:var(--brand-2)]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
              Falar no WhatsApp
            </a>
          </div>

          <FooterColumn
            title="Estúdio"
            links={[
              { l: "Serviços", h: "#services" },
              { l: "Portfólio", h: "#portfolio" },
              { l: "Processo", h: "#process" },
              { l: "Sobre", h: "#why" },
            ]}
          />
          <FooterColumn
            title="Serviços"
            links={[
              { l: "Landing Pages", h: WHATSAPP_URL },
              { l: "Sites Institucionais", h: WHATSAPP_URL },
              { l: "Páginas de Vendas", h: WHATSAPP_URL },
              { l: "Redesign", h: WHATSAPP_URL },
            ]}
          />
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Contato
            </div>
            <ul className="mt-4 space-y-3 text-[14px]">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-foreground/90 hover:text-brand"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-muted-foreground">Resposta em poucas horas</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-8 text-[12px] text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} QueryLab — Estúdio Digital Premium</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            Aceitando novos projetos
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-3 text-[14px]">
        {links.map((li) => (
          <li key={li.l}>
            <a
              href={li.h}
              target={li.h.startsWith("http") ? "_blank" : undefined}
              rel={li.h.startsWith("http") ? "noreferrer noopener" : undefined}
              className="text-foreground/90 transition-colors hover:text-brand"
            >
              {li.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
