import { useState } from 'react'
import Counter from '../../atoms/Counter/Counter'
import IncrementDecrement from '../../molecules/IncrementDecrement/IncrementDecrement'
import styles from './buttonIncrement.module.css'

const ButtonIncrement = () => {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <div className={styles.buttonIncrement}>
      <Counter value={index} />
      <IncrementDecrement onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

export default ButtonIncrement;