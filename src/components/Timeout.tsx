import React from 'react';
import parseTime from '../util/parseTime';

interface Props {
	displayTime: number;
}

export default function Timeout({ displayTime }: Props) {
	const time = parseTime(displayTime);
	return (
		<div className='timeout'>
			<div>
				<span>{time.hours}</span>:<span>{time.minutes}</span>:
				<span>{time.seconds}</span>.<span>{time.deciseconds}</span>
			</div>
		</div>
	);
}
