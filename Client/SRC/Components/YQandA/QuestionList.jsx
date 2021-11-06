/*eslint-disable */

import React from 'react';
import Question from './Question.jsx'
import {data} from './data/data.js'

const QAList = ({qaList, answerList}) => {

  // let qList = [];
  // if (qaList !== undefined) {
  //   qList = qaList.results;
  // };

  const qList = data.results;

  const list = qList.map(question =>
    <Question
      question={question}
      key={question.question_id}
    />
  )

   return (
     <div>
       {list}
     </div>
   )
}

export default QAList;