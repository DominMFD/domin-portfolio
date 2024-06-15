import React from "react";
import styles from './index.module.scss';
import Logo from "../Logo";

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  )
}