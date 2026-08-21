import type { ReactNode } from "react";

/**
 * Renders fixed-size mockup UIs at a proportional scale so they stay legible
 * and never clip on small screens. Uses container query units.
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
  return (
    <div
      className="w-full overflow-hidden"
      style={{ containerType: "inline-size", aspectRatio: `${ratio}` }}
    >
      <div
        style={{
          width: `${base}px`,
          height: `${base / ratio}px`,
          transform: `scale(calc(100cqw / ${base}))`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
