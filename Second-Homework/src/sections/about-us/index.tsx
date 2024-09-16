import { PageBlock } from '../../components/PageBlock'
import styles from './styles.module.css'

export const AboutUs = () => {
    return (
        <PageBlock className="about-us">
            <div>
                <h2 className="about-us__title">
                     Более 5 лет создаем <br/>
                     мебель для вашего  <br/>
                     комфорта
                </h2>
            </div>
            <div className={styles['about-us__right']}>
                <div className="about-us__right-text">
                    <ul className={styles['about-us__right-text-list']}>
                        <li>
                            <p className={styles['text-default']}>
                                 Мы — команда профессионалов, которые могут <br/>
                                 произвести любую мебель для вашего проекта, а также<br/>
                                 найти производственное решение любой задумки.
                            </p>
                         </li>
                         <li>
                             <p className={styles['text-default']}>
                                 Наша основная цель — реализовывать самые смелые <br/>
                                 задумки, и делать это качественно и аккуратно.
                            </p>
                         </li>
                         <li>
                            <p className={styles['text-default']}>
                                В качестве материалов мы используем натуральные — <br/>
                                стекло, дерево, бетон, камень, металл и эпоксидную <br/>
                                смолу.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="about-us__right-info">
                    <ul className={styles['about-us__right-info-list']}>
                        <li>
                            <span className="about-us__right-info subtitle">
                                 1 год
                            </span>
                            <p className="text-default">
                                гарантии на всю <br/>
                                продукцию
                            </p>
                        </li>
                        <li>
                            <span className="about-us__right-info subtitle">
                            300+
                            </span>
                            <p className="text-default">
                            выполненных <br/>
                            проектов
                            </p>
                        </li>
                        <li>
                            <span className="about-us__right-info subtitle">
                                15 дней
                            </span>
                            <p className="text-default">
                                срок производства
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </PageBlock>

    )
}