/*eslint-disable */

import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import QAList from './QAList.jsx';
import {Question, QTitle, QContainer, QButton} from './styles.js';
import {ContextObj} from './ContextObj.jsx';
import QuestionSearch from './QuestionSearch.jsx';
import QuestionModal from './QuestionModal.jsx';
import { getServer, grabReviewScore, formatDate } from '../helpers/helpers.js';


const Questions = (props) => {
  const {productInfo, productId} = useContext(ContextObj);
  const [questions, setQuestions] = useState({results: []});
  const [showQuestions, setShowQuestions] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');


  useEffect(() => {
    getServer(`/qa/questions/${productId}`)
      .then((result) => setQuestions(result))
      .catch((error) => console.log('questions get product id', error));
  }, [productId, newQuestion]);



  return (
    <Question>
      <QTitle>Questions & Answers</QTitle>
      <QContainer>
        <QuestionSearch
          questions={questions}
          addQuestion={<QButton
          onClick={() => setShowQuestions(true)}>
          ADD A QUESTION</QButton>}/>
        <QuestionModal
          setNewQuestion={setNewQuestion}
          onClose={() => setShowQuestions(false)}
          show={showQuestions}
          name={productInfo.name}
          productId={productId}/>
      </QContainer>
    </Question>
  );
};

export default Questions;

