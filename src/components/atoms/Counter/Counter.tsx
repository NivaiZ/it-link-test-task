import styles from './counter.module.css'

interface CounterProps {
  value: number;
}

const Counter = ({ value }: CounterProps) => <span className={styles.counter__field}>{value}</span>;

export default Counter;