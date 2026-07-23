import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
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
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 200], ["100%", "94%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      style={{ width }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4"
    >
      <div
        className={`mx-auto flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border-hairline bg-[rgba(9,17,23,0.75)] backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center">
          <Logo size={36} />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-blue transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-[13.5px] font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(85,227,59,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--brand-2)] hover:shadow-[0_18px_50px_-10px_rgba(85,227,59,0.7)] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
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

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-2xl border-hairline bg-[rgba(9,17,23,0.95)] p-3 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-foreground/90 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
