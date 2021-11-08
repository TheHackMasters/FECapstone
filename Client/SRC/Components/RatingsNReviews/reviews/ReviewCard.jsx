import React, { useState, useEffect } from 'react';
import StarRating from '../ratings/StarRating.jsx';
import Moment from 'react-moment';
import styled from 'styled-components'

const ReviewCard = ({ review, index }) => {
  const {
    body, count, reviewer_name, summary, date, helpfulness, rating,
  } = review;
  const [helpfulnessState, setHelpfulnessState] = useState(helpfulness)
  // const body = review.body

  // console.log(review, 'review');

  const handleHelpfulClick = () => {
    setHelpfulnessState(prev => prev + 1)
  }

  return (
    <>
          <hr/>

      <div>
        {/* <div>*****</div> */}
        <StarRating rating={rating}/>
        {/* <div>{rating}</div> */}
        <h3>{summary}</h3>
        <p>
          {`Username: ${reviewer_name}`}
          {' '}
          {'Posted on : '}
          {/* {`Date: ${date}`} */}
          <Moment format="LLL">{date}</Moment>
        </p>
        <p>
          {body}
        </p>
        <span> Helpful | ? </span>
        <HelpButton onClick={handleHelpfulClick}>
          {' '}
          Yes (
          {helpfulnessState}
          )
          {' '}
        </HelpButton>
        <span> Report</span>
      </div>

    </>
  );
};

export default ReviewCard;

const HelpButton = styled.button`
padding: 0;
border: none;
background: none;
cursor: pointer;

`