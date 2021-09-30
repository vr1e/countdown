import React, { useEffect, useRef, useState } from 'react';
import Pause from './components/Pause';
import Play from './components/Play';
import Stop from './components/Stop';
import TimeEnter from './components/TimeEnter';
import Timeout from './components/Timeout';
import ValidationMessage from './components/ValidationMessage';
import './styles/global.css';

export default function App() {
	const [time, setTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<null | boolean>(null);
	const [message, setMessage] = useState('');
	const [enteredTime, setEnteredTime] = useState('');
	const timeElapsed = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let interval: any = null;

		if (time === 0) clearInterval(interval);

		if (isRunning) {
			if (time === 0) {
				setTime(parseInt(enteredTime) * 10);
			}

			interval = setInterval(() => {
				setTime(prevTime => prevTime - 1);
			}, 100);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	useEffect(() => {
		const percentage = Math.round((time / parseInt(enteredTime)) * 100) / 10;
		timeElapsed.current?.style.setProperty('height', `${percentage}%`);

		if (time === 0 && isRunning) {
			stop();
			setMessage('Your time expired!');
		}
	}, [time]);

	function play() {
		if (enteredTime && parseInt(enteredTime) > 0) {
			setIsRunning(true);
			setMessage('');
		} else {
			setMessage('Please enter time');
		}
	}

	function pause() {
		setIsRunning(false);
	}

	function stop() {
		setIsRunning(null);
		setEnteredTime('');
		setTime(0);
		timeElapsed.current?.style.setProperty('height', `0%`);
	}

	function enterTimeValue(e: React.ChangeEvent<HTMLInputElement>) {
		setEnteredTime(e.currentTarget.value);
	}

	return (
		<div>
			<main>
				<div className='content-wrapper'>
					<header>
						<h1>Countdown app</h1>
					</header>
					<div className='countdown-timer'>
						{isRunning !== null && (
							<div className='display-time'>
								<div className='time-elapsed' ref={timeElapsed}></div>
							</div>
						)}

						<div className='counter'>
							{isRunning === null && (
								<TimeEnter
									enterTimeValue={enterTimeValue}
									enteredTime={enteredTime}
									play={play}
								/>
							)}
							{isRunning !== null && <Timeout displayTime={time} />}
						</div>
						<div className='controls'>
							{!isRunning && <Play play={play} />}
							{isRunning && <Pause pause={pause} />}
							<Stop isRunning={isRunning} stop={stop} />
						</div>
						<ValidationMessage message={message} />
					</div>
				</div>
			</main>
		</div>
	);
}
