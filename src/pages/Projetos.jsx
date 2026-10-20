import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProfileHeader, { PageFooter } from "@/components/ProfileHeader";
import { PROJECTS } from "@/constants";

export default function Projetos() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center gap-8 px-6 pb-16 pt-28 text-center sm:gap-10">
        <ProfileHeader />
        <div className="wavy-divider w-full max-w-3xl" />
        <div className="w-full max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="chip"
          >
            meus projetos
          </motion.span>
          <div className="mt-8 grid gap-6 sm:grid-cols-2" data-testid="projects-grid">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.id}
                data-testid={`project-card-${p.id}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i }}
                className="group flex h-full flex-col overflow-hidden border border-[var(--cor-linha)] bg-[var(--cor-superficie)] text-left shadow-[var(--shadow-card)] transition-all duration-500 hover:border-[rgba(242,179,44,.55)] hover:shadow-[var(--shadow-card),var(--glow-acento)]"
              >
                <div className="overflow-hidden border-b border-[var(--cor-linha)]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="aspect-video w-full object-cover brightness-90 saturate-[.85] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-100 group-hover:saturate-[1.1]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-2 text-[11px] text-[var(--cor-acento)]">
                      {p.index}
                    </span>
                    <span className="font-mono-2 text-[10px] uppercase tracking-[0.16em] text-[var(--cor-texto-dim)]">
                      {p.cat}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--cor-texto-dim)]">{p.desc}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`project-link-${p.id}`}
                    className="mt-auto inline-flex items-center gap-2 pt-3 font-mono-2 text-xs uppercase tracking-[0.14em] text-[var(--cor-texto)] underline decoration-[var(--cor-acento)] underline-offset-4 transition-colors hover:text-[var(--cor-acento)]"
                  >
                    Acessar projeto
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-8 font-mono-2 text-[11px] uppercase tracking-[0.16em] text-[var(--cor-texto-dim)]">
            + projetos em breve — a cada módulo do programa trilhas
          </p>
        </div>
      </section>
      <div className="mt-auto">
        <PageFooter />
      </div>
    </main>
  );
}
