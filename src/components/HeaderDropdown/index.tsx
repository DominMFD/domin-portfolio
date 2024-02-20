import { useState } from 'react';
import styles from './styles.module.scss';
import { FiAlignJustify, FiPlus } from "react-icons/fi"

export default function HeaderDropdown() {

    const [isOpen, setIsOpen] = useState<boolean>(true)
    
    
    return isOpen ? (
      <div className={styles.open}>
        <div className={styles.icon}>
          <FiPlus color="#9c68b4" size="35px" style={{ rotate: "45deg" }} />
        </div>
        <nav>
          <ul className={styles.navegation}>
            <li>
              <a href="">Sobre Mim</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Formações</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    ) : (
      <div className={styles.closed}>
        <FiAlignJustify color="#9c68b4" size="35px" />
      </div>
    );
}