import leftImg from '../../assets/images/michael-oxendine-GHCVUtBECuY-unsplash (1) 1.png'
import rightImg from '../../assets/images/spacejoy-IH7wPsjwomc-unsplash (1) 1.png'
import { PageBlock } from '../../components/PageBlock'
import styles from './styles.module.css'

export const HeroMain = () => {
    return (
        <PageBlock className="hero-main">
            <div className={styles['hero-main__main-text']}>
                <h1>
                    ЭКСКЛЮЗИВНАЯ <br/> 
                    И НЕСТАНДАРТНАЯ <br/>
                    МЕБЕЛЬ ДЛЯ ДОМА
                </h1>
                <p className={styles['hero-main__details']}> 
                     Мы можем произвести любую мебель для <br/>
                    вашего проекта и найти производственное <br/>
                    решение любой задумки.
                </p>
            </div>
            <div className={styles['hero-main__link']}>
                <a  href="#">ЗАКАЗАТЬ ПРОЕКТ</a>
            </div>
            <div className={styles['hero-main__left-image']}>
                <img src={leftImg} alt=""/>
            </div>
            <div className={styles['hero-main__right-image']}>
                 <img src={rightImg} alt=""/>
            </div>
        </PageBlock>

    )
}