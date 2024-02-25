import AppContextProvider from "@/components/AppContext/AppContext";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";

export default function Home() {

  return (
    <AppContextProvider>
      <header>
        <Header />
      </header>
      <main>
        <Main />
        <AboutMe />
      </main>
    </AppContextProvider>
  );
}
