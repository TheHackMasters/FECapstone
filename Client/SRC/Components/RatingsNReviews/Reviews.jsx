import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dummydata from './dummydata.js';
import ReviewCard from './ReviewCard.jsx';

const Reviews = (props) => {
  const [data, setData] = useState(dummydata);

  let reviewsArray = [];
  if (props.reviews !== undefined) {
    const { reviews } = props;
    console.log(reviews.reviews, 'inside');
    reviewsArray = reviews.reviews
  }

  return (

    <>

      <ReviewsSection>

        <h1>Hello from Reviews</h1>

        <div className="reviews">
          <div>248 reviews, sorted by relevance</div>

          {reviewsArray.map((review, index) => (

            <ReviewCard
              review={review}
              index={index}
            />

          ))}

          <div>
            <MoreReviews>MORE REVIEWS</MoreReviews>
            <AddReview>ADD A REVIEW +</AddReview>
          </div>

        </div>
      </ReviewsSection>

    </>
  );
};

export default Reviews;

const ReviewsSection = styled.section`
display: grid;
background-color: white;
width: 100%;
grid-column: ;
grid-row: 1 / 10;
grid-template-rows: 50px repeat(auto, 200px) repeat(2, 50px);
padding: 20px;
`;

const MoreReviews = styled.button`
grid-column: 1 / 4;
width: 130px;
height: 70px;
margin: 2%;
`;

const AddReview = styled.button`
grid-column: 4 / 4;
width: 130px;
height: 70px;
margin: 2%;
`;
