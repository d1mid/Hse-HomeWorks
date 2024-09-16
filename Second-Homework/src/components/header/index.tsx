import logo from '../../assets/images/logo.png';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <>
            <div className={styles['header__logo']}>
                 <a href=""><img src={logo} alt=""/></a>
            </div>
            <nav className="header__nav">
                <ul className={styles['header__nav-list']}>
                    <li>
                        <a href="#">
                         О нас
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Проекты
                        </a>
                    </li>
                    <li>
                        <a href="#">
                         Материалы
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Отзывы
                         </a>
                    </li>
                </ul>
            </nav>
            <a className ={styles['header__phone']} href="#">
                +7 999 999 99 99
            </a>
        </>
    )
}