import { COMMITMENTS } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SplitTitle } from "./ui/SplitTitle";
import styles from "./Commitments.module.css";

export function Commitments() {
  return (
    <section className="section section--flush" aria-label="Por que a Kuarion">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Por que a Kuarion</div>
        </Reveal>
        <SplitTitle className="title" text="Tranquilidade do começo ao fim." />
        <ul className={styles.chips}>
          {COMMITMENTS.map((item, i) => (
            <li key={item}>
              <Reveal className={styles.chip} delay={i * 0.11}>
                {item}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
