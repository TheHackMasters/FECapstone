import React, { useState, useEffect } from 'react';
import RatingName from './RandNBuilder.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartBuilder from './CartBuilder.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview(props) {
  return (
    <div>
      <div id="Overview">Hello World from the Overview</div>
      <ImageBuilder />
      <RatingName />
      <StyleSelector />
      <CartBuilder />
      <ProductInfo />
    </div>
  );
}

export default Overview;
