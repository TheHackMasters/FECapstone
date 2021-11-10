import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App.jsx';
import RIAC from '../RIAC.jsx';
import cardtest from './CardTest.jsx';

const RIACTest = () => {
  it('should render RECOMMENDED', () => {
    render(<App />);
    render(<RIAC />);
    expect(screen.getByText('RECOMMENDED', {exact: false}));
  });

  it('should render OUTFITS', () => {
    render(<App />);
    render(<RIAC />);
    expect(screen.getByText('OUTFITS', {exact: false}));
  });
};

cardtest();

export default RIACTest;
