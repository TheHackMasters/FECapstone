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
    value: 'and twigs',
  }, {
    feature: 'made of water',
    value: 'and twigs',
  }, {
    feature: 'made of water',
    value: 'and twigs',
  }],
};

const testStyle = { product_id: 53425, results: [{ style_id: 378587, name: 'steel boots', photos: [{ url: 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'}]}]};

const cardtest = () => {
  test('should render a card to DOM', () => {
    render(
      <Card
        key={1}
        products={testProduct}
        style={testStyle}
        setCurProdId={RIAC.props.setCurProdID}
        isRecc={false}
        clickX={RIAC.clickX}
        clickStar={RIAC.clickStar}
      />,
    );

    expect(screen.getByText('reverse-jeggings', { exact: false }));
  });
};

export default cardtest;
