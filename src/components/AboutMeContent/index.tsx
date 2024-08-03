import React from "react";
import styles from './index.module.scss';
import ExperienceContent from "../ExperienceContent";

export default function AboutMeContent() {

    return (
      <article className={styles.container}>
        <h1 className={styles.title}>Sobre mim</h1>
        <div className={styles.content}>
          <p className={styles.text}>Olá, me chamo Matheus Ferreira Domingos, sou um desenvolvedor FullStack Jr apaixonado pela area do FrontEnd, onde pretendo me aprimorar cada vez mais. Atualmente curso Análise e Desenvolvimento de Sistemas e dei inicio a minha jornada na area da tecnologia há quase 1 ano com o objetivo de crescer e me desenvolver profissionalmente.</p>
          <p className={styles.text}>Tenho como meta me especializar principalmente na area do FrontEnd e criar aplicações web e mobile inovadoras que agreguem a vida das pessoas de forma positiva e sempre se importando com a inclusão da acessibilidade, pois o acesso a tecnologia devem ser para todos.</p>
          <p className={styles.text} style={{marginBottom: '1.5rem'}}>Venho colocando todo o meu empenho em me aprimorar para alcançar não só minhas metas e objetivos, mas tambem o crescimento pessoal e profissional para que eu possa fazer a diferença nas empresas e produtos por onde eu passar.</p>
          <hr className={styles.divider}/>
          <ExperienceContent />
        </div>
      </article>
    )
}