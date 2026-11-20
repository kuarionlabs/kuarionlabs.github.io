import { mailto, SUBJECTS } from "../data/content";
import { MagneticLink } from "./ui/MagneticLink";
import { Reveal } from "./ui/Reveal";
import styles from "./Courses.module.css";

export function Courses() {
  return (
    <section className="section section--flush" aria-label="Cursos">
      <div className="container">
        <Reveal className={styles.box}>
          <div>
            <span className={styles.pill}>Em breve</span>
            <h2 className={styles.title}>Cursos de programação e IA.</h2>
          </div>
          <MagneticLink className="btn" href={mailto(SUBJECTS.waitlist)}>
            Entrar na lista
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}
