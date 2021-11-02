import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Ratings = () => (
  <>
    <RatingsDiv>

      <h1>Hello from ratings</h1>

      <div>

        <div className="ratings">
          <div>RATINGS </div>
          <div>3.5 *****</div>
          <div>100% of reviewers recommend this product</div>
          <div>5 stars ##########</div>
          <div>4 stars #####</div>
          <div>3 stars ########</div>
          <div>2 stars ##</div>
          <div>1 stars ###</div>
          <div> Size (too small, too large)</div>
          <div> Comfort (poor, perfect)</div>
        </div>

      </div>

    </RatingsDiv>

  </>
);

export default Ratings;

const RatingsDiv = styled.div`
display: grid;
background-color: white;
width: 100%;
grid-column: 1;
grid-row: 1/6;
padding: 20px;
margin-left: 30px;

`;
