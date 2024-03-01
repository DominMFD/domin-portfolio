import styles from './styles.module.scss'
import Image from "next/image";
import ImagemTeste from '../../../public/Captura de tela 2024-03-01 170146.png'

export default function ProjectCard() {

    return (
        <div className={styles.container}>
           <Image src={ImagemTeste} alt='WebPokeDex' />
           <div>
            <h4 className={styles.title}>WebPokedex</h4>
            <div className={styles.tecnologies}></div>
           </div>
        </div>
    )
}