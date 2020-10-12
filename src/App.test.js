import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';
import { act } from 'react-dom/test-utils';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Main App', () => {
  it("renders routes", () => {
    act(() => {
      render(<App />, container);
    });
  });
});