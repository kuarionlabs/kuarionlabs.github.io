import { MARQUEE_WORDS } from "../data/content";
import styles from "./Marquee.module.css";

function Track() {
  return (
    <div className={styles.track}>
      {[0, 1].map((copy) =>
        MARQUEE_WORDS.map((word) => (
          <span key={`${copy}-${word}`} className={styles.item}>
            <span className={styles.word}>{word}</span>
            <i className={styles.dot}>●</i>
          </span>
        )),
      )}
    </div>
  );
}

/** Faixa de texto contornado que rola sem parar (decorativa). */
export function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <Track />
      <Track />
    </div>
  );
}
