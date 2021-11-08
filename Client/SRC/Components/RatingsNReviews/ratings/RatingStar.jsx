import React from 'react';

import { StarsRating, useStars } from 'stars-rating-react-hooks';

function RatingStar(props) {
  let ratingsFloat;
  if (props.ratingsFloat) {
    ratingsFloat = props.ratingsFloat
  }
  // console.log(ratingsFloat, 'rating star');
  const config = {
    totalStars: 5,
    initialSelectedValue: Number(ratingsFloat),
    // initialSelectedValue: props.ratingsFloat,
    renderFull: '★',
    renderEmpty: '☆',
  };

  return <StarsRating config={config} />;
}

export default RatingStar;
