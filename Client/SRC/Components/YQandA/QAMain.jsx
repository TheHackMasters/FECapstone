/*eslint-disable */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search.jsx';

const QAMain = () => {
  const [questionList, setQuestionList] = useState([])

  // useEffect(()=> {
  //   axios.get('qa/questions')
  //     .then(res => {
  //       setQuestionList(res.data)
  //     })
  //     .catch(error => console.log('Error: ', error))
  // })

  return (
    <div>
      <h3>Questions & Answers</h3>
      <Search />
      <ul>
        {
          questionList.map(question => <li key={question.id}>Name: {question.name}. Description: {question.description}</li>)
        }
      </ul>
    </div>
  )
};

export default QAMain;
