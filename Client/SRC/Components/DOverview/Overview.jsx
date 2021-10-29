import React, { useState, useEffect } from 'react';
import RatingName from './RandNBuilder.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartBuilder from './CartBuilder.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview(props) {
  return (
    <div className="component">
      <div id="overview">Hello World from the Overview</div>
      <div className="orientation">
        <ImageBuilder />
        <div>
          <RatingName />
          <StyleSelector />
          <CartBuilder />
        </div>
      </div>
      <ProductInfo />
    </div>
  );
}

export default Overview;
