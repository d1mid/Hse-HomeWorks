import { PageBlock } from '../../components/PageBlock'
import { MainCard } from './main-card'
import { mainCardData } from './main-card/data'
import { ProjectCard } from './project-card'
import { projectCardData } from './project-card/data'

import styles from './styles.module.css'

export const Projects = () => {
    return (
        <PageBlock className="projects">
            <div className={styles['projects__title']}>
                <h2>Проекты</h2>
            </div>
            <div className={styles['projects__cards']}>
                {mainCardData.map((data, index) => {
                            return (

                            <MainCard key={index} {...data}/>
                                
                            )
                    })
                } 

                {projectCardData.map((data, index) => {
                            return (

                            <ProjectCard key={index} {...data}/>
                                
                            )
                    })
                } 

            </div>
        </PageBlock>

    )
}
