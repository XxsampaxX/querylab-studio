import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Renders fixed-size mockup UIs at a proportional scale so they stay legible
 * and never clip on small screens.
 */
export function ScaleBox({
  base = 640,
  ratio = 16 / 10,
  children,
}: {
  base?: number;
  ratio?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / base);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [base]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{ aspectRatio: `${ratio}`, containerType: "inline-size" }}
    >
      <div
        style={{
          width: `${base}px`,
          height: `${base / ratio}px`,
          transform: `scale(${scale ?? `tan(atan2(100cqw, ${base}px))`})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
