import AppContextProvider from "@/components/AppContext/AppContext";
import styles from "./page.module.scss";
import Nav from "@/components/Header";
import HomeContent from "@/components/HomeContent";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import AboutMeContent from "@/components/AboutMeContent";
import ExperienceContent from "@/components/ExperienceContent";
import ProjectsContent from "@/components/ProjectsContent";

export default function Home() {

  return (
    <AppContextProvider>
      <main className={styles.main}>
        <MainContent>
          <ProjectsContent/>
        </MainContent>
      </main>
    </AppContextProvider>
  );
}
