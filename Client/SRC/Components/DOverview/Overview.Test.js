import React from 'react';
import ReactDOM from 'react-dom';

import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../../App.jsx';
import Overview from './Overview.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import CartBuilder from './CartBuilder.jsx';

const OverviewTest = () => {
  it('should render the Overview within the App', () => {
    render(<App />);
    expect(screen.getByText('Overview', {exact: false}));
  });

  it('should render the Overview with all components', () => {
    render(<Overview />);
    expect(screen.getByText('Overview', {exact: false}));
    expect(document.getElementById('overview')).toBeInTheDocument();
    expect(document.getElementById('componentorient')).toBeInTheDocument();
    expect(document.getElementById('imagebuilder')).toBeInTheDocument();
    expect(document.getElementById('ratingname')).toBeInTheDocument();
    expect(document.getElementById('styleselector')).toBeInTheDocument();
    expect(document.getElementById('cartbuilder')).toBeInTheDocument();
    expect(document.getElementById('prodinfo')).toBeInTheDocument();
  });

  it('should create selectors, checkboxes, and buttons', () => {
    render(<ImageBuilder />);
    expect(screen.getAllByRole('button')).toBeTruthy();
  });

  it('should allow selecting size and quantity', () => {
    render(<CartBuilder />);
    const itemInput = screen.getByLabelText('Hello');
    userEvent.type(itemInput, 'apple');
    expect(screen.getByDisplayValue('apple')).toBeInTheDocument();
  });
};

export default OverviewTest;
