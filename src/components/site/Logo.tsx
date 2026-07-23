export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
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
        <defs>
          <linearGradient id="ql-mark" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#55E33B" />
            <stop offset="1" stopColor="#078CFF" />
          </linearGradient>
          <linearGradient id="ql-mark-2" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#18C968" />
            <stop offset="1" stopColor="#55E33B" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="62" height="62" rx="16" fill="#091117" stroke="rgba(255,255,255,0.08)" />
        <circle cx="27" cy="27" r="13" fill="none" stroke="url(#ql-mark)" strokeWidth="4.5" />
        <rect
          x="35.5"
          y="35.5"
          width="18"
          height="5"
          rx="2.5"
          transform="rotate(45 35.5 35.5)"
          fill="url(#ql-mark-2)"
        />
        <circle cx="27" cy="27" r="4" fill="#55E33B" opacity="0.9" />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
        Query<span className="text-brand">Lab</span>
      </span>
    </div>
  );
}
