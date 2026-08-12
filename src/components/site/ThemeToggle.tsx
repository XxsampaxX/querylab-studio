import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("ql-theme") as Theme | null;
    setTheme(stored === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("ql-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      title={theme === "dark" ? "Tema claro" : "Tema escuro"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border-hairline bg-foreground/[0.03] text-foreground transition-colors hover:bg-foreground/[0.07] ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={2.2} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={2.2} />
      )}
    </button>
  );
}
