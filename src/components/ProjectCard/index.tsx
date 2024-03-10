import styles from './styles.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { skillsIcon } from '@/service/skillsIcon';
import { TProjectCard } from './index.type';
import { url } from 'inspector';

export default function ProjectCard({project}: TProjectCard): JSX.Element {

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
        <Link href={project.link} target='_blank'>
               <Image src={project.image} alt={project.title} className={styles.image}/>
           <div className={styles.information}>
            <h4 className={styles.title}>{project.title}</h4>
            <div className={styles.tecnologies}>
                {searchIcon(project.skills)}
            </div>
           </div>
        </Link>
        </div>
    )
}