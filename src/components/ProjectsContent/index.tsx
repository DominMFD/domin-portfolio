import React from "react";
import styles from './index.module.scss';
import ProjectCard from "./components/ProjectCard";

export default function ProjectsContent() {

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.content}>
        <ProjectCard />
      </div>
    </article>
  )
}