import React from 'react';

import { StarsRating, useStars } from 'stars-rating-react-hooks';

function StarRating(props) {
  const config = {
    totalStars: 5,
    initialSelectedValue: props.rating,
    renderFull: '★',
    renderEmpty: '☆',
  };

  const {
    stars,
    getStarProps,
    getStarWrapperProps,
    isSelecting,
    selectingValue,
    selectedValue,
  } = useStars(config);

  return <StarsRating config={config} />;
}

export default StarRating;
