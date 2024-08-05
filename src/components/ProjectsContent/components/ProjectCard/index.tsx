'use client';

import React, { useState, useEffect } from "react";
import styles from './index.module.scss';
import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import { TProjectCard } from "./index.types";
import classNames from "classnames";
import { skillsIcon } from "@/service/skillsIcon"; 

export default function ProjectCard({ project }: TProjectCard) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const handleOpen = () => {
    setShouldAnimate(true);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={classNames(styles.image, { [styles.open]: isOpen})}>
        <Image src={project.image} alt="image example" />
      </div>
      <div className={styles.info}>
        <div className={classNames(styles.wrapper, { [styles.open]: isOpen, [styles.close]: shouldAnimate && !isOpen })} onClick={handleOpen}>
          <SlArrowLeft className={styles.icon} />
        </div>
        <div className={classNames(styles.content, { [styles.open]: isOpen, [styles.close]: shouldAnimate && !isOpen })}>
          <div className={styles.header}>
            <span className={styles.title}>{project.title}</span>
            <div className={styles.specs}>
             {project.skills.map((skill) => {
              let icon;
              skillsIcon.forEach((skillIcon) => {
                if(skillIcon.name === skill) icon = skillIcon.icon;
              })
              return icon;
             })}
            </div>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus esse, nesciunt ipsa consequatur eveniet. Ipsam numquam eius obcaecati. Necessitatibus, veritatis dolorum sed quidem ea deserunt voluptates officiis dolore laboriosam.
          </div>
          <Link className={styles.button} href={project.link} target="_blank">Acesse</Link>
        </div>
      </div>
    </div>
  );
}
