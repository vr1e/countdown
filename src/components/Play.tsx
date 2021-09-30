import React from 'react';

interface Props {
	play: () => void;
}

export default function Play({ play }: Props) {
	return (
		<button title='play' className='play' onClick={play}>
			{'\u23f5'}
		</button>
	);
}
