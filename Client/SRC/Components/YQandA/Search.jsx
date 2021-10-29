/*eslint-disable */
import React, {useState} from 'react';
import Input from './styles/SearchBar.style.js'

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <form>
        <Input
          type='text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          value={searchTerm}
          onChange={event=>handleSubmit(event)}
        />
      </form>
    </>
  )
}

export default Search;