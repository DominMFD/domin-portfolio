'use client';

import React, { useRef, useState, useEffect } from "react";
import styles from './index.module.scss';
import ProjectCard from "./components/ProjectCard";
import { PROJECTS } from "@/service/projects";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import classNames from "classnames";

export default function ProjectsContent() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const slidingRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth <= 1500) {
      setItemsPerPage(4);
    } else {
      setItemsPerPage(6);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on window size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % Math.ceil(PROJECTS.length / itemsPerPage));
  }

  const handlePrev = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + Math.ceil(PROJECTS.length / itemsPerPage)) % Math.ceil(PROJECTS.length / itemsPerPage));
  }

  const renderPage = (pageIndex: number) => {
    return PROJECTS.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((project) => (
      <ProjectCard key={project.title} project={project}/>
    ));
  }

  const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.sliding} ref={slidingRef} style={{ transform: `translateX(${-slideIndex * 100 / totalPages}%)` }}>
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div className={styles.content} key={pageIndex}>
            {renderPage(pageIndex)}
          </div>
        ))}
      </div>
      <div className={styles.control}>
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button 
            key={pageIndex} 
            className={classNames(styles.button, {[styles.active]: slideIndex === pageIndex})} 
            onClick={() => setSlideIndex(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
      <div className={classNames(styles.next, {[styles.disable]: slideIndex === totalPages - 1})} onClick={handleNext}>
        <SlArrowRight className={styles.icon} />
      </div>
      <div className={classNames(styles.prev, {[styles.disable]: slideIndex === 0})} onClick={handlePrev}>
        <SlArrowLeft className={styles.icon} />
      </div>
    </article>
  );
}
