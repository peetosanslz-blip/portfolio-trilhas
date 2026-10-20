import { motion } from "framer-motion";
import { useReady } from "@/ReadyContext";

export default function RevealTitle({ lines, className = "" }) {
  const ready = useReady();
  return (
    <h1 data-testid="hero-title" className={className}>
      {lines.map((l, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            className={`block ${l.tone === "gold" ? "text-[var(--cor-acento)]" : "text-[var(--cor-texto)]"}`}
            initial={{ y: "112%" }}
            animate={ready ? { y: "0%" } : { y: "112%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
          >
            {l.text}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
