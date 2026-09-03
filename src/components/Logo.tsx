type LogoProps = {
  className?: string;
  tone?: "default" | "inverse";
  showText?: boolean;
};

export function Logo({ className = "", tone = "default", showText = true }: LogoProps) {
  const title = tone === "inverse" ? "text-primary-foreground" : "text-primary-deep";
  const sub = tone === "inverse" ? "text-primary-foreground/70" : "text-muted-foreground";

  return (
    <div className={`flex min-w-0 items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Olori Adeola Relief Foundation logo"
        className="h-11 w-11 shrink-0"
      >
        <circle cx="32" cy="17" r="10" fill="none" strokeWidth="4" className="stroke-gold" />
        <circle cx="20" cy="40" r="10" fill="none" strokeWidth="4" className="stroke-primary" />
        <circle cx="44" cy="40" r="10" fill="none" strokeWidth="4" className="stroke-ember" />
      </svg>
      {showText && (
        <span className="min-w-0 leading-tight">
          <span className={`block truncate font-display text-[15px] font-bold sm:text-base ${title}`}>
            Olori Adeola Relief Foundation
          </span>
          <span className={`block truncate text-[11px] tracking-wide uppercase ${sub}`}>
            Breaking Barriers, Building Futures
          </span>
        </span>
      )}
    </div>
  );
}
