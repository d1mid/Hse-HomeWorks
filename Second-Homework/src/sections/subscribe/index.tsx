import { useState, FormEvent } from 'react';
import { PageBlock } from '../../components/PageBlock'
import styles from './styles.module.css'
import image from '../../assets/images/bilal-mansuri-yJ78NE83YH8-unsplash 1.png'
import { SubscribeIcons } from './subscribe-icons'
    
export const Subscribe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_num, setPhone] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log(name, 'name')
        console.log(email, 'email')
        console.log(phone_num, 'phone_num')
    }

    return (
        <PageBlock className="subscribe">
            <div className={styles['subscribe__image']}>
                <img src={image} alt=""/>
            </div>
            <form onSubmit={onSubmit}>
                <div className={styles['subscribe__form']}>
                    <h2 className={styles['subscribe__form-title']}>Хотите заказать проект?</h2>
                    <p className={`${styles['text-default']} subscribe__form-details`}>Оставьте заявку, и мы вам перезвоним</p>
                    <input
                    value={name}
                     onChange={(e) => setName(e.target.value)}
                    type="text" className={`${styles['input']} subscribe__input`} placeholder="Имя" />
                     <input
                    value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    type="email" className={`${styles['input']} subscribe__input`} placeholder="Email" />
                    <input
                    value={phone_num}
                     onChange={(e) => setPhone(e.target.value)}
                    type="text" className={`${styles['input']} subscribe__input`} placeholder="Телефон" />
                    <button className={`${styles['button']} subscribe__button`}>Отправить заявку</button>
                    <SubscribeIcons/>
                </div>
            </form>
        </PageBlock>

    )
}
