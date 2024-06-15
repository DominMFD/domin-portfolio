import React from "react";
import styles from './index.module.scss';

export default function Nav() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Sobre Mim</li>
        <li className={styles.item}>Experiência</li>
        <li className={styles.item}>Projetos</li>
        <li className={styles.item}>Contatos</li>
      </ul>
    </nav>
  )
}