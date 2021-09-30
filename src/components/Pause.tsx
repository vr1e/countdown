import React from 'react';

interface Props {
	pause: () => void;
}

export default function Pause({ pause }: Props) {
	return (
		<button title='pause' className='pause' onClick={pause}>
			{'\u23f8'}
		</button>
	);
}
