import React from 'react';

interface Props {
	enteredTime: string;
	enterTimeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	play: () => void;
}

export default function TimeEnter({	enteredTime, enterTimeValue, play }: Props) {
	function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			play();
		}
	}

	return (
		<input
			type='number'
			required
			value={enteredTime}
			placeholder='Type in time in seconds'
			onChange={enterTimeValue}
			onKeyPress={handleKeyPress}
		/>
	);
}
