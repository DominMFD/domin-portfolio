import AppContextProvider from "@/components/AppContext/AppContext";
import styles from "./page.module.scss";
import Nav from "@/components/Nav";
import HomeContent from "@/components/HomeContent";
import Header from "@/components/Header";

export default function Home() {

  return (
    <AppContextProvider>
      <main className={styles.main}>
        <Nav/>
        <HomeContent />
      </main>
    </AppContextProvider>
  );
}
