import React from "react";
import styles from './index.module.scss';

export default function Logo() {
  return(
    <h1 className={styles.title}>
          <span className={styles.arrow}>{'<'}</span>
          <span className={styles.tag}>h1</span>
          <span className={styles.arrow}>{'>'}</span>
          DominDev
          <span className={styles.arrow}>{'<'}</span>
          <span className={styles.tag}>h1</span>
          <span className={styles.arrow}>{'>'}</span>
        </h1>
  )
}