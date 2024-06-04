import React from 'react'
import CounterContainer from '../../containers/CounterContainer'
import styles from './homePage.module.css'

const HomePage: React.FC = ()=> {
	return (
		<div className={styles.homepage__wrapper}>
			<h1 className={styles.homepage__header}>Тестируем счетчик</h1>
			<CounterContainer></CounterContainer>
		</div>
	)
}

export default HomePage