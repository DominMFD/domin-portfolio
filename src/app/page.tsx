import AppContextProvider from "@/components/AppContext/AppContext";
import styles from "./page.module.scss";
import Nav from "@/components/Nav";
import HomeContent from "@/components/HomeContent";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import AboutMeContent from "@/components/AboutMeContent";

export default function Home() {

  return (
    <AppContextProvider>
      <main className={styles.main}>
        <Nav/>
        <MainContent>
          <AboutMeContent />
        </MainContent>
      </main>
    </AppContextProvider>
  );
}
