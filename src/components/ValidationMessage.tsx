import React from 'react';

interface Props {
	message: string;
}

export default function ValidationMessage({ message }: Props) {
	return <div className='validation-message warning'>{message}</div>;
}
