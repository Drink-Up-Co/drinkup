import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App } from '../src/App'

test('renders correct content', () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText('Time To Drink Up');
})

test('allows users to select and add ingredients to the search', () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText('Time To Drink Up');
})
