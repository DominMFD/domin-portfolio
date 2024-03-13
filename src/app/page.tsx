import AppContextProvider from "@/components/AppContext/AppContext";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMeSession";
import Projects from "@/components/ProjectsSession";
import Contact from "@/components/ContactSession";

export default function Home() {

  return (
    <AppContextProvider>
      <header>
        <Header />
      </header>
      <main>
        <Main />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </AppContextProvider>
  );
}
