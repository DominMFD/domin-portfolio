import Image from 'next/image';
import styles from './styles.module.scss';
import githubIcon from '../../../public/GithubIcon.png'
import linkedinIcon from '../../../public/linkedinIcon.png'
import Link from 'next/link';

export default function MainCard() {
    return (
        <div className={styles.card__container}>
            <div className={styles.description__container}>
                <h1>Welcome to my site</h1>
                <span>Olá, eu sou o Matheus mas pode me chamar de Domin. Sou desenvolvedor Front-End, estudante de tecnologia e entusiasta de eSports.</span>
                <button>Saiba mais sobre mim</button>
                <div className={styles.icons__container}>
                    <Link href={'https://github.com/DominMFD'} target='_blank'>
                        <Image className={styles.icon} src={githubIcon} alt='Icone do Github'/>
                    </Link>
                    <Link href={'https://github.com/DominMFD'}
                    target='_blank'>
                        <Image className={styles.icon} src={linkedinIcon} alt='Icone do Linkedin'/>
                    </Link>
                    
                </div>
                </div>
        </div>
    )
}