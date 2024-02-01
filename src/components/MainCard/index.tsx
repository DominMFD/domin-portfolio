import Image from 'next/image';
import styles from './styles.module.scss';
import githubIcon from '../../../public/GithubIcon.png'
import linkedinIcon from '../../../public/linkedinIcon.png'

export default function MainCard() {
    return (
        <div className={styles.card__container}>
            <div className={styles.description__container}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis dolores placeat exercitationem debitis atque recusandae sed explicabo voluptate quasi veniam mollitia cum quia est iste at, eligendi aliquid doloribus?Excepturi blanditiis dolores placeat exercitationem debitis atque recusandae sed explicabo voluptate quasi veniam mollitia cum quia est iste at, eligendi aliquid doloribus?</span>
                <button>Saiba mais sobre mim</button>
                <div className={styles.icons__container}>
                    <Image className={styles.icon} src={githubIcon} alt='Icone do Github'/>
                    <Image className={styles.icon} src={linkedinIcon} alt='Icone do Linkedin'/>
                </div>
                </div>
        </div>
    )
}