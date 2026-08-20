export function Logo({ className = "", size = 34 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="QueryLab">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0.5" y="0.5" width="63" height="63" rx="10" fill="none" stroke="var(--hairline)" />
        <circle cx="28" cy="28" r="12.5" fill="none" stroke="var(--primary)" strokeWidth="3" />
        <path d="M37 37 L49 49" stroke="var(--primary)" strokeWidth="3" strokeLinecap="square" />
      </svg>
      <span className="text-[16px] font-semibold tracking-[-0.02em] text-foreground">
        query<span className="text-brand">lab</span>
      </span>
    </div>
  );
}
