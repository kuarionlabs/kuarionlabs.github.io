import "@fontsource-variable/geist";
import "@fontsource/geist-mono/400.css";
import { MotionConfig } from "motion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

const root = document.getElementById("root");
if (!root) throw new Error("Elemento #root não encontrado");

createRoot(root).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
);
