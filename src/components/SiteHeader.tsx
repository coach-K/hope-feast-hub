import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
] as const;

const programLinks = [
  { to: "/programs/widows", label: "Widows" },
  { to: "/programs/school-outreach", label: "School Outreach" },
  { to: "/programs/back-to-school", label: "Back to School" },
  { to: "/programs/aged-care", label: "Aged Care" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const programsActive = pathname === "/programs" || pathname.startsWith("/programs/");

  const closeMenus = () => {
    setOpen(false);
    setProgramsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0" onClick={closeMenus}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            About Us
          </Link>

          <div className="group relative">
            <div className="flex items-center gap-1">
              <Link
                to="/programs"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  programsActive ? "text-primary" : "text-foreground/75"
                }`}
              >
                Our Programs
              </Link>
              <button
                type="button"
                aria-haspopup="true"
                aria-label="Show programme pages"
                className="rounded-full p-1 text-foreground/70 hover:text-primary"
              >
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
            </div>
            <div className="invisible absolute top-full left-0 z-20 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="min-w-52 rounded-2xl border border-border bg-background p-2 shadow-lift">
                {programLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "bg-secondary text-primary" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Gallery
          </Link>
          <Link
            to="/donate"
            className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-ember-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/donate"
            className="rounded-full bg-ember px-4 py-2 text-xs font-semibold text-ember-foreground"
          >
            Donate
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-border p-2 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          {links.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenus}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            aria-expanded={programsOpen}
            onClick={() => setProgramsOpen((value) => !value)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-secondary ${
              programsActive ? "text-primary" : "text-foreground/80"
            }`}
          >
            Our Programs
            <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
          </button>
          {programsOpen
            ? programLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenus}
                  className="block rounded-lg py-2.5 pr-3 pl-7 text-sm font-medium text-foreground/75 hover:bg-secondary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ))
            : null}
          <Link
            to="/gallery"
            onClick={closeMenus}
            className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
            activeProps={{ className: "text-primary" }}
          >
            Gallery
          </Link>
          <Link
            to="/donate"
            onClick={closeMenus}
            className="block rounded-lg px-3 py-3 text-sm font-semibold text-primary"
          >
            Donate Now
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
