import React, { useState, useEffect } from 'react';
import StarRating from '../ratings/StarRating.jsx';
import Moment from 'react-moment';

const ReviewCard = ({ review, index }) => {
  const {
    body, count, reviewer_name, summary, date, helpfulness, rating,
  } = review;
  // const body = review.body

  // console.log(review, 'review');

  return (
    <>
      <div>
        {/* <div>*****</div> */}
        <StarRating rating={rating}/>
        <div>{rating}</div>
        <h3>{summary}</h3>
        <p>
          {`Username: ${reviewer_name}`}
          {' '}
          {'Posted on : '}
          {/* {`Date: ${date}`} */}
          <Moment >{date}</Moment>
        </p>
        <p>
          {body}
        </p>
        <span> Helpful | ? </span>
        <button>
          {' '}
          Yes (
          {helpfulness}
          )
          {' '}
        </button>
        <span> Report</span>
      </div>

    </>
  );
};

export default ReviewCard;
