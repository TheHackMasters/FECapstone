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
  console.log('should change', props);
  let {data, styles} = props;
  console.log(data);

  return (
    <ComponentWrapper id="overview">
      <div className="overview">Hello World from the Overview</div>
      <ComponentOrientation id="componentorient">
        <ImageBuilder styles={styles} />
        <div>
          <SubComponentOrientation id="ratingname">
            <RatingName details={data} />
          </SubComponentOrientation>
          <SubComponentOrientation id="styleselector">
            <StyleSelector styles={styles} />
          </SubComponentOrientation>
          <SubComponentOrientation id="cartbuilder">
            <CartBuilder />
          </SubComponentOrientation>
        </div>
      </ComponentOrientation>
      <ProductInfo details={data} />
    </ComponentWrapper>
  );
}

export default Overview;
