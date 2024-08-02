import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import DominImg from '../../../public/Domin.jpg';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiAngular, SiCsharp, SiNodedotjs, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function HomeContent() {
  return (
    <article className={styles.container}>
     <div className={styles.content}>
      <div className={styles.header}>
          <h1 className={styles.title}>Prazer, Domindev</h1>
          <p className={styles.description}>Sou um desenvolvedor focado em criar aplicações web e mobile que agreguem a vida das pessoas de forma positiva e inclusiva.</p>
        </div>
        <Image src={DominImg} alt="Domin no espaço" className={styles.image}/>
      </div>
      <div className={styles.specs}>
        <SiHtml5 className={styles.icon} style={{color: '#F06A30', animationDelay: '0s'}}/>
        <SiCss3 className={styles.icon} style={{color: '#265AEA', animationDelay: '0.2s'}}/>
        <SiJavascript className={styles.icon} style={{color: '#FFDB44', animationDelay: '0.4s'}}/>
        <SiTypescript className={styles.icon} style={{color: '#377CC8', animationDelay: '0.6s'}}/>
        <SiCsharp className={styles.icon} style={{color: '#9981BB', animationDelay: '0.8s'}}/>
        <FaJava className={styles.icon} style={{color: '#E08916', animationDelay: '0.6s'}}/>
        <SiReact className={styles.icon} style={{color: '#5DC6DD', animationDelay: '0.4s'}}/>
        <SiAngular className={styles.icon} style={{color: '#C50836', animationDelay: '0.2s'}}/>
        <SiNodedotjs className={styles.icon} style={{color: '#8FC708', animationDelay: '0s'}}/>
      </div>
    </article>
  )
}