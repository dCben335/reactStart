import { useState } from "react";
import styles from './Counter.module.css';

export default function Counter(){
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }
    function decreaseCount() {
        setCount(count - 1);
    }

    return (
        <div className={styles.container}>
            <button onClick={() => increaseCount()}>Increase</button>
            <p>{count}</p>
            <button onClick={() => decreaseCount()}>Decrease</button>
        </div>
    )
}