import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactTestUtils from 'react-dom/test-utils';
import mockAxios from 'jest-mock-axios';

import App from '../../../App.jsx';
import RIAC from '../RIAC.jsx';
import cardtest from './CardTest.jsx';

const RIACTest = () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('Render Base titles for carousels', () => {
    it('should render RECOMMENDED', () => {
      render(<App />);
      expect(screen.getByText('RECOMMENDED', { exact: false }));
    });

    it('should render OUTFITS', () => {
      render(<App />);
      expect(screen.getByText('OUTFITS', { exact: false }));
    });
  });

  describe('Should correctly render Data on Cards', () => {
    it('should render category', () => {
      render(<App />);
      expect(screen.getByText('hats', { exact: false }));
    });

    it('should render name', () => {
      render(<App />);
      expect(screen.getByText('reverse-jeggings', { exact: false }));
    });

    it('should render price', () => {
      render(<App />);
      expect(screen.getByText('4.00', { exact: false }));
    });
  });

  describe('Should render a right arrow if Related Items > 5 or Outfits Items > 5', () => {
    render(<App />);
    screen.findByTestId('378557')
      .then((data) => userEvent.click(data))
      .then(() => expect(screen.getByDisplayValue('totally jeggings')));
  });

  describe('Click on card renders new Data', () => {
    render(<App />);
    it ('should render new component', () => {
      expect(screen.getByText('Reverse-Jeggings', { exact: false }));
    });
  });
};

cardtest();

export default RIACTest;
