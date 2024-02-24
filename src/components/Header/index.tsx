'use client';

import * as React from 'react'
import styles from './styles.module.scss';
import { Roboto_Mono } from "next/font/google";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext/AppContext';
import { FiAlignJustify, FiPlus } from 'react-icons/fi';

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Header() {

 const {windowWidth} = useContext(AppContext)

 const [isOpen, setIsOpen] = useState<boolean>(false);
 const [isMobile, setIsMobile] = useState<boolean>(false);

 useEffect(() => {
    setIsMobile(windowWidth < 580);
}, [windowWidth]);

 const handleHeadler = () => {
  setIsOpen(!isOpen)
}

    return (
        <div className={roboto.className}>
          <div className={styles.header}>
            <div className={styles.icon}
            onClick={handleHeadler}>
              {isOpen ? 
              <FiPlus color="#9c68b4" size="40px" style={{ rotate: "45deg" }} />
              :
              <FiAlignJustify color="#9c68b4" size="40px" />
              }
            </div>
            <nav>
                <ul className={styles.navegation} style={isMobile ? {display: isOpen ? 'flex': 'none'} : {}}>
                    <li><a href="">Sobre Mim</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Formações</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
          </div>
            
        </div>
        
    )
}