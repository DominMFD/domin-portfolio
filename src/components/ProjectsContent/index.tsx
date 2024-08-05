'use client';

import React, { useState } from "react";
import styles from './index.module.scss';
import ProjectCard from "./components/ProjectCard";
import { PROJECTS } from "@/service/projects";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function ProjectsContent() {

const [page, setPage] = useState();

const renderPage1 = () => {
  return PROJECTS.map((project, index) => {
          if(index < 6) return <ProjectCard key={project.title} project={project}/>
          })
}

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.content}>
        {renderPage1()}
      </div>
      <div className={styles.control}>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
      </div>
      <div className={styles.next}>
        <SlArrowRight className={styles.icon} />
      </div>
      <div className={styles.prev}>
        <SlArrowLeft className={styles.icon} />
      </div>
    </article>
  )
}