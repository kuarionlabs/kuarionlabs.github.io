import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { STEPS } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SplitTitle } from "./ui/SplitTitle";
import styles from "./Process.module.css";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });

  return (
    <section className="section section--flush" aria-label="Como funciona">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Como funciona</div>
        </Reveal>
        <SplitTitle className="title" text="Da sua ideia ao sistema no ar." />
        <ol className={styles.line} ref={ref}>
          <motion.i
            className={styles.progress}
            style={{ scaleX: scrollYProgress }}
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal className={styles.step} delay={i * 0.1}>
                <small className={styles.index}>{String(i + 1).padStart(2, "0")}</small>
                <h3 className={styles.name}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
