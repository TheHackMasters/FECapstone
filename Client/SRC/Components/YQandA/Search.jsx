/*eslint-disable */
import React, {useState} from 'react';
import {Input, Form} from './styles/SearchBar.style.js'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <Form>
        <Input
          type='text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          value={searchTerm}
          onChange={event=>handleSubmit(event)}
        />
          <SearchIcon />
      </Form>
    </>
  )
}

export default Search;