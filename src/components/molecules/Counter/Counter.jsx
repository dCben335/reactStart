import { useState } from "react";
import styles from './Counter.module.css';
import Button from '../../atoms/Buttons/Button/Button.jsx'

export default function Counter(){
    const [count, setCount] = useState(0);

    const increaseCount =  () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <div className={styles.container}>
            <Button 
                text="increase"
                clicked={increaseCount}
            />
            <p>{count}</p>
            <Button 
                text="decrease"
                clicked={decreaseCount}
            />
        </div>
    )
}