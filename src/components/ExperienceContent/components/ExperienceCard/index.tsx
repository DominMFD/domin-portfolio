import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import { TExperienceCard } from "./index.types";

export default function ExperienceCard({
  logo,
  title,
  name,
  date,
  description
}: TExperienceCard) {

  return (
    <div className={styles.container}>
        <Image className={styles.logo} src={logo} alt={`logo da ${name}`}/>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.name}>{name}</span>
          <span className={styles.date}>{date}</span>
          <p className={styles.description}>{description}</p>
        </div>
    </div>
  )
}