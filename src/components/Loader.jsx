import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[var(--cor-fundo)]"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <span className="loader-ring" aria-hidden="true" />
          <p
            data-testid="loader-text"
            className="font-mono-2 text-xs uppercase tracking-[0.2em] text-[var(--cor-texto-dim)]"
          >
            abrindo o portfólio...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
