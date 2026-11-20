import { motion } from "motion/react";
import { EASE, SVG_ORIGIN } from "../lib/motion";
import styles from "./BlueprintK.module.css";

const draw = (index: number) => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 1.7, delay: 0.3 + index * 0.28, ease: EASE },
});

/** Desenho técnico do símbolo: o K se traça sozinho e o sol acende com um pulso. */
export function BlueprintK() {
  return (
    <motion.div
      className={styles.panel}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 520 520" role="img" aria-label="Símbolo da Kuarion Labs">
        <defs>
          <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="#1d1d21" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="520" height="520" fill="url(#grid)" />
        <g
          transform="translate(34 36) scale(3.9)"
          fill="none"
          stroke="#F2F1EE"
          strokeWidth=".38"
          strokeLinejoin="round"
        >
          <motion.rect {...draw(0)} x="19" y="22" width="18" height="84" />
          <motion.polygon {...draw(1)} points="44,60 70,60 101,24 79,24" />
          <motion.polygon {...draw(2)} points="44,68 70,68 101,104 79,104" />
        </g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          stroke="#5b5a60"
          strokeWidth="1"
          strokeDasharray="5 5"
          fill="none"
        >
          <path d="M60 286H500" />
          <path d="M357 60V490" />
          <circle cx="357" cy="286" r="58" />
        </motion.g>
        <motion.circle
          style={SVG_ORIGIN}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 110, damping: 11, delay: 1.9 }}
          cx="357"
          cy="286"
          r="39"
          fill="#E8821A"
        />
        <motion.circle
          style={SVG_ORIGIN}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 2.1], opacity: [0.7, 0] }}
          transition={{ duration: 2.6, delay: 2.6, repeat: Infinity, ease: "easeOut" }}
          cx="357"
          cy="286"
          r="39"
          fill="none"
          stroke="#E8821A"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
}
