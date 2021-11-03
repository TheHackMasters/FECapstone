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
        <span> | Yes (7) </span>
        <span> | No (3) </span>
        |
        <span> Report</span>
      </div>

    </>
  );
};

export default ReviewCard;
