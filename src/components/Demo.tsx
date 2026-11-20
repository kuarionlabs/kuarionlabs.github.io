import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CHAT, type ChatMessage } from "../data/content";
import { Logo } from "./Logo";
import { Reveal } from "./ui/Reveal";
import { SplitTitle } from "./ui/SplitTitle";
import styles from "./Demo.module.css";

interface Shown extends ChatMessage {
  /** Texto exibido até agora (o cliente "digita" a mensagem). */
  shown: string;
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** Conversa de WhatsApp ilustrativa que se escreve sozinha enquanto está visível. */
export function Demo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.4 });
  const [messages, setMessages] = useState<Shown[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    const wait = async (ms: number) => {
      if (!reduce) await sleep(ms);
    };

    async function play() {
      while (!cancelled) {
        setMessages([]);
        for (const message of CHAT) {
          if (cancelled) return;
          if (message.from === "company") {
            setTyping(true);
            await wait(900 + message.text.length * 12);
            if (cancelled) return;
            setTyping(false);
          } else {
            await wait(500);
          }
          setMessages((prev) => [...prev, { ...message, shown: "" }]);
          if (message.from === "client" && !reduce) {
            for (let i = 1; i <= message.text.length; i++) {
              if (cancelled) return;
              const shown = message.text.slice(0, i);
              setMessages((prev) =>
                prev.map((m, idx) => (idx === prev.length - 1 ? { ...m, shown } : m)),
              );
              await sleep(16);
            }
          } else {
            setMessages((prev) =>
              prev.map((m, idx) => (idx === prev.length - 1 ? { ...m, shown: message.text } : m)),
            );
          }
          await wait(450);
        }
        if (reduce) return;
        await sleep(5000);
      }
    }

    void play();
    return () => {
      cancelled = true;
      setTyping(false);
    };
  }, [visible, reduce]);

  return (
    <section className="section section--flush" aria-label="Na prática">
      <div className={`container ${styles.grid}`}>
        <div>
          <Reveal>
            <div className="eyebrow">Na prática</div>
          </Reveal>
          <SplitTitle className={styles.title} text="Do problema à solução." />
          <Reveal>
            <p className={styles.lead}>Você explica o que precisa. A gente cuida do resto.</p>
          </Reveal>
        </div>
        <Reveal>
          <div className={styles.phone} ref={ref}>
            <div className={styles.head}>
              <span className={styles.avatar}>
                <Logo className={styles.avatarLogo} color="#F2F1EE" />
              </span>
              <span>
                <b className={styles.name}>Kuarion Labs</b>
                <em className={typing ? styles.typing : styles.status}>
                  {typing ? "digitando…" : "online"}
                </em>
              </span>
            </div>
            <div className={styles.chat} aria-live="off">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`${styles.bubble} ${m.from === "client" ? styles.me : styles.them}`}
                >
                  <span>{m.shown}</span>
                  <i className={styles.time}>
                    {m.time}
                    {m.from === "client" && <b className={styles.ticks}>✓✓</b>}
                  </i>
                </div>
              ))}
            </div>
            <small className={styles.note}>Exemplo ilustrativo de conversa</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
