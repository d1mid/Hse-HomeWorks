import { PageBlock } from '../../components/PageBlock'
import { StepsRight } from './steps-right'
import { stepsData } from './steps-right/data'
import styles from './styles.module.css'

export const Steps = () => {
    return (
        <PageBlock className="steps">
            <div className="steps__title">
                <h2>
                Как мы работаем
                </h2>
            </div>
            <div className={styles['steps__details']}>
                <p className={`${styles['text-default']} algo`}>Алгоритм работы с нами для удобства <br/> и понимания проекта</p>
                <ul className={styles['steps__details-list']}>
                {stepsData.map((data, index) => {
                        return (
                            <li key={index}>
                                <StepsRight {...data}/>
                            </li>
                            
                        )
                    })
                } 
                </ul>
            </div>
        </PageBlock>

    )
}