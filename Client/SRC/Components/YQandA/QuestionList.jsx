/*eslint-disable */

import React from 'react';
import Question from './Question.jsx'

const QAList = ({qaList, answerList}) => {

  console.log(AnswerList)


  let qList = [];
  if (qaList !== undefined) {
    qList = qaList.results;
  };


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