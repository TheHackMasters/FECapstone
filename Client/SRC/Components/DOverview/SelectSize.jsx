import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledOption = styled.option`
width: 10fr;
`;

const StyledSelectS = styled.select`
background-color: #ffffff;
padding: 10px;
border: solid;
width: 13rem;
cursor:pointer;
`;

function SelectSize(props) {
  // console.log(props);
  const { handleChange, skus } = props;
  const [skuArr, setSkuArr] = useState(Object.keys(skus));
  const [newskus, setSkus] = useState(skus);

  useEffect(() => {
    const { skus } = props;
    setSkuArr(Object.keys(skus));
    setSkus(skus);
  }, [props]);
  // console.log(skuArr);
  return (
    <StyledSelectS
      onChange={handleChange}
      data-trackingid="Overview CartSize"
      data-testid="SizeSelect"
    >
      <StyledOption id="0" value="invalid">Select Size</StyledOption>
      {skuArr.map((sku) => (
        <StyledOption id={sku} key={sku} value={newskus[`${sku}`].size}>{newskus[`${sku}`].size}</StyledOption>
      ))}
    </StyledSelectS>
  );
}

export default SelectSize;
