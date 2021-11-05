/*eslint-disable */

import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = ({answers}) => {
  const sortedAnswers = Object.values(answers);
  const newList = sortedAnswers.map(answer => {
    <Answer />
  })

  return (
   <div>
     hello123
   </div>
  )
}

export default AnswerList;