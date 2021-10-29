import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App.jsx';

const OverviewTest = () => {
  it('should render the Overview', () => {
    render(<App />);
    expect(screen.getByText('Overview', {exact: false}));
  });

  it('should do stuff', () => {
    render(<App />);
    const itemInput = screen.getByLabelText('Hello');
    userEvent.type(itemInput, 'apple');
    expect(screen.getByDisplayValue('apple')).toBeInTheDocument();
  });
};

export default OverviewTest;
