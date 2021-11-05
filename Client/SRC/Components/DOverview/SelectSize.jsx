import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledOption = styled.option`
width: 10fr;
`;

const StyledSelectS = styled.select`
padding: 10px;
border: solid;
width: 13rem;
cursor:pointer;
`;

function SelectSize(props) {
  // console.log(props);
  const { handleChange, skus } = props;
  const skuArr = Object.keys(skus);
  // console.log(skuArr);
  return (
    <StyledSelectS onChange={handleChange}>
      <StyledOption id="0" value="makeAbuilder">Select Size</StyledOption>
      {skuArr.map((sku) => (
        <StyledOption id={sku} value={skus[`${sku}`].size}>{skus[`${sku}`].size}</StyledOption>
      ))}
    </StyledSelectS>
  );
}

export default SelectSize;
