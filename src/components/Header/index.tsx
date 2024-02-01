import styles from './styles.module.scss';
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Header() {

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