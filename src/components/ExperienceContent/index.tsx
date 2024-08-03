import React from "react";
import styles from './index.module.scss';
import ExperienceCard from "./components/ExperienceCard";
import DevHattLogo from '../../../public/DevHattLogo.jpg';
import skillLabLogo from '../../../public/skilseducacao_logo.jpeg';

export default function ExperienceContent() {

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Experiências</h2>
      <div className={styles.content}>
        <ExperienceCard
        logo={DevHattLogo}
        title="Desenvolvedor FullStack"
        name="DevHatt"
        date="01/2024 - Atualmente"
        description="Desenvolvimento de soluções e interfaces para aplicações web em colaboração direta com a equipe. Utilizando linguagens de programação como JavaScript e Go, contribuo com códigos limpos e testes unitários para garantir aplicações escaláveis e de fácil manutenção."/>
        <ExperienceCard 
        logo={skillLabLogo}
        title="Desenvolvedor Front-end Voluntário"
        name="Skill Labs."
        date="11/2023 - 03/2024"
        description="Desenvolvimento de interfaces responsivas utilizando React Native e Expo para a criação do aplicativo móvel JuntosDoamos."/>
      </div>
    </article>
  )
}