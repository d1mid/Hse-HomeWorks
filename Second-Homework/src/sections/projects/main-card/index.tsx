import arrowLogo from '../../../assets/images/arrow.svg'
import { ProjectCard } from '../project-card'
import styles from './styles.module.css'
import type { TMainCardProps} from './type'

export const MainCard= ({
    label,
    img,
}: TMainCardProps) => {
    
    return (
        <div className={styles['projects__cards-firs-card']}>
             <ProjectCard img={img}/>
            <div className={styles['projects__cards-firs-card-label']}>
                <p className={styles['label-text']}>{label}</p>
                <img src={arrowLogo} alt=""/>
            </div>
        </div> 
    )
}
