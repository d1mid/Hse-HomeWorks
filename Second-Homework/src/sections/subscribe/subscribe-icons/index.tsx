import styles from './styles.module.css'
import appstore from '../../../assets/images/Theme=Black, Store=App Store 1.png'
import googleplay from '../../../assets/images/Theme=Black, Store=Google Play 1.png'
export const SubscribeIcons= () => {
    
    return (
        <div className={styles['subscribe__icons']}>
           <a href="#"> <img src={appstore} alt=""/></a>
           <a href="#"> <img src={googleplay} alt=""/></a>
         </div>
    )
}