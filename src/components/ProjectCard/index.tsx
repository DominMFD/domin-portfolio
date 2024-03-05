import styles from './styles.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { skillsIcon } from '@/service/skillsIcon';
import { Projects } from '@/service/projects';

export default function ProjectCard(): JSX.Element {

    function searchIcon(skills: string[]): JSX.Element[] {

        const icons: JSX.Element[] = [];
        skills.forEach(skillName => {
        const skillIcon = skillsIcon.find(skill => skill.name === skillName);
        
        skillIcon && icons.push(skillIcon.icon);
    });

        return icons;

        };

    return (
        <div className={styles.container}>
        <Link href='https://dominmfd.github.io/WebPokeDex/' target='_blank'>
            <div className={styles.image__container}>
               <Image src={Projects[0].image} alt={Projects[0].title} className={styles.image}/>
            </div>
           <div className={styles.information}>
            <h4 className={styles.title}>{Projects[0].title}</h4>
            <div className={styles.tecnologies}>
                {searchIcon(Projects[0].skills)}
            </div>
           </div>
        </Link>
        </div>
    )
}