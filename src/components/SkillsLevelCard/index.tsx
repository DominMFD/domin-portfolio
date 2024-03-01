import { IconType } from 'react-icons'
import styles from './styles.module.scss'
import { ReactNode } from 'react'

type TSkillsLevelCard = {
    children: ReactNode,
    level: number
}

export default function SkillsLevelCard({children, level}: TSkillsLevelCard) {

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {children}
            </div>
            <div className={styles.level__container}>
                <div className={styles.level} style={{width: `${level}%`}}>

                </div>
            </div>
        </div>
    )
}