import { PageBlock } from '../../components/PageBlock'
import styles from './styles.module.css'

export const Footer = () => {
    return (
        
            <PageBlock className="site-footer" isSpaced={false}>
                <div className={styles['site-footer__info']}>
                    <span className="site-footer__info-company">© 2023 AVEJI</span>
                    <span className="site-footer__info-rights">ВСЕ ПРАВА ЗАЩИЩЕНЫ</span>
                </div>
                <div className={styles['site-footer__links']}>
                    <a href="#">Политика конфеденциальности</a>
                    <p className={styles['text-for-link']}>/</p>
                    <a href="#">Оплата и доставка</a>
                </div>
                <div className={'site-footer__socials'}>
                    <a href="#">ВКОНТАКТЕ</a>
                    <a href="#">ТЕЛЕГРАМ</a>
                </div>
            </PageBlock>

    )
}
