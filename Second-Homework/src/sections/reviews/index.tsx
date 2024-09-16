import { PageBlock } from "../../components/PageBlock"
import styles from './styles.module.css'
import { cardData } from "./reviews-card/data"
import { ReviewsCard } from "./reviews-card"

export const Reviews= () => {
    return (
        <PageBlock className="reviews">
            <div className={styles['reviews__title']}>
                <h2>Отзывы</h2>
            </div>
            <div className={styles['reviews__main']}>
                {cardData.map((data, index) => {
                        return (
                            <ReviewsCard key={index} {...data}/>
                        )
                    })
                }
            </div>
        </PageBlock>
    )
}