import { mailto, SUBJECTS } from "../data/content";
import { BlueprintK } from "./BlueprintK";
import { MagneticLink } from "./ui/MagneticLink";
import { Reveal } from "./ui/Reveal";
import { SplitTitle } from "./ui/SplitTitle";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={`container ${styles.grid}`}>
        <div>
          <SplitTitle
            as="h1"
            className={styles.title}
            text="Conte o problema. Receba a solução."
            delay={1}
            onMount
          />
          <Reveal delay={1.6}>
            <p className={styles.lead}>
              Sites, sistemas e aplicativos completos, e IA que tira trabalho manual da sua
              operação. Você entende, usa e fica com tudo.
            </p>
          </Reveal>
          <Reveal delay={1.8} className={styles.actions}>
            <MagneticLink className="btn" href={mailto(SUBJECTS.problem)}>
              Descrever meu problema
            </MagneticLink>
            <MagneticLink className="btn btn--ghost" href="#servicos">
              Ver como funciona
            </MagneticLink>
          </Reveal>
        </div>
        <BlueprintK />
      </div>
    </section>
  );
}
