import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../Client/SRC/App.jsx';

it('should display initial UI', () => {
  render(<App />);
  expect(screen.getByLabelText('Hello')).toBeInTheDocument();
  expect(screen.getByLabelText('Hello')).toBeInTheDocument();
  expect(screen.getByLabelText('Hello')).toBeInTheDocument();
  expect(screen.getByLabelText('Hello')).toBeInTheDocument();
});

it('should do stuff', () => {
  render(<App />);
  const itemInput = screen.getByLabelText('Hello');
  userEvent.type(itemInput, 'apple');
  expect(screen.getByDisplayValue('apple')).toBeInTheDocument();
});
