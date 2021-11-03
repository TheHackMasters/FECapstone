/*eslint-disable */
import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Input, Container} from './styles/SearchBar.style.js'
import {LoadMoreButton, AddMoreQuestion} from './styles/Button.style.js';
import posts from './data/data.js';
import Modal from './Modal.jsx'

// if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

const Search = () => {

  const [search, setSearch] = useState('');
  const [questionList, setQuestionList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalInput, setModalInput] = useState('')
  let isFull = true;

  const filteredList = posts.filter(post => {
    if (search === '') {
      isFull = false;
      return ''
    } else if (post.question.toLowerCase().includes(search.toLowerCase())) {
      return post
    } else if (post.answer.toLowerCase().includes(search.toLowerCase())) {
      return post
    }
  })

  const newList = filteredList.slice(0,2).map(post =>
      <li key={post.id}>
        Q: {post.question}
        <br></br>
        A: {post.answer}
      </li>
    )

  const restList = filteredList.slice(2).map(post =>
      <li key={post.id}>
        Q: {post.question}
        <br></br>
        A: {post.answer}
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