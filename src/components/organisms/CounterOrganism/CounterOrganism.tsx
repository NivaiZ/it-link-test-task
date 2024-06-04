// src/organisms/CounterOrganism.tsx
import React from 'react'
import CounterDisplay from '../../molecules/CounterDisplay/CounterDisplay'
import IncrementDecrement from '../../molecules/IncrementDecrement/IncrementDecrement'
import styles from './counterOrganism.module.css'

interface CounterOrganismProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterOrganism: React.FC<CounterOrganismProps> = ({ value, onIncrement, onDecrement }) => (
  <div className={styles.counterOrganism}>
    <CounterDisplay value={value} />
    <IncrementDecrement onIncrement={onIncrement} onDecrement={onDecrement} />
  </div>
);

export default CounterOrganism;