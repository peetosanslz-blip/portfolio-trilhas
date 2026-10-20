import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { PROFILE } from "@/constants";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-4 text-center" data-testid="profile-header">
      <Link to="/" data-testid="profile-avatar-link" className="avatar-ring size-20 sm:size-24">
        <img src={PROFILE.avatar} alt={PROFILE.avatarAlt} />
      </Link>
      <div>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Ednardo Sousa
        </h1>
        <p className="mt-1 font-serif-i text-lg text-[var(--cor-texto-dim)] sm:text-xl">
          {PROFILE.role}
        </p>
      </div>
      <a
        href={PROFILE.github}
        target="_blank"
        rel="noreferrer"
        data-testid="profile-github"
        aria-label="GitHub de Ednardo"
        className="mt-1 inline-flex items-center gap-2 font-mono-2 text-[11px] uppercase tracking-[0.16em] text-[var(--cor-texto-dim)] transition-colors hover:text-[var(--cor-acento)]"
      >
        <Github className="size-4" />
        github
      </a>
    </div>
  );
}

export function PageFooter() {
  return (
    <footer className="border-t border-[var(--cor-linha)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 sm:px-8">
        <p className="font-mono-2 text-[10px] uppercase tracking-[0.16em] text-[var(--cor-texto-dim)]">
          © {new Date().getFullYear()} ednardo sousa — programa trilhas
        </p>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          data-testid="footer-github"
          aria-label="GitHub de Ednardo"
          className="text-[var(--cor-texto-dim)] transition-colors hover:text-[var(--cor-acento)]"
        >
          <Github className="size-4" />
        </a>
      </div>
    </footer>
  );
}
