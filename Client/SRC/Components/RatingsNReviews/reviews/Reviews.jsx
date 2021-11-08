import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StarsRating } from 'stars-rating-react-hooks';
import ReviewCard from './ReviewCard.jsx';
import ReviewModal from './ReviewModal.jsx';


const Reviews = (props) => {
  // const [data, setData] = useState(dummydata);
  const [reviewCount, setReviewCount] = useState(2);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectSort, setSelectSort] = useState('highest_rating');


  let reviewsArray = [];
  if (props.reviews !== undefined) {
    const { reviews } = props;
    // console.log(reviews.reviews, 'inside');
    reviewsArray = reviews.reviews;
  }

  const openModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const handleSelectChange = (event) => {
    const sortVal = event.target.value
    setSelectSort(sortVal);

    if (sortVal === 'highest_rating') {
      reviewsArray.sort(function(a,b) {return b.rating - a.rating});
    }
    else if (sortVal === 'lowest_rating') {
      reviewsArray.sort(function(a,b) {return a.rating - b.rating});
    }
  };


  return (

    <>

      <ReviewsSection>

        <div className="reviews">
        <div>{reviewsArray.length} reviews, sorted by {' '}
              <select value={selectSort} onChange={handleSelectChange} >
                  <option value="highest_rating">Highest rating</option>
                  <option value="lowest_rating">Lowest rating</option>
              </select>
          </div>


          {reviewsArray.map((review, index) => (
            (index < reviewCount
              && (
                <ReviewCard
                  review={review}
                  key={index}
                />
              )

            )

          ))}

          <div>
            <MoreReviews
              onClick={() => { setReviewCount(reviewCount + 2); }}
            >
              MORE REVIEWS
            </MoreReviews>
            <AddReview onClick={openModal}>ADD A REVIEW +</AddReview>
            <ReviewModal
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
            />
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
margin-top: 30px;
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
