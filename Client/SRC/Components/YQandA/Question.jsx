/*eslint-disable */

import React from 'react';
import {HelpContainer, HelpButton, List, Count, QuestionLetter, AddButton} from './styles/Helpful.style.js';
import AnswerList from './AnswerList.jsx';

const Question = ({question}) => {
  return (
    <>
      <List>
       <QuestionLetter>
         Q
        </QuestionLetter>
         : {question.question_body}
        <HelpContainer>
          Helpful?
        </HelpContainer>
        <HelpButton>
          Yes
        </HelpButton>
        <Count>
          ({question.question_helpfulness})&nbsp;|&nbsp;
        </Count>
        <AddButton>
          add answer
        </AddButton>
      </List>
      <AnswerList answers={question.answers}/>
    </>
  )
}

export default Question;