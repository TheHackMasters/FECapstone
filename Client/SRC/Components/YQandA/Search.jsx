/*eslint-disable */
import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Input, Container} from './styles/SearchBar.style.js'
import {LoadMoreButton, AddMoreQuestion} from './styles/Button.style.js';
import {HelpContainer, HelpButton, List, Count} from './styles/Helpful.style.js';
import posts from './data/data.js';
import Modal from './Modal.jsx'

// if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

const Search = ({qaList}) => {

  const [search, setSearch] = useState('');
  const [questionList, setQuestionList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let isFull = true;

  const initialCount = 0;
  const [helpCount, setHelpCount] = useState(initialCount);

  let qList = [];
  if (qaList !== undefined) {
    qList = qaList.results;
  }


  const filteredList = qList.filter(question => {
    if (search === '') {
      isFull = false;
      return ''
    } else if (question.question_body.toLowerCase().includes(search.toLowerCase())) {
      return question
    }
    // else if (post.answer.toLowerCase().includes(search.toLowerCase())) {
    //   return post
    // }
  })
  const handleIncrement = () => {
    setHelpCount(prev => prev + 1)
  };

  const newList = filteredList.slice(0,2).map(question =>
      <List key={question.question_id}>
        <div>
          Q: {question.question_body}
          <HelpContainer>Helpful?</HelpContainer>
          <HelpButton onClick={handleIncrement}>
            Yes
          </HelpButton>
          <Count>
            ({helpCount})
            &nbsp;|
          </Count>
        </div>
        {/* <div>
        A: {post.answer}
        </div> */}
      </List>
    )

  const restList = filteredList.slice(2).map(question =>
      <li key={question.question_id}>
        Q: {question.question_body}
        <br></br>
        {/* A: {post.answer} */}
      </li>
  )

  const handleClick = () => setQuestionList(restList);

  const openModal = () => setModalIsOpen(prev => !prev);

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
          <AddMoreQuestion onClick={openModal}>ADD A QUESTION</AddMoreQuestion>
          <Modal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        </React.Fragment>
        }
        </div>
      </ul>
    </>
  )
}

export default Search;