'use client';

import * as React from 'react'
import styles from './styles.module.scss';
import { Roboto_Mono } from "next/font/google";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext/AppContext';
import HeaderDropdown from '../HeaderDropdown';

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Header() {

 const {windowWidth} = useContext(AppContext)

    if (windowWidth < 580) {
      return (
        <div className={roboto.className}>
          <HeaderDropdown />
        </div>
      )
    }

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