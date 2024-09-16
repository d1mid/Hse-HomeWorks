import styles from './styles.module.css'
import type { TStepsRightProps } from './type'

export const StepsRight= ({
    title,
    text
}: TStepsRightProps) => {
    
    return (
        <div className={styles['steps__details-list-item']}>
            <div className={styles['steps__details-list-item-right']}>
                <p className="subtitle">{title}</p>
            </div>
            <div className={styles['steps__details-list-item-left']}>
                <p className={`${styles['text-default']} steps-part`}> 
                {text}
                </p>
            </div>
         </div>
    )
}