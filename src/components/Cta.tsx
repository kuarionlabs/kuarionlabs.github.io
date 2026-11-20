import { CONTACT, mailto, SUBJECTS } from "../data/content";
import { MagneticLink } from "./ui/MagneticLink";
import { SplitTitle } from "./ui/SplitTitle";
import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section className={`section ${styles.cta}`} id="contato" aria-label="Contato">
      <div className="container">
        <SplitTitle className={styles.title} text="O que você quer colocar no ar?" />
        <MagneticLink className={`btn ${styles.button}`} href={mailto(SUBJECTS.problem)}>
          Descrever meu problema
        </MagneticLink>
        <p className={styles.note}>
          Respondemos com um plano para resolver.{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </div>
    </section>
  );
}
