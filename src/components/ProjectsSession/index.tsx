import ProjectCard from '../ProjectCard'
import styles from './styles.module.scss'

export default function Projects() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
              <h1 className={styles.title}>Projetos</h1>
              <div className={styles.content}>
                <ProjectCard />
              </div>
            </div>
        </section>
    )
}