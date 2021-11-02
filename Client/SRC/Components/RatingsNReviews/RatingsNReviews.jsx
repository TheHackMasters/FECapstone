import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const RatingsNReviews = () => (
  <>
    <h1> Hello From Ratings And Reviews </h1>

    <div className="RatingsNReviews">
      <MainSection>

        <Ratings />
        <Reviews />
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

