// src/molecules/IncrementDecrement.tsx
import React from 'react'
import ButtonText from '../ButtonText/ButtonText'
import styles from './incrementDecrement.module.css'

interface IncrementDecrementProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const IncrementDecrement: React.FC<IncrementDecrementProps> = ({ onIncrement, onDecrement }) => (
  <div className={styles.button__list}>
    <ButtonText className={styles.button__operations} onClick={onDecrement} type='button'>—</ButtonText>
    <ButtonText className={styles.button__operations} onClick={onIncrement} type='button'>+</ButtonText>
  </div>
);

export default IncrementDecrement;