import Button from '../../atoms/Buttons/Buttons'
import styles from './incrementDecrement.module.css'

interface IncrementDecrementProps {
  onIncrement: () => void
  onDecrement: () => void
}

const IncrementDecrement = ({ onIncrement, onDecrement }: IncrementDecrementProps) => (
  <>

    <div className={`${styles.incrementDecrement} ${styles.incrementDecrement__decrement}`}>
      <Button onClick={onDecrement}>—</Button>
    </div>

    <div className={`${styles.incrementDecrement} ${styles.incrementDecrement__increment}`}>
      <Button onClick={onIncrement}>+</Button>
    </div>
  </>
)

export default IncrementDecrement