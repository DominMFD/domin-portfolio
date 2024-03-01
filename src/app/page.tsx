import AppContextProvider from "@/components/AppContext/AppContext";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/ProjectsSession";

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
      </main>
    </AppContextProvider>
  );
}
