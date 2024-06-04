// src/molecules/CounterDisplay.tsx
import React from 'react'
import Counter from '../../atoms/Counter/Counter'
import styles from './counterDisplay.module.css'
interface CounterDisplayProps {
  value: number;
  className?: string;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ value }) => (
  <div className={styles.counterDisplay}>
    <Counter value={value} />
  </div>
);

export default CounterDisplay;