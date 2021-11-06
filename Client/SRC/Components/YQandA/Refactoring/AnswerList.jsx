/*eslint-disable */

import React from 'react';
import Answer from './Answer.jsx';
import {data} from './data/data.js'

const AnswerList = () => {
  const answerList = Object.values(data.results.answers);
  console.log(answerList)
  // const newList = answerList.map(answer => {
  //  return <Answer answer={answer }key={answer.id} body={answer.body}/>
  // })

  return (
   <div>
    {/* {newList} */}
   </div>
  )
}

export default AnswerList;