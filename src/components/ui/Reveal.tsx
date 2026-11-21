import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE, IS_CRAWLER } from "../../lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Bloco que entra suavemente ao aparecer na tela e repete ao rolar de volta. */
export function Reveal({ children, delay = 0, y = 34, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={IS_CRAWLER ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
