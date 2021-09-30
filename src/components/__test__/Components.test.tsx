import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import TimeEnter from '../TimeEnter';

describe('<TimeEnter>', () => {
	it('renders input field', () => {
		const { getByPlaceholderText } = render(
			<TimeEnter enteredTime={'1000'} enterTimeValue={() => {}} />
		);
		const inputField = getByPlaceholderText(/Type in time in seconds/i);
		expect(document.body.contains(inputField));
	});
});
