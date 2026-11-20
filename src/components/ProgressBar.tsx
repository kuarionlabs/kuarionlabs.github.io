import { motion, useScroll } from "motion/react";
import styles from "./ProgressBar.module.css";

/** Barra fina no topo que acompanha o progresso de leitura. */
export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return <motion.i className={styles.bar} style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}
