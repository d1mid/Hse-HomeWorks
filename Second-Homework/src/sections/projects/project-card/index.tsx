import styles from './styles.module.css'
import type { TProjectCardProps } from './type'

export const ProjectCard= ({
    img
}: TProjectCardProps) => {
    
    return (
        <a href=""><img className={styles['projects__cards-image']} src={img} alt=""/></a>
    )
}