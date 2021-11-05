/*eslint-disable */

import React from 'react';
import AnswerList from './AnswerList.jsx';

const Question = ({question}) => {
  return (
    <>
      <div>
        Q: {question.question_body}
      </div>
      <span>
        Helpful?
      </span>
      <button>
        Yes
      </button>
      <span>
        ({question.question_helpfulness})
      </span>
      <span>
      &nbsp;|&nbsp;
      </span>
      <button>
        add answer
      </button>
      <AnswerList answers={question.answers}/>
    </>
  )
}

export default Question;