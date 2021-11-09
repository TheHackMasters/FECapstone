/*eslint-disable */

import React, {useState, useEffect, useContext} from 'react';
import {ContextObj} from './ContextObj.jsx';
import {formatDate, putServer} from '../helpers/helpers.js';
import {Link, QText, QLetter} from './styles.js';


const AnswerEntry = (props) => {

  const [answerHelp, setAnswerHelp] = useState(false);
  const [answerHelpfulness, setAnswerHelpfulness] = useState(props.answer.helpfulness);
  const [reported, setReported] = useState(false);

  var report;
  var seller;

  const updateAnswerHelp = () => {
    if (!answerHelp) {
      putServer(`/qa/answers/${props.answer.answer_id}/helpful`)
        .then(() => { setAnswerHelp(true); })
        .then(() => { setAnswerHelpfulness(prevState => prevState + 1); })
        .catch((error) => console.log('answer help', error));
    }
  };

  const reportAnswer = () => {
    putServer(`/qa/answers/${props.answer.answer_id}/report`)
      .then(() => { setReported(true); })
      .catch((error) => console.log('reported', error));
  };

  if (reported) {
    report = <span>Reported</span>;
  } else {
    report = <span className="link" onClick={reportAnswer}>Report</span>;
  }

  if (props.answer.answerer_name === 'Seller' || props.answer.answerer_name === 'seller') {
    seller =
    <div>
      <span>by</span> <span style={{fontWeight: 'bold'}}> {props.answer.answerer_name}</span>
      <span>, {formatDate(props.answer.date)}  |  </span>
      <span>Helpful?</span>
      <Link onClick={updateAnswerHelp}> Yes({answerHelpfulness})</Link>  <span>| </span>
      {report}
    </div>;
  } else {
    seller =
    <div>
      <span>by {props.answer.answerer_name}</span>
      <span>, {formatDate(props.answer.date)}  |  </span>
      <span>Helpful?</span>
      <Link onClick={updateAnswerHelp}> Yes({answerHelpfulness})</Link>  <span>| </span>
      {report}
    </div>;
  }

  return (
    <div>
      <QLetter>A:</QLetter>
      <QText>
        {props.answer.body}
      </QText>
      {seller}
    </div>
  );
};

export default AnswerEntry;