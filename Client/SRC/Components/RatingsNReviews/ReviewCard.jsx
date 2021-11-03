import React, { useState, useEffect } from 'react';

const ReviewCard = ({ review, index }) => {
  const { body, count, reviewer_name, summary, date } = review;
  // const body = review.body


  return (
    <>
      <div>
        <div>*****</div>
        <h3>{summary}</h3>
        <p>{'Username: '+ reviewer_name} {"Date: " + date}</p>
        <p>
          {body}
        </p>
        <span> Helpful | ? </span>
        <button> | Yes (7) </button>
        <button> | No (3) </button>
        |
        <span> Report</span>
      </div>

    </>
  );
};

export default ReviewCard;
