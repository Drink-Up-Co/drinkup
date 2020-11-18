import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getQueriesForElement } from '@testing-library/dom';

test('renders correct content', () => {
  const root = document.createElement('div')
  ReactDOM.render(<App />, root)

  const { getByText, getByLabelText } = getQueriesForElement(root);


})

