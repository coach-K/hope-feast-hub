import logoMark from "@/assets/images/logo.jpg";

type LogoProps = {
  className?: string;
  tone?: "default" | "inverse";
  showText?: boolean;
};

export function Logo({ className = "", tone = "default", showText = true }: LogoProps) {
  const title = tone === "inverse" ? "text-primary-foreground" : "text-primary-deep";
  const sub = tone === "inverse" ? "text-gold" : "text-muted-foreground";

  return (
    <div className={`flex min-w-0 items-center gap-3 ${className}`}>
      <img
        src={logoMark}
        alt="Olori Adeola Relief Foundation logo"
        width={64}
        height={64}
        className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gold/70"
      />
      {showText && (
        <span className="min-w-0 leading-tight">
          <span className={`block font-display text-[13px] leading-tight font-bold sm:text-sm ${title}`}>
            OLORI ADEOLA RELIEF FOUNDATION
          </span>
          <span className={`mt-0.5 block text-[11px] tracking-wide ${sub}`}>
            Breaking Barriers, Building Futures.
          </span>
        </span>
      )}
    </div>
  );
}
