/*eslint-disable */

import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = ({answers}) => {
  const answerList = Object.values(answers);

  const newList = answerList.map(answer => {
   return <Answer answer={answer }key={answer.id} body={answer.body}/>
  })

  return (
   <div>
    {newList}
   </div>
  )
}

export default AnswerList;