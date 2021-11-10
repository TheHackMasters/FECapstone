/*eslint-disable */

import React, {useState, useEffect, useContext} from 'react';
import {ContextObj} from './ContextObj.jsx';
import QAList from './QAList.jsx';
import {SearchGrid, SearchTextBox} from './styles.js'

const QuestionSearch = (props) => {
  const [filteredList, setFilteredList] = useState(props.questions.results);
  const [query, setQuery] = useState('');

  const searchHandler = () => {
    var search = event.target.value;
    setQuery(search);
  };

  const filterQuestions = (array) => {
    var result = [];
    if (query.length >= 3) {
      for (var i = 0; i < array.length; i++) {
        var body = array[i].question_body.toLowerCase();
        var smallQuery = query.toLowerCase();
        if (body.indexOf(smallQuery) > -1) {
          result.push(array[i]);
        }
      }
      return result;
    } else {
      return array;
    }
  };

  return (
    <SearchGrid>
      <SearchTextBox 
        type="text" 
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." 
        onChange={searchHandler}>
      </SearchTextBox>
      <QAList query={query} addQuestion={props.addQuestion} questions={filterQuestions(props.questions.results)}/>
    </SearchGrid>
  );
};

export default QuestionSearch;