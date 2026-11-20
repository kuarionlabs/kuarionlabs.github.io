import { CONTACT } from "../data/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <span>
          © {new Date().getFullYear()} Kuarion Labs · Atendimento remoto para qualquer lugar,
          inclusive Presidente Prudente e Curitiba
        </span>
        <span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          {" · "}
          <a href={CONTACT.instagram} rel="noopener noreferrer" target="_blank">
            @kuarionlabs
          </a>
        </span>
      </div>
    </footer>
  );
}
