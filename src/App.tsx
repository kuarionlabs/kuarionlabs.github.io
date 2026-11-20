import { Commitments } from "./components/Commitments";
import { Courses } from "./components/Courses";
import { Cta } from "./components/Cta";
import { Curtain } from "./components/Curtain";
import { Demo } from "./components/Demo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Process } from "./components/Process";
import { ProgressBar } from "./components/ProgressBar";
import { Services } from "./components/Services";

export default function App() {
  return (
    <>
      <a className="skip" href="#servicos">
        Pular para o conteúdo
      </a>
      <Curtain />
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Demo />
        <Process />
        <Commitments />
        <Courses />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
