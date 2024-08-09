import React from "react";
import styles from './index.module.scss';

export default function Nav() {
  return (
    <nav className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>Home <span className={styles.bar}></span></li>
          <li className={styles.item}>Sobre Mim <span className={styles.bar}></span></li>
          <li className={styles.item}>Projetos <span className={styles.bar}></span></li>
        </ul>
    </nav>
  )
}