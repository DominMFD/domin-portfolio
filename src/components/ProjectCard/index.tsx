import styles from './styles.module.scss'
import Image from "next/image";
import ImagemTeste from '../../../public/Captura de tela 2024-03-01 170146.png'
import Link from 'next/link';
import { skillsIcon } from '@/service/skillsIcon';

export default function ProjectCard() {

    return (
        <div className={styles.container}>
        <Link href='https://dominmfd.github.io/WebPokeDex/' target='_blank'>
            <div className={styles.image__container}>
               <Image src={ImagemTeste} alt='WebPokeDex' className={styles.image}/> 
            </div>
           <div className={styles.information}>
            <h4 className={styles.title}>WebPokedex</h4>
            <div className={styles.tecnologies}>
                {skillsIcon.Html} {skillsIcon.Css} {skillsIcon.Js}
            </div>
           </div>
        </Link>
        </div>
    )
}