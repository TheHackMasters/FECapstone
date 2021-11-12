import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StarsRating } from 'stars-rating-react-hooks';
import ReviewCard from './ReviewCard.jsx';
import ReviewModal from './ReviewModal.jsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
              <Select value={selectSort} onChange={handleSelectChange} >
                  <option value="highest_rating">Highest rating</option>
                  <option value="lowest_rating">Lowest rating</option>
              </Select>
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
              More Reviews
            </MoreReviews>
            <AddReview onClick={openModal}>Add a Review +</AddReview>
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

const Select = styled.select`
background-image: './ExpandMoreIcon'
appearance: none;
border: 1px solid #C4C4C4
weight: 1px;
border-color: #C4C4C4;
background-color: #F2F2F2;
`

const ReviewsSection = styled.section`
display: grid;
background-color: #F2FFFD;
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
height: 30px;
margin: 2%;
border: 1px solid;
border-color: #C4C4C4;
weight: 1px;
fill: #F2F2F2;
`;

const AddReview = styled.button`
grid-column: 4 / 4;
width: 130px;
height: 30px;
margin: 2%;
border: 1px solid;
border-color: #C4C4C4;
`;
