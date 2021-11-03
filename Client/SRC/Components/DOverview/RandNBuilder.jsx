import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyleOrientation = styled.section`
display:flex;
flex-direction:column;
padding-bottom: 1em;
`;

const StyleName = styled.span`
font-size: 2em;
font-weight: bolder;
`;

function RatingName(props) {
  // console.log('RnN', props);
  const { data, styles } = props;
  const [prodName, setProdName] = useState(data.name);
  const [stylePrice, setStylePrice] = useState(data.default_price);

  useEffect(() => {
    setProdName(data.name);
    setStylePrice(data.default_price);
  }, [props]);

  return (
    <div>
      <div>
        <span>☆☆☆☆☆</span>
        <a href="#Ratings">Read All Reviews</a>
      </div>
      <StyleOrientation>
        <span>{data.category}</span>
        <StyleName>{prodName}</StyleName>
        <span>
          $
          {stylePrice}
        </span>
      </StyleOrientation>
    </div>
  );
}

export default RatingName;
