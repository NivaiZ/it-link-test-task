import React from 'react'
import ButtonIncrement from '../../components/organisms/ButtonIncrement/ButtonIncrement'
import styles from './homePage.module.css'

const HomePage: React.FC = ()=> {
	return (
		<div className={styles.homepage__wrapper}>
			<h1 className={styles.homepage__header}>Тестируем счетчик</h1>
			<ButtonIncrement></ButtonIncrement>
		</div>
	)
}

export default HomePage