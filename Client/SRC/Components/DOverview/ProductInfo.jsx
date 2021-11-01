import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProdInfoOrient = styled.section`
display:flex;
flex-direction:row;
padding-bottom: 1em;
`;

const Seperator1 = styled.span`
padding: 5%;
`;

const Seperator2 = styled.span`
padding: 5%;
border-left: solid;
`;

function ProductInfo(props) {
  return (
    <ProdInfoOrient>
      <Seperator1>Add the product blurbs in a fancy way</Seperator1>
      <Seperator2>Add the other fancy product details</Seperator2>
    </ProdInfoOrient>
  );
}

export default ProductInfo;
