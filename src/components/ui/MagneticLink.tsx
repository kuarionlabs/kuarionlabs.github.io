import { motion, useMotionValue, useSpring } from "motion/react";
import type { ComponentPropsWithoutRef, PointerEvent } from "react";

const SPRING = { stiffness: 220, damping: 16 };

/** Link que acompanha levemente o cursor (efeito magnético). */
export function MagneticLink({ children, ...rest }: ComponentPropsWithoutRef<"a">) {
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);

  function onMove(e: PointerEvent<HTMLSpanElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.38);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      style={{ x, y, display: "inline-block" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <a {...rest}>{children}</a>
    </motion.span>
  );
}
