/*eslint-disable */
import React from 'react';
import {HelpContainer, HelpButton, List, Count} from './styles/Helpful.style.js';

var moment = require('moment');

const Answer = ({answer, body}) => {
  return (
    <>
      <div>
        A: {body}
      </div>
      <span>
        by {answer.answerer_name},
      </span>
      <span>
       &nbsp;&nbsp;{moment(answer.date).format('LL')}
      </span>
      <span>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      </span>
      <span>
        helpful?
      </span>
      <button>
        Yes
      </button>
      <span>
        ({answer.helpfulness})
      </span>
      <span>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      </span>
      <button>
        report
      </button>
    </>
  )
}

export default Answer;