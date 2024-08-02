import React from "react";
import styles from './index.module.scss';

export default function AboutMeContent() {

    return (
      <article className={styles.container}>
        <h1 className={styles.title}>Sobre mim</h1>
        <p>Olá, me chamo Matheus Ferreira Domingos, sou um desenvolvedor FullStack Jr apaixonado pela area do FrontEnd, onde pretendo me aprimorar cada vez mais. Atualmente curso Análise e Desenvolvimento de Sistemas e dei inicio a minha jornada na area da tecnologia há quase 1 ano  </p>
      </article>
    )
}