import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import ImageExample  from '../../../../../public/webpokedex.png';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiAngular, SiCsharp, SiNodedotjs, SiTypescript } from "react-icons/si";
import Link from "next/link";
import { TProjectCard } from "./index.types";

export default function ProjectCard({
  project
}: TProjectCard) {
  return (
    <div className={styles.container}>
      <Link href={project.link} className={styles.link} target="_blank">
        <div className={styles.image}>
          <Image src={project.image} alt={project.title}/>
        </div>
        <div className={styles.content}>
          <span className={styles.title}>{project.title}</span>
          <div className={styles.specs}>
            <SiHtml5 style={{color: '#F06A30', width: '30px'}}/>
            <SiCss3 style={{color: '#265AEA', width: '30px'}}/>
            <SiJavascript style={{color: '#FFDB44', width: '30px'}}/>
          </div>
        </div>
      </Link>
    </div>
  )
}