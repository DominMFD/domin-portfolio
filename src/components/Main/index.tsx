import Image from 'next/image';
import styles from './styles.module.scss';
import Photo from '../../../public/ImageMain.png'
import githubIcon from '../../../public/GithubIcon.png'
import linkedinIcon from '../../../public/linkedinIcon.png'

export default function Main() {

    return (
        <div className={styles.container}>
            <div className={styles.image__container}>
                <Image className={styles.image} src={Photo} alt='Dominguera no espaço'/>
            </div>
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