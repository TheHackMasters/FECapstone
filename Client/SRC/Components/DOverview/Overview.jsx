import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RatingName from './RandNBuilder.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartBuilder from './CartBuilder.jsx';
import ProductInfo from './ProductInfo.jsx';

const ComponentWrapper = styled.section`
  border: solid
`;

const ComponentOrientation = styled.section`
display:flex;
flex-direction:row;
padding-bottom: 1em;
`;

const SubComponentOrientation = styled.section`
padding-left: 1em;
`;

function Overview(props) {
  return (
    <ComponentWrapper>
      <div id="overview">Hello World from the Overview</div>
      <ComponentOrientation>
        <ImageBuilder />
        <div>
          <SubComponentOrientation>
            <RatingName />
          </SubComponentOrientation>
          <SubComponentOrientation>
            <StyleSelector />
          </SubComponentOrientation>
          <SubComponentOrientation>
            <CartBuilder />
          </SubComponentOrientation>
        </div>
      </ComponentOrientation>
      <ProductInfo />
    </ComponentWrapper>
  );
}

export default Overview;
