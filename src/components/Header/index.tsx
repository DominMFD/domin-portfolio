'use client';

import * as React from 'react'
import styles from './styles.module.scss';
import { Roboto_Mono } from "next/font/google";
import { useEffect, useState } from 'react';

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div className={roboto.className}>
            <nav className={styles.header}>
                <ul className={styles.navegation}>
                    <li><a href="">Sobre Mim</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Formações</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </div>
        
    )
}