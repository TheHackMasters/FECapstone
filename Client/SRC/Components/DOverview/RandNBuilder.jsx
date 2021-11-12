import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components';

import helper from '../RatingsNReviews/ratings/helper.js';

const StyleOrientation = styled.section`
display:flex;
flex-direction:column;
padding-bottom: 1em;
`;

const StyleName = styled.span`
font-size: 2em;
font-weight: bolder;
`;

const HalfStar = styled(StarHalfIcon)`
  color: black;
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
  const [ratingsFloat, setRatingsFloat] = useState(0);

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
    if (props.meta !== undefined) {
      const { data } = props.meta;
      const { ratings } = data;

      const modR = (Math.round(helper.averageRating(ratings) * 10) / 10).toFixed(1);
      setRatingsFloat(Number(modR));
      console.log(typeof (ratingsFloat), ratingsFloat);
    }
  }, [props]);

  return (
    <div>
      <div>
        <StarRatingComponent
          name="myRating"
          editing={false}
          renderStarIcon={() => <span><StarIcon /></span>}
          renderStarIconHalf={() => <span><HalfStar /></span>}
          starCount={5}
          value={ratingsFloat}
          starColor="black"
          emptyStarColor="#C4C4C4"
        />

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
