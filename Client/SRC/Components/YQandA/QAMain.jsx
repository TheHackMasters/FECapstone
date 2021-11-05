/*eslint-disable */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import {Header, Paragraph} from './styles/Header.style.js';

const QAMain = () => {
  const [questionList, setQuestionList] = useState([])

  return (
    <div>
      <Header>Questions & Answers</Header>
      <Paragraph>Find answers in Q&As</Paragraph>
      <Search />
    </div>
  )
};

export default QAMain;
