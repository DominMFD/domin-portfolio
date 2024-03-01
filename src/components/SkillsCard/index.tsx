import SkillsContainer from '../SkillsContainer';
import styles from './styles.module.scss'
import { FaHtml5 } from "react-icons/fa";

export default function SkillsCard() { 

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
               <SkillsContainer />
            </div>
        </div>
    )
}
