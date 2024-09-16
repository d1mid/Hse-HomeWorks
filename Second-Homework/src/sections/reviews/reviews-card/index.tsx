import styles from './styles.module.css'
import type { TReviewsCardProps } from './type'

export const ReviewsCard= ({
    nameUser,
    img,
    text
}: TReviewsCardProps) => {
    
    return (
        <div className={styles['reviews__main-card']}>
            <img className={styles['reviews__main-card-link']} src={img} alt=""/>
            <span className={styles['reviews-text-subtitle']}>{nameUser}</span>
            <p className={`${styles['text-default']} text-align`}>{text}</p>
        </div>
    )
}