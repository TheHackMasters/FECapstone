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
  const { data, style } = props;
  // console.log('RnN', style);
  const [prodName, setProdName] = useState(data.name);
  const [stylePrice, setStylePrice] = useState(data.default_price);
  const [styleSalePrice, setStyleSalePrice] = useState(null);
  const [stylePriceStyle, setStylePriceStyle] = useState({});
  const [styleSalePriceStyle, setStyleSalePriceStyle] = useState({
    color: 'red',
  });

  useEffect(() => {
    setProdName(data.name);
    if (style.sale_price === null) {
      setStyleSalePrice(null);
      setStylePrice(`$${style.original_price}`);
      setStylePriceStyle({ textDecorationLine: 'none' });
    } else {
      setStylePrice(`$${style.original_price}`);
      setStyleSalePrice(`$${style.sale_price}`);
      setStylePriceStyle({ textDecorationLine: 'line-through' });
    }
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
        <div>
          <span style={styleSalePriceStyle}>
            {styleSalePrice}
          </span>
          <span style={stylePriceStyle}>
            {stylePrice}
          </span>
        </div>
      </StyleOrientation>
    </div>
  );
}

export default RatingName;
