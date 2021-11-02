import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../Client/SRC/App.jsx';
import OverviewTest from '../Client/SRC/Components/DOverview/Overview.Test.js';
import QATest from '../Client/SRC/Components/YQandA/test/QA.test.js';
//update with your test files
// import OverviewTest from '../Client/SRC/Components/DOverview/Overview.Test.js';
// import OverviewTest from '../Client/SRC/Components/DOverview/Overview.Test.js';
import RatingsNReviewsTest from '../Client/SRC/Components/RatingsNReviews/RatingsNReviews.Test.js';


const AppTest = () => {
  it('should display initial UI', () => {
    render(<App />);
    expect(screen.getByLabelText('Hello')).toBeInTheDocument();
    expect(screen.getByLabelText('Hello')).toBeInTheDocument();
    expect(screen.getByLabelText('Hello')).toBeInTheDocument();
    expect(screen.getByLabelText('Hello')).toBeInTheDocument();
  });

  it('should do stuff', () => {
    render(<App />);
    const itemInput = screen.getByLabelText('Hello');
    userEvent.type(itemInput, 'apple');
    expect(screen.getByDisplayValue('apple')).toBeInTheDocument();
  });
};

AppTest();

OverviewTest();
QATest();
RatingsNReviewsTest();
// update with your testing function call
// OverviewTest();
// OverviewTest();
// OverviewTest();
