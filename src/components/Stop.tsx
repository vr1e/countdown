import React from 'react';

interface Props {
	isRunning: null | boolean;
	stop: () => void;
}

export default function Stop({ stop, isRunning }: Props) {
	return (
		<button disabled={isRunning === null} title='stop' className='stop' onClick={stop}>
			{'\u25a0'}
		</button>
	);
}
