/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const RatingsNReviews = () => {
  const [meta, setMeta] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    axios.get('/reviews/meta')
      .then((results) => {
        setMeta({ data: results.data });
      })
      .catch((error) => { console.log(error); }),

    axios.get('/reviews')
      .then((results) => {
        setReviews({ reviews: results.data.results });
      })
      .catch((error) => { console.log(error); });
  }, []);

  return (
    <>

      <div className="RatingsNReviews">
        <MainSection>

          <Ratings meta={meta} />
          <Reviews reviews={reviews} />
        </MainSection>

      </div>

    </>

  );
};

export default RatingsNReviews;

const MainSection = styled.section`
display: grid;
background-color: white;
overflow: auto;
grid-template-columns: 1fr 2.5fr;
grid-template-rows: repeat(8, 100px);
justify-items: center;

`;
