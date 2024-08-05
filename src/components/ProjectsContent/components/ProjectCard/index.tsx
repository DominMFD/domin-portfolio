'use client';

import React, { useState, useEffect } from "react";
import styles from './index.module.scss';
import Image from "next/image";
import ImageExample from '../../../../../public/webpokedex.png';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiAngular, SiCsharp, SiNodedotjs, SiTypescript } from "react-icons/si";
import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import { TProjectCard } from "./index.types";
import classNames from "classnames";

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
              <SiHtml5 style={{ color: '#F06A30', width: '30px' }} />
              <SiCss3 style={{ color: '#265AEA', width: '30px' }} />
              <SiJavascript style={{ color: '#FFDB44', width: '30px' }} />
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
