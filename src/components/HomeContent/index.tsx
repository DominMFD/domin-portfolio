import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import DominImg from '../../../public/Domin.jpg';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiAngular, SiCsharp, SiNodedotjs, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function HomeContent() {
  return (
    <section className={styles.container}>
     <div className={styles.content}>
      <div className={styles.header}>
          <h1 className={styles.title}>Prazer, Domindev</h1>
          <p className={styles.description}>Sou um desenvolvedor focado em criar aplicações web e mobile que agreguem a vida das pessoas de forma positiva e inclusiva.</p>
        </div>
        <Image src={DominImg} alt="Domin no espaço" className={styles.image}/>
      </div>
      <div className={styles.specs}>
        <SiHtml5 className={styles.icon}/>
        <SiCss3 className={styles.icon}/>
        <SiJavascript className={styles.icon}/>
        <SiTypescript className={styles.icon}/>
        <SiCsharp className={styles.icon}/>
        <FaJava className={styles.icon}/>
        <SiReact className={styles.icon}/>
        <SiAngular className={styles.icon}/>
        <SiNodedotjs className={styles.icon}/>
      </div>
    </section>
  )
}