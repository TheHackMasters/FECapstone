/*eslint-disable */

import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import {HelpContainer, HelpButton, List, Count, QuestionLetter, AddButton} from './styles/Helpful.style.js';
import {ModalWrapper, ModalContent, CloseModalButton} from './styles/Modal.style.js';
import {ModalInput} from './styles/ModalInput.style.js';

const Question = ({question}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(prev => !prev);
  const [isAdd, setIsAdd] = useState(false);

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
      {/* <AnswerList answers={question.answers}/> */}
    </>
  )
}

export default Question;