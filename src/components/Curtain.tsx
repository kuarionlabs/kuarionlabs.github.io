import { motion } from "motion/react";
import { useState } from "react";
import { Logo } from "./Logo";
import styles from "./Curtain.module.css";

/** Cortina de abertura: cobre a página com o logo e sobe revelando o conteúdo. */
export function Curtain() {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <motion.div
      className={styles.curtain}
      aria-hidden="true"
      initial={{ y: "0%" }}
      animate={{ y: "-101%" }}
      transition={{ duration: 0.9, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
    >
      <motion.div animate={{ opacity: 0 }} transition={{ delay: 0.55, duration: 0.4 }}>
        <Logo className={styles.logo} color="#F2F1EE" />
      </motion.div>
    </motion.div>
  );
}
