import React from 'react';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Card.jsx';
import RIAC from '../RIAC.jsx';

const testProduct = {
  id: 53425,
  campus: 'hr-sfo',
  name: 'reverse-jeggings',
  slogan: 'leetile a beetle',
  description: 'jeggings, but reverse',
  category: 'hats',
  default_price: '9,439,294.00',
  created_at: 'd',
  updated_at: 'r',
  features: [{
    feature: 'made of water',
    value: 'and wool',
  }],
};

const compProd = {
  id: 53425,
  campus: 'hr-sfo',
  name: 'reverse-leggings',
  slogan: 'leetile a beetle',
  description: 'leggings, but reverse',
  category: 'shirts',
  default_price: '9,439,294.00',
  created_at: 'd',
  updated_at: 'r',
  features: [{
    feature: 'made of bricks',
    value: 'and sheepskin',
  }],
};

test('should render a card to DOM', () => {
  render(
    <ComparisonModal
      openModal={true}
      setOpenModal={() => RIAC.setOpenModal(false)}
      currProduct={testProduct}
      compareProd={compProd}
    />,
  );

  expect(screen.getByText('made of bricks', { exact: false }));
});
