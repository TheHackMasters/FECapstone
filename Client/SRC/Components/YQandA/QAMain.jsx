/*eslint-disable */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import {Header, Paragraph} from './styles/Header.style.js';
import QAList from './QuestionList.jsx'

const QAMain = ({qaList, answerList}) => {

  return (
    <div>
      <Header>Questions & Answers</Header>
      <Paragraph>Find answers in Q&As</Paragraph>
      <Search qaList={qaList}/>
      <QAList qaList={qaList} answerList={answerList} />
    </div>
  )
};

export default QAMain;
