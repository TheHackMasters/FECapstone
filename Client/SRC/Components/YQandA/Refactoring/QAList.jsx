/*eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import QAListEntry from './QAListEntry.jsx';
import {ContextObj} from './ContextObj.jsx';
import QuestionSearch from './QuestionSearch.jsx';
import {ListButton, QButton, QAListGrid, QAListD, EmptyListButton} from './styles.js';

const QAList = (props) => {
  var questionList = props.questions;
  var listButton;

  const [qLimit, setQLimit] = useState(4);
  const {productId} = useContext(ContextObj);


  useEffect(() => {
    setQLimit(4);
  }, [productId]);

  const listHandler = (array) => {
    var clone = array.slice();
    return clone.slice(0, qLimit);
  };

  const increaseLimit = () => {
    setQLimit(prevState => prevState + 2);
  };

  if (questionList.length === 0) {
    return (
      <QAListGrid>
        <QAListD>
          {listHandler(questionList).map((question, index) => (<QAListEntry query={props.query} question={question} key={index} />))}
        </QAListD>
        <EmptyListButton>
          {props.addQuestion}
          {listButton}
        </EmptyListButton>
      </QAListGrid>
    );
  }

  if (questionList.length - listHandler(questionList).length === 0) {
    listButton = <div className="emptyDiv"></div>;
  } else {
    listButton = <ListButton><QButton onClick={increaseLimit}>More Answered Questions</QButton></ListButton>;
  }

  return (
    <QAListGrid>
      <QAListD>
        {listHandler(questionList).map((question, index) => (<QAListEntry query={props.query} question={question} key={index} />))}
      </QAListD>
      <div>
        {props.addQuestion}
        {listButton}
      </div>
    </QAListGrid>
  );
};

export default QAList;