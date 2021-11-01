/*eslint-disable */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import posts from './data/data.js';
import {Header, Paragraph} from './styles/Header.style.js'

const QAMain = () => {
  // const [questionList, setQuestionList] = useState([])

  // useEffect(()=> {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions')
  //     .then(res => {
  //       setQuestionList(res.data)
  //     })
  //     .catch(error => console.log('Error: ', error))
  // })

  return (
    <div>
      <Header>Questions & Answers</Header>
      <Paragraph>Find answers in Q&As</Paragraph>
      <Search />

    </div>
  )
};

export default QAMain;
