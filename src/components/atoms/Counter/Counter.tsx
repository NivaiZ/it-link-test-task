// src/atoms/Counter.tsx
import React from 'react'
import Text from '../Text/Text'
import styles from './counter.module.css'

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => <Text className={styles.counter__field}>{value}</Text>;

export default Counter;