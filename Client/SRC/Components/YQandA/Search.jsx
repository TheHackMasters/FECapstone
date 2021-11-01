/*eslint-disable */
import React, {useState} from 'react';
import {Input, Container} from './styles/SearchBar.style.js'
import SearchIcon from '@mui/icons-material/Search';
import posts from './data/data.js';
import {LoadMoreButton} from './styles/LoadMoreQ.style.js'


const Search = () => {

  const [search, setSearch] = useState('');
  let isFull = true;

  // const handleSubmit = (event) => {
  //   setSearchTerm(event.target.value)
  // }
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

  const newList = filteredList.map(post =>
      <li key={post.id}>
        Q: {post.question}
        <br></br>
        A: {post.answer}
      </li>
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
        {
          isFull && newList
        }
        <div>
        {
          isFull && <LoadMoreButton>LOAD MORE QUESTIONS</LoadMoreButton>
        }
        </div>
      </ul>
      {/* <LoadMoreButton>LOAD MORE QUESTIONS</LoadMoreButton> */}
    </>
  )
}

export default Search;