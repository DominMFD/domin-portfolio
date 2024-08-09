import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import DominImg from '../../../public/Domin.jpg';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiAngular, SiCsharp, SiNodedotjs, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function HomeContent() {
  return (
    <article className={styles.container}>
     <div className={styles.content}>
     <Image src={DominImg} alt="Domin no espaço" className={styles.image}/>
      <div className={styles.header}>
          <h1 className={styles.title}>Prazer, Domindev</h1>
          <div className={styles.socials}>
            <Link className={styles.link} href={'https://github.com/DominMFD'} target="_blank"><BsGithub /></Link>
            <Link className={styles.link} href={'https://www.linkedin.com/in/matheusfdomingos/'} target="_blank"><BsLinkedin /></Link>
            <Link className={styles.link} href={'https://x.com/Domiinguera14'} target="_bank"><BsTwitterX /></Link>
          </div>    
          <p className={styles.description}>Sou um desenvolvedor focado em criar aplicações web e mobile que agreguem a vida das pessoas de forma positiva e inclusiva.</p>
        </div>
        <Link className={styles.button} href={'/'}>Sobre mim</Link>
      </div>
        <SiHtml5 className={styles.icon} style={{color: '#F06A30', animationDelay: '0s', bottom: '12%', right: '10%'}}/>
        <SiCss3 className={styles.icon} style={{color: '#265AEA', animationDelay: '0.2s', top: '20%', left: '10%'}}/>
        <SiJavascript className={styles.icon} style={{color: '#FFDB44', animationDelay: '0.4s', bottom: '5%', right: '75%'}}/>
        <SiTypescript className={styles.icon} style={{color: '#377CC8', animationDelay: '0.6s', bottom: '15%', right: '55%'}}/>
        <SiCsharp className={styles.icon} style={{color: '#9981BB', animationDelay: '0.8s', top: '25%', right: '5%'}}/>
        <FaJava className={styles.icon} style={{color: '#E08916', animationDelay: '0.6s' , bottom: '28%', right: '80%'}}/>
        <SiReact className={styles.icon} style={{color: '#5DC6DD', animationDelay: '0.4s', bottom: '30%', right: '5%'}}/>
        <SiAngular className={styles.icon} style={{color: '#C50836', animationDelay: '0.2s', bottom: '6%', right: '30%'}}/>
        <SiNodedotjs className={styles.icon} style={{color: '#8FC708', animationDelay: '0s', top: '10%', right: '10%'}}/>
    </article>
  )
}