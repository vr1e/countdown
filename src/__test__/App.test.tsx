import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from '../App';

describe('<App>', () => {
	it('renders h1 title', () => {
		const { getByText, getByTitle } = render(<App />);
		const h1Element = getByText(/Countdown app/i);
		expect(document.body.contains(h1Element));
	});
});

describe('<App>', () => {
	it('renders Play button', () => {
		const { getByTitle } = render(<App />);
		const buttonPlay = getByTitle(/play/i);
		expect(document.body.contains(buttonPlay));
	});
});

describe('<App>', () => {
	it('renders Stop button', () => {
		const { getByTitle } = render(<App />);
		const buttonStop = getByTitle(/stop/i);
		expect(document.body.contains(buttonStop));
	});
});

describe('<App>', () => {
	it('renders Input field', () => {
		const { getByPlaceholderText } = render(<App />);
		const inputField = getByPlaceholderText(/Type in time in seconds/i);
		expect(document.body.contains(inputField));
	});
});
