/*eslint-disable */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import {Header, Paragraph} from './styles/Header.style.js';
import {data} from './data/data.js';


const QAMain = ({qaList}) => {

  return (
    <div>
      <Header>Questions & Answers</Header>
      <Paragraph>Find answers in Q&As</Paragraph>
      <Search qaList={qaList}/>
    </div>
  )
};

export default QAMain;