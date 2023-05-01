import styles from './BurgerButton.module.css'

export default function BurgerButton({clicked, cross, dark}) {
    return (
        <button 
            className={`${styles.button} ${cross ? styles.cross : ''} ${dark ? styles.dark : styles.light}`} 
            onClick={() => clicked ? clicked() : ''}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}