import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../Client/SRC/App.jsx';
import OverviewTest from '../Client/SRC/Components/DOverview/Overview.Test.js';
import QATest from '../Client/SRC/Components/YQandA/test/QA.test.js';
import RIACTest from '../Client/SRC/Components/DKProdComp/test/ProdCompTest.js';
import RatingsNReviewsTest from '../Client/SRC/Components/RatingsNReviews/tests/RatingsNReviews.Test.js';
import ReviewCardTest from "../Client/SRC/Components/RatingsNReviews/tests/ReviewCard.Test.js";
import RatingsTest from "../Client/SRC/Components/RatingsNReviews/tests/Ratings.Test.js";
import ReviewsTest from "../Client/SRC/Components/RatingsNReviews/tests/Reviews.Test.js";



const AppTest = () => {
  it('should display initial UI', () => {
    render(<App />);
    expect(screen.getByText('Soliloquy')).toBeInTheDocument();
    expect(screen.getByText('OFFER')).toBeInTheDocument();
    expect(screen.getByText('RECOMMENDED')).toBeInTheDocument();
    expect(screen.getByText('Questions & Answers')).toBeInTheDocument();
    expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument();
  });
};

AppTest();

OverviewTest();
QATest();

RIACTest();

ReviewCardTest();
RatingsNReviewsTest();
RatingsTest();
ReviewsTest();

// update with your testing function call
// OverviewTest();
// OverviewTest();
// OverviewTest();
