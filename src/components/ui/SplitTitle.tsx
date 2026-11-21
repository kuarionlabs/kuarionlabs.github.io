import { motion, type Variants } from "motion/react";
import { Fragment } from "react";
import { EASE, IS_CRAWLER } from "../../lib/motion";
import styles from "./SplitTitle.module.css";

interface SplitTitleProps {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  /** Atraso inicial em segundos. */
  delay?: number;
  /** Anima ao montar (hero) em vez de ao entrar na tela. */
  onMount?: boolean;
}

const item: Variants = {
  hidden: { y: "112%", filter: "blur(10px)" },
  show: { y: "0%", filter: "blur(0px)", transition: { duration: 0.95, ease: EASE } },
};

/** Título cujas palavras sobem de dentro de uma máscara, uma após a outra. */
export function SplitTitle({
  text,
  as = "h2",
  className,
  delay = 0,
  onMount = false,
}: SplitTitleProps) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const parent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
  };
  const trigger = onMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { amount: 0.4 } };

  return (
    <Tag className={className} variants={parent} initial={IS_CRAWLER ? "show" : "hidden"} aria-label={text} {...trigger}>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 && " "}
          <span className={styles.word} aria-hidden="true">
            <motion.span className={styles.inner} variants={item}>
              {word}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
