import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { mailto, SUBJECTS } from "../data/content";
import { EASE } from "../lib/motion";
import { Logo } from "./Logo";
import { MagneticLink } from "./ui/MagneticLink";
import styles from "./Header.module.css";

/** Menu fixo que some ao rolar para baixo e volta ao rolar para cima. */
export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 240);
  });

  return (
    <motion.header
      className={styles.header}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <div className={`container ${styles.row}`}>
        <a className={styles.brand} href="#topo" aria-label="Kuarion Labs, início">
          <Logo className={styles.logo} color="#F2F1EE" />
          kuarion labs
        </a>
        <MagneticLink className="btn btn--small" href={mailto(SUBJECTS.problem)}>
          Fale conosco
        </MagneticLink>
      </div>
    </motion.header>
  );
}
