import { Link, NavLink } from "react-router-dom";
import { Github } from "lucide-react";
import { PROFILE } from "@/constants";

const LINKS = [
  { to: "/", label: "início", id: "nav-home" },
  { to: "/sobre", label: "sobre", id: "nav-sobre" },
  { to: "/projetos", label: "projetos", id: "nav-projetos" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--cor-linha)] bg-[rgba(11,11,9,.88)] backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-8">
        <Link to="/" data-testid="brand-link" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-[var(--cor-texto)]">
            EDNARDO
          </span>
          <span className="font-mono-2 text-[10px] uppercase tracking-[0.2em] text-[var(--cor-acento)]">
            dev
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-7">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={l.id}
              className={({ isActive }) =>
                `font-mono-2 text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 sm:text-[11px] ${
                  isActive
                    ? "text-[var(--cor-acento)]"
                    : "text-[var(--cor-texto-dim)] hover:text-[var(--cor-texto)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-github"
            aria-label="GitHub de Ednardo"
            className="text-[var(--cor-texto-dim)] transition-colors duration-200 hover:text-[var(--cor-acento)]"
          >
            <Github className="size-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
