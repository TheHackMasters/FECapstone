/*eslint-disable */

import React from 'react';
import posts from './data/data.js';
import {HelpContainer, HelpButton, List, Count} from './styles/Helpful.style.js';



const QAList = () => {


  const handleIncrement = () => {
    setHelpCount(prev => prev + 1)
  };

  const newList = filteredList.slice(0,2).map(post =>
    <List key={post.id}>
      <div>
        Q: {post.question}
        <HelpContainer>Helpful?</HelpContainer>
        <HelpButton onClick={handleIncrement}>
          Yes
        </HelpButton>
        <Count>
          ({helpCount})
          &nbsp;|
        </Count>
      </div>
      <div>
      A: {post.answer}
      </div>
    </List>
  )

const restList = filteredList.slice(2).map(post =>
    <li key={post.id}>
      Q: {post.question}
      <br></br>
      A: {post.answer}
    </li>
)


  return (
    <div>

    </div>
  )
}

export default QAList;
