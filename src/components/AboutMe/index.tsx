import Image from 'next/image';
import ProfilePicture from '../../../public/fotoPerfil.jpg'
import styles from './styles.module.scss'

export default function AboutMe() {

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Sobre Mim</h1>
            <div className={styles.content}>
              <div className={styles.image__container}>
                <Image className={styles.image} src={ProfilePicture} alt='Foto de perfil do Matheus'/>
              </div>
              <div className={styles.infomation}>
                <p>
                Olá, me chamo Matheus Domingos e atualmente sou desenvolvedor Frontend e estou cursando Análise e Desenvolvimento de Sistemas.
                </p>
                <p></p>
              </div>
            </div>
        </section>
    )
}