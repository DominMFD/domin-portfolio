import AppContextProvider from "@/components/AppContext/AppContext";
import styles from "./page.module.scss";
import Nav from "@/components/Nav";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";

export default function Home() {

  return (
    <AppContextProvider>
      <Header/>
      <main className={styles.main}>
        <Nav/>
        <MainContent />
      </main>
    </AppContextProvider>
  );
}
