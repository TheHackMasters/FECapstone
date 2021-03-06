/*eslint-disable */

import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {ContextObj} from './ContextObj.jsx';
import AnswerEntry from './AnswerEntry.jsx';
import AnswerModal from './AnswerModal.jsx';
import {getServer, grabReviewScore, formatDate, putServer} from '../helpers/helpers.js';
import {MoreAnswers, Highlight, AnswerList, Link, QText, QLetter, QEntry, SellerSig} from './styles.js';


const QAListEntry = (props) => {

  var listButton;
  var questionBody = props.question.question_body;

  const {productInfo, productId} = useContext(ContextObj);
  const [answers, setAnswers] = useState({results: []});
  const [showAnswers, setShowAnswers] = useState(false);
  const [questionHelp, setQuestionHelp] = useState(false);
  const [questionHelpfulness, setQuestionHelpfulness] = useState(props.question.question_helpfulness);
  const [newAnswer, setNewAnswer] = useState('');
  const [limit, setLimit] = useState(2);

  var answerList = answers.results;
  const questionId = props.question.question_id;

  useEffect(() => {
    getServer(`/qa/questions/${questionId}/answers?count=100`)
      .then((result) => {
        setAnswers(result);
      })
      .catch((error) => console.log('answers', error));
  }, [questionId, newAnswer]);

  useEffect(() => {
    setLimit(2);
  }, [productId]);

  const listHandler = (array) => {
    var clone = array.slice();
    return clone.slice(0, limit);
  };

  const increaseLimit = () => {
    setLimit(prevState => prevState + 1000);
  };

  const decreaseLimit = () => {
    setLimit(2);
  };

  const updateQuestionHelp = () => {
    if (!questionHelp) {
      putServer(`/qa/questions/${questionId}/helpful`)
        .then(() => { setQuestionHelp(true); })
        .then(() => { setQuestionHelpfulness(prevState => prevState + 1); })
        .catch((error) => console.log('helpfulness', error));
    }
  };

  const sortAnswersBySeller = (answers) => {
    var sellers = [];
    var result = [];
    for (var i = 0; i < answers.results.length; i++) {
      var answer = answers.results[i];
      if (answer.answerer_name === 'Seller' || answer.answerer_name === 'seller') {
        sellers.push(answer);
      } else {
        result.push(answer);
      }
    }
    for (var i = sellers.length - 1; i >= 0; i--) {
      result.unshift(sellers[i]);
    }
    return result;
  };

  const highlightSearch = (string) => {
    var clone = string.toLowerCase().slice();
    var query = props.query.toLowerCase();
    var result;
    if (props.query.length >= 3) {
      var index = clone.indexOf(query);
      if (index > -1) {
        result =
        <div>
          <span>{string.slice(0, index)}</span>
          <Highlight>
            <b>{string.slice(index, index + query.length)}</b>
          </Highlight>
          <span>{string.slice(index + query.length)}</span>
        </div>;
      }
      return result;
    }
    return string;
  };

  if (answerList.length - listHandler(answerList).length === 0 && answerList.length <= 2) {
    listButton = null;
  } else if (answerList.length - listHandler(answerList).length === 0 && answerList.length > 2) {
    listButton = <MoreAnswers onClick={decreaseLimit}>Collapse Answers</MoreAnswers>;
  } else {
    listButton = <MoreAnswers onClick={increaseLimit}>See More Answers</MoreAnswers>;
  }

  return (
    <div>
      <QEntry>
        <QLetter>Q:</QLetter>
        <QText>{highlightSearch(questionBody)}</QText>
        <SellerSig>
          <span>    Helpful?</span>
          <Link onClick={updateQuestionHelp}> Yes ({questionHelpfulness})</Link>
          <span> | </span>
          <Link onClick={() => setShowAnswers(true)}> Add Answer</Link>
        </SellerSig>
      </QEntry>
      <div>
        <AnswerModal
          setNewAnswer={setNewAnswer}
          onClose={() => setShowAnswers(false)}
          name={productInfo.name}
          question={props.question.question_body}
          qId={props.question.question_id}
          show={showAnswers}/>
      </div>
      <AnswerList>
        {listHandler(sortAnswersBySeller(answers)).map((answer, index) => <AnswerEntry answer={answer} key={index}/>)}
      </AnswerList>
      {listButton}
    </div>
  );
};

export default QAListEntry;