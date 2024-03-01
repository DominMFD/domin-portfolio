import Image from 'next/image';
import ProfilePicture from '../../../public/fotoPerfil.jpg'
import styles from './styles.module.scss'
import AboutMeCard from '../AboutMeCard';
import SkillsCard from '../SkillsCard';

export default function AboutMe() {

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Sobre Mim</h1>
            <div className={styles.content}>
              <div className={styles.image__container}>
                <Image className={styles.image} src={ProfilePicture} alt='Foto de perfil do Matheus'/>
              </div>
              <div className={styles.information}>
                <AboutMeCard />
              </div>
            </div>
            <div>
              <SkillsCard />
            </div>
        </section>
    )
}