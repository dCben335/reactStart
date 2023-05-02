import styles from './Button.module.css';

export default function Counter({text, clicked}){


     return (
        <button
            className={styles.button}
            onClick={() => clicked && clicked()}
        >{text}</button>
    )
}