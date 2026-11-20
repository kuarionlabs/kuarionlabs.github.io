import { SERVICES, type ServiceIcon } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SplitTitle } from "./ui/SplitTitle";
import { Tilt } from "./ui/Tilt";
import styles from "./Services.module.css";

const ICONS: Record<ServiceIcon, string> = {
  software: "M12 14h40v28H12zM24 52h16M32 42v10",
  ai: "M32 24a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM32 6v10M32 48v10M6 32h10M48 32h10M14 14l7 7M43 43l7 7M50 14l-7 7M21 43l-7 7",
  courses: "M8 20l24-10 24 10-24 10zM18 26v14c0 4 7 8 14 8s14-4 14-8V26",
};

export function Services() {
  return (
    <section className="section" id="servicos" aria-label="Serviços">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Desenvolvimento de software e sistemas</div>
        </Reveal>
        <SplitTitle className="title" text="Feito do jeito que o seu negócio precisa." />
        <div className={styles.cards}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.11}>
              <Tilt className={styles.card}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#E8821A"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={ICONS[service.icon]} />
                </svg>
                <h3 className={styles.name}>{service.title}</h3>
                <p className={styles.text}>{service.text}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
