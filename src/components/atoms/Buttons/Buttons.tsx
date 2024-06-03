import React from 'react'
import styles from './buttons.module.css'

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => (
    <button className={styles.button__operations} onClick={onClick} type='button'>{children}</button>
);

export default Button;