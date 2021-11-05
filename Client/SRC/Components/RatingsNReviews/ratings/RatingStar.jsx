import React from 'react';

import { StarsRating, useStars } from 'stars-rating-react-hooks';

function RatingStar(props) {
  // console.log(props.ratingsFloat, 'rating star');
  const config = {
    totalStars: 5,
    initialSelectedValue: Number(props.ratingsFloat),
    // initialSelectedValue: props.ratingsFloat,
    renderFull: '★',
    renderEmpty: '☆',
  };

  return <StarsRating config={config} />;
}

export default RatingStar;
