import { MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { WHATSAPP_URL } from "./constants";

const NAV = [
  { label: "Serviços", href: "#services" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#process" },
  { label: "Sobre", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-[color:var(--hairline)] bg-[color:var(--header-bg)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
          <a href="#top" className="flex items-center">
            <Logo size={32} />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium tracking-[-0.01em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary hidden px-4 py-2.5 text-[13px] md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Falar no WhatsApp
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg border-hairline p-2 text-foreground md:hidden"
              aria-label="Abrir menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-b border-[color:var(--hairline)] bg-[color:var(--header-bg-solid)] backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[color:var(--hairline)] py-3.5 text-sm text-foreground/90 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary mt-4 justify-center px-4 py-3 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
