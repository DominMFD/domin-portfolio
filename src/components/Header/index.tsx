import styles from './styles.module.scss';

export default function Header() {

    return (
        <nav className={styles.header}>
            <ul className={styles.navegation}>
                <li><a href="">Sobre Mim</a></li>
                <li><a href="">Projetos</a></li>
                <li><a href="">Formações</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    )
}