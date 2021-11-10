import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App.jsx';
import Questions from '../Refactoring/Questions.jsx';
import QuestionSearch from '../Refactoring/QuestionSearch.jsx';

const QATest = () => {
  it('should render the QATest', () => {
    render(<App />);
    expect(screen.getByText('Questions & Answers', {exact: false}));
  });

  it('should display initial UI', () => {
    render(<Questions />);
    expect(screen.getByDisplayValue('Questions & Answers')).toBeInTheDocument();
  });

  it('should display Search element', () => {
    render(<QuestionSearch />);
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS')).toBeVisible();
  });
};

export default QATest;
