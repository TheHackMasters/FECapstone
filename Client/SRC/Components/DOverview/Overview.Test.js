import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import mockAxios from 'jest-mock-axios';
import sinon from 'sinon';

import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../../App.jsx';
import Overview from './Overview.jsx';
import dummyOverview from './dummydata.js';

const OverviewTest = () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  describe('Build the base overview components', () => {
    it('should render the Overview within the App', () => {
      render(<App />);
      expect(screen.getByText('OFFER', { exact: false }));
    });

    it('should render the Overview with all components', () => {
      render(<App />);
      expect(screen.getByText('OFFER', { exact: false }));
      expect(document.getElementById('overview')).toBeInTheDocument();
      expect(document.getElementById('componentorient')).toBeInTheDocument();
      expect(document.getElementById('imagebuilder')).toBeInTheDocument();
      expect(document.getElementById('ratingname')).toBeInTheDocument();
      expect(document.getElementById('styleselector')).toBeInTheDocument();
      expect(document.getElementById('cartbuilder')).toBeInTheDocument();
      expect(document.getElementById('prodinfo')).toBeInTheDocument();
    });

    it('should create selectors and buttons', () => {
      render(<App />);
      expect(screen.getAllByRole('button')).toBeTruthy();
      expect(screen.findAllByRole('select')).toBeTruthy();
      expect(screen.findAllByRole('a')).toBeTruthy();
    });
  });

  it('should allow selecting size and quantity', () => {
    render(<App />);
    const sizeSelect = screen.getByTestId('SizeSelect');
    const quantitySelect = screen.getByTestId('QuantitySelect');
    userEvent.selectOptions(sizeSelect, [screen.getByText('XS')]);
    expect(screen.getByDisplayValue('XS')).toBeInTheDocument();

    userEvent.selectOptions(sizeSelect, [screen.getByText('XS')]);
    userEvent.selectOptions(quantitySelect, [screen.getByText('4')]);
    expect(screen.getByDisplayValue('4')).toBeInTheDocument();
  });

  it('should update the overview when a new style is clicked', () => {
    const testUrl = 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80';
    render(<App />);
    screen.findByTestId('378557')
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByDisplayValue('Desert Brown & Tan')).toBeInTheDocument());

    screen.findByTestId('378559')
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByDisplayValue('Digital Red & Black')).toBeInTheDocument());
    screen.findByTestId('378559')
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByTestId('MainImage')).toHaveStyle(`background-image: url(${testUrl})`));
  });

  it('should change the price when a new style on sale is clicked', () => {
    render(<App />);
    screen.findByTestId('378560')
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByDisplayValue('$100.00')).toBeInTheDocument());

    screen.findByTestId('378560')
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByDisplayValue('$100.00')).toHaveStyle('color: red'));

    screen.findByTestId('378560')
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByDisplayValue('$140.00')).toHaveStyle('textDecorationLine: line-through'));
  });

  it('should change the main display when a gallery image is clicked', () => {
    const testUrl = 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80';

    render(<App />);

    screen.findByTestId('378561')
      .then((data) => userEvent.click(data))
      .then(() => screen.findByTestId('photo2'))
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByTestId('MainImage')).toHaveStyle(`background-image: url(${testUrl})`));
  });
};

export default OverviewTest;
