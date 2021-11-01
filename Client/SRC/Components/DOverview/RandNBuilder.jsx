import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyleOrientation = styled.section`
display:flex;
flex-direction:column;
padding-bottom: 1em;
`;

const StyleName = styled.span`
font-size: 3em;
font-weight: bolder;
`;

function RatingName(props) {
  return (
    <div>
      <div>
        <span>☆☆☆☆☆</span>
        <a href="#Ratings">Read All Reviews</a>
      </div>
      <StyleOrientation>
        <span>Scattergories</span>
        <StyleName>This will be a Styled Product Name</StyleName>
        <span>$1,000,000</span>
      </StyleOrientation>
    </div>
  );
}

export default RatingName;
