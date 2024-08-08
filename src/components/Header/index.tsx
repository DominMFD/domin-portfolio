import React from "react";
import styles from './index.module.scss';
import Logo from "./components/Logo";
import { PiListBold } from "react-icons/pi";
import Nav from "./components/Nav";

export default function Header() {
 
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <PiListBold className={styles.icon}/>
      </div>
      <div className={styles.mobile}>
        <Nav />
      </div>  
    </div>
  )
}