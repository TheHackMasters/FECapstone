import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App.jsx';
import QAMain from '../QAMain.jsx';

const QATest = () => {
  it('should render the QATest', () => {
    render(<App />);
    expect(screen.getByText('Questions & Answers', {exact: false}));
  });

  it('should display initial UI', () => {
    render(<QAMain />);
    expect(screen.getByDisplayValue('Find answers in Q&As')).toBeInTheDocument();
  });
};

export default QATest;
