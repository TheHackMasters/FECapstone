import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App.jsx';
import RIAC from '../RIAC.jsx';

const RIACTest = () => {
  it('should render RECOMMENDED', () => {
    render(<App />);
    expect(screen.getByText('RECOMMENDED', {exact: false}));
  });

  it('should render OUTFITS', () => {
    render(<App />);
    expect(screen.getByText('OUTFITS', {exact: false}));
  });

  it('should display initial UI', () => {
    render(<RIAC />);
    expect(screen.getByDisplayValue('First')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Second')).toBeInTheDocument();
  });
};

export default RIACTest;
