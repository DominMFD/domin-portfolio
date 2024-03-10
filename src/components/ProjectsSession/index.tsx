import ProjectCard from '../ProjectCard'
import styles from './styles.module.scss'
import { Projects } from '@/service/projects'

export default function ProjectsSession() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
              <h1 className={styles.title}>Projetos</h1>
              <div className={styles.content}>
                {Projects.map((project) => 
                  <ProjectCard key={project.title} project={project} />
                )}
              </div>
            </div>
        </section>
    )
}