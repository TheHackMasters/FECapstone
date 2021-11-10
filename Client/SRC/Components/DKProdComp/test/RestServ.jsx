import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

const server = setupServer(
  rest.get('/products/:id', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      id: 53425,
      campus: 'hr-sfo',
      name: 'reverse-jeggings',
      slogan: 'leetile a beetle',
      description: 'jeggings, but reverse',
      category: 'hats',
      default_price: '9,439,294.00',
      created_at: 'd',
      updated_at: 'r',
      features: [ {
        feature: 'made of water',
        value: 'and twigs',
      }, {
        feature: 'made of water',
        value: 'and twigs',
      }, {
        feature: 'made of water',
        value: 'and twigs',
      }],
    }),

  )),
);
