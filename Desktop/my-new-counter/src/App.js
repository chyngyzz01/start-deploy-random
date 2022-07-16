import { useState } from 'react'
import Button from './components/Button/Button'
import './App.css'

function App() {
	const [counter, setCounter] = useState(0)

	const handlePlus = () => {
		setCounter(counter + 1)
	}

	const handleMinus = () => {
		if (counter > 0) {
			setCounter(counter - 1)
		}
	}
	return (
		<div className='App'>
			<h1>My counter</h1>
			<div className='block-counter'>
				<Button handleClick={handlePlus}>+</Button>
				<div className='counter'>{counter}</div>
				<Button handleClick={handleMinus}>-</Button>
			</div>
		</div>
	)
}

export default App
