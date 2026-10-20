import { motion } from "framer-motion";
import ProfileHeader, { PageFooter } from "@/components/ProfileHeader";
import { ABOUT_TEXT } from "@/constants";

const TAGS = ["programa trilhas", "front-end", "lógica de programação"];

export default function Sobre() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center gap-8 px-6 pb-16 pt-28 text-center sm:gap-10">
        <ProfileHeader />
        <div className="wavy-divider w-full max-w-3xl" />
        <div className="flex max-w-2xl flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="chip"
          >
            sobre mim
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-serif-i text-3xl leading-snug text-[var(--cor-texto)] sm:text-4xl"
            data-testid="sobre-statement"
          >
            transformar ideias em interfaces intuitivas e funcionais é o que me move.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            data-testid="sobre-text"
            className="text-base leading-relaxed text-[var(--cor-texto-dim)] sm:text-lg"
          >
            {ABOUT_TEXT}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {TAGS.map((t) => (
              <span
                key={t}
                className="font-mono-2 text-[10px] uppercase tracking-[0.16em] text-[var(--cor-acento)]"
              >
                <span className="mr-2 inline-block size-1.5 rounded-full bg-[var(--cor-acento)] align-middle" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="mt-auto">
        <PageFooter />
      </div>
    </main>
  );
}
