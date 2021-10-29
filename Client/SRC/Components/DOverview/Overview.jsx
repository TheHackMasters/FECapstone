import React, { useState, useEffect } from 'react';
import RatingName from './RandNBuilder.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartBuilder from './CartBuilder.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview(props) {
  return (
    <div className="component">
      <div id="Overview">Hello World from the Overview</div>
      <span>
        <ImageBuilder />
        <RatingName />
        <StyleSelector />
        <CartBuilder />
      </span>
      <ProductInfo />
    </div>
  );
}

export default Overview;
