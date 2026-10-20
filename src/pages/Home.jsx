import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github } from "lucide-react";
import RevealTitle from "@/components/RevealTitle";
import StickerButtons from "@/components/StickerButtons";
import Marquee from "@/components/Marquee";
import { PROFILE } from "@/constants";
import { useReady } from "@/ReadyContext";

export default function Home() {
  const ready = useReady();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });
  const ax = useTransform(sx, [-1, 1], [-14, 14]);
  const ay = useTransform(sy, [-1, 1], [-10, 10]);
  const gx = useTransform(sx, [-1, 1], [34, -34]);
  const gy = useTransform(sy, [-1, 1], [24, -24]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  const fade = (d) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  });

  return (
    <main onMouseMove={onMove} className="relative flex min-h-screen flex-col overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ x: gx, y: gy }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,179,44,.15),transparent_65%)]"
      />
      <section className="relative flex flex-1 flex-col items-center justify-center gap-6 px-6 pb-14 pt-28 text-center sm:gap-7">
        <motion.p {...fade(0.1)} className="chip">
          portfólio — vol. 01
        </motion.p>
        <motion.div
          style={{ x: ax, y: ay }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="avatar-ring size-28 sm:size-36"
        >
          <img data-testid="avatar" src={PROFILE.avatar} alt={PROFILE.avatarAlt} />
        </motion.div>
        <RevealTitle
          lines={[{ text: "EDNARDO" }, { text: "SOUSA", tone: "gold" }]}
          className="hero-title font-display uppercase"
        />
        <motion.p
          {...fade(0.4)}
          data-testid="tagline"
          className="wavy-underline font-serif-i text-xl text-[var(--cor-texto-dim)] sm:text-2xl"
        >
          {PROFILE.role}
        </motion.p>
        <motion.div {...fade(0.55)} className="mt-1 flex w-full justify-center">
          <StickerButtons />
        </motion.div>
        <motion.a
          {...fade(0.7)}
          data-testid="home-github"
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex items-center gap-2 font-mono-2 text-[11px] uppercase tracking-[0.16em] text-[var(--cor-texto-dim)] transition-colors hover:text-[var(--cor-acento)]"
        >
          <Github className="size-5" />
          github
        </motion.a>
      </section>
      <Marquee />
    </main>
  );
}
