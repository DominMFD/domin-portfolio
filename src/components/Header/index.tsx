'use client'

import React, { useState } from "react";
import styles from './index.module.scss';
import Logo from "./components/Logo";
import { PiListBold } from "react-icons/pi";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import Nav from "./components/Nav";
import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

 
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav} onClick={() => setNavIsOpen(!navIsOpen)}>
        <PiListBold className={styles.icon}/>
      </div>
      <div className={classNames(styles.mobile, {[styles.open]: navIsOpen, [styles.close]: !navIsOpen})}>
        <Nav />
      </div>
      <div className={styles.socials}>
        <Link className={styles.link} href={'https://github.com/DominMFD'} target="_blank"><BsGithub /></Link>
        <Link className={styles.link} href={'https://www.linkedin.com/in/matheusfdomingos/'} target="_blank"><BsLinkedin /></Link>
        <Link className={styles.link} href={'https://x.com/Domiinguera14'} target="_bank"><BsTwitterX /></Link>
      </div>    
    </div>
  )
}