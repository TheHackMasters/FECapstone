import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App.jsx';
import RatingsNReviews from './RatingsNReviews.jsx';

const RatingsNReviewsTest = () => {
  it('should render the RatingsNReviews', () => {
    render(<App />);
    expect(screen.getByText('Ratings and Reviews', {exact: false}));
  });

  it('should display a Review Card', () => {
    render(<RatingsNReviews />);

    expect(screen.getByDisplayValue('review')).toBeInTheDocument();
  });
};

export default RatingsNReviewsTest;
