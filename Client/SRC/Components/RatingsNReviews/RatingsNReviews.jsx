/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Ratings from './ratings/Ratings.jsx';
import Reviews from './reviews/Reviews.jsx';

const RatingsNReviews = (props) => (
  <>

    <div className="RatingsNReviews">
      <MainSection>

        <Ratings meta={props.meta} />
        <Reviews reviews={props.reviews} />
      </MainSection>

    </div>

  </>

);

export default RatingsNReviews;

const MainSection = styled.section`
display: grid;
background-color: white;
overflow: auto;
grid-template-columns: 1fr 2.5fr;
grid-template-rows: repeat(8, 100px);
justify-items: center;

`;
