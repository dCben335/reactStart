import { useState } from 'react';
import styles from './Header.module.css'
import BurgerButton from '../../atoms/Buttons/BurgerButton/BurgerButton';

export default function Header({links}) {
    const [burgerOpened, setBurgerOpened] = useState(false);


    const burgerHandler = () => setBurgerOpened(!burgerOpened)


    return (
        <header className={styles.header}>
            <a href="/">Logo</a>
            <nav> 
                <ul className={burgerOpened ? styles.opened : ''}>
                    {links ?
                        links.map((link, key) => {
                            return <li key={key}><a href={link.path}>{link.name}</a></li>
                        }) : ''
                    }
                </ul>
                
                <BurgerButton
                    clicked={burgerHandler}
                    cross={burgerOpened}
                    dark={true}
                ></BurgerButton>
            </nav>
        </header>
    )
} 