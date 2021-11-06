/*eslint-disable */
import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Input, Container} from './styles/SearchBar.style.js'
import {LoadMoreButton, AddMoreQuestion} from './styles/Button.style.js';
import {UserContainer, HelpAContainer, HelpAButton, AnswerCount, Report} from './styles/AnswerButton.style.js';
import {HelpContainer, HelpButton, List, Count, QuestionLetter, AddButton} from './styles/Helpful.style.js';
import posts from './data/data.js';
import ModalQuestion from './QuestionModal.jsx';
import ModalAnswer from './AnswerModal.jsx';
import {data} from './data/data.js';
var moment = require('moment');

// import AnswerList from './answerList.jsx';

// if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

const Search = ({qaList}) => {

  const [search, setSearch] = useState('');
  const [questionList, setQuestionList] = useState([]);
  const [qModalIsOpen, setQModalIsOpen] = useState(false);
  const [aModalIsOpen, setAModalIsOpen] = useState(false);
  let isFull = true;

  const handleClick = () => setQuestionList(restList);
  const openQModal = () => setQModalIsOpen(prev => !prev);
  const openAModal = () => setAModalIsOpen(prev => !prev);

  // let qList = [];
  // if (qaList !== undefined) {
  //   qList = qaList.results;
  // }
  const qList = data.results;

  const filteredList = qList.filter(question => {
    if (search === '') {
      isFull = false;
      return ''
    } else if (
      question.question_body.toLowerCase().includes(search.toLowerCase())) {
      return question
    }
  })

  const handleIncrement = () => {
    setHelpCount(prev => prev + 1)
  };


  const newList = filteredList.slice(0,2).map(question => {
    const answers = Object.values(question.answers);
    let answer = '';
    let user = '';
    let date = '';
    let helpful = 0;
    for (let i = 0; i < answers.length; i++) {
      answer=answers[i].body;
      user=answers[i].answerer_name;
      date=answers[i].date;
      helpful=answers[i].helpfulness;
    }
    return  (<List key={question.question_id}>
        <div>
          Q: {question.question_body}
          <HelpContainer>Helpful?</HelpContainer>
          <HelpButton onClick={handleIncrement}>
            Yes
          </HelpButton>
          <Count>
            ({question.question_helpfulness})
            &nbsp;|&nbsp;
          </Count>
          <AddButton onClick={openAModal}>
            Add Answer
          </AddButton>
          <ModalAnswer
            aModalIsOpen={aModalIsOpen}
            setAModalIsOpen={setAModalIsOpen}
          />
        </div>
        <div>
        A: {(answer.length===0) ? 'No answer provided' : answer}
        <div>
          {(answer.length===0) ? '' :
            <div>
              <UserContainer>
                by &nbsp;
               {user}
                &nbsp;&nbsp;{moment(date).format('LL')}
                &nbsp; |
              </UserContainer>
              <HelpAContainer>
                helpful?
              </HelpAContainer>
              <HelpAButton>
                Yes
              </HelpAButton>
              <AnswerCount>
                ({helpful})
                &nbsp; |
              </AnswerCount>
              <Report>
                Report
              </Report>
            </div>
          }
        </div>
      </div>
      </List>)
  }
    )

  const restList = filteredList.slice(2).map(question => {
    const answers = Object.values(question.answers);
    let answer = '';
    let user = '';
    let date = '';
    let helpful = 0;
    for (let i = 0; i < answers.length; i++) {
      answer=answers[i].body;
      user=answers[i].answerer_name;
      date=answers[i].date;
      helpful=answers[i].helpfulness;
    }
    return  (<List key={question.question_id}>
      <div>
        Q: {question.question_body}
        <HelpContainer>Helpful?</HelpContainer>
        <HelpButton onClick={handleIncrement}>
          Yes
        </HelpButton>
        <Count>
          ({question.question_helpfulness})
          &nbsp;|&nbsp;
        </Count>
        <AddButton onClick={openAModal}>
            Add Answer
        </AddButton>
        <ModalAnswer
            aModalIsOpen={aModalIsOpen}
            setAModalIsOpen={setAModalIsOpen}
          />
      </div>
      <div>
      A: {(answer.length===0) ? 'No answer provided' : answer}
        <div>
          {(answer.length===0) ? '' :
            <div>
              <UserContainer>
                by &nbsp;
               {user}
                &nbsp;&nbsp;{moment(date).format('LL')}
                &nbsp; |
              </UserContainer>
              <HelpAContainer>
                helpful?
              </HelpAContainer>
              <HelpAButton>
                Yes
              </HelpAButton>
              <AnswerCount>
                ({helpful})
                &nbsp; |
              </AnswerCount>
              <Report>
                Report
              </Report>
            </div>
          }
        </div>
      </div>
    </List>)
  }
  )


  return (
    <>
      <Container>
        <Input
          type='text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          onChange={event=>setSearch(event.target.value)}
        />
          <SearchIcon
           style={{ color: '#6495ed' }}
        />
      </Container>
      <ul>
        {isFull && newList}
        <div>
        {isFull ? questionList : ''}
        {isFull &&
        <React.Fragment>
          <LoadMoreButton onClick={handleClick}>MORE ANSWERED QUESTIONS</LoadMoreButton>
          <AddMoreQuestion onClick={openQModal}>ADD A QUESTION</AddMoreQuestion>
          <ModalQuestion
            qModalIsOpen={qModalIsOpen}
            setQModalIsOpen={setQModalIsOpen}
          />
        </React.Fragment>
        }
        </div>
      </ul>
    </>
  )
}

export default Search;