import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSelectQ = styled.select`
padding: 10px;
border: solid;
width: 5rem;
cursor:pointer;
background-color: #ffffff;
`;

const StyledOption = styled.option`
width: 10fr;
`;

// creates the select logic for the quantity drop down
function SelectQuantity(props) {
  const { handleChange, quantity } = props;
  const [quantityBuild, setQuantityBuild] = useState([]);
  // function to build out the options in the drop down
  const quantityArr = (num) => {
    const newArr = [];
    let max = num;
    if (typeof (max) === 'string') {
      return newArr;
    }
    if (max > 15) {
      max = 15;
    }
    for (let i = 0; i < max; i++) {
      newArr[i] = i + 1;
    }
    return newArr;
  };

  useEffect(() => {
    // provides the input to build the drop down based on the selected sku
    if (quantity.curSku !== '') {
      if (quantity.curSku === '0') {
        setQuantityBuild([]);
      } else {
        const { skus, curSku } = quantity;
        setQuantityBuild(quantityArr(skus[curSku].quantity));
      }
    }
  }, [quantity]);

  // console.log(quantityArr);
  return (
    <StyledSelectQ
      onChange={handleChange}
      data-trackingid="Overview CartQuantity"
      data-testid="QuantitySelect"
    >
      <StyledOption id="-" key="-" value="invalid">-</StyledOption>
      {quantityBuild.map((q) => (
        <StyledOption id={q} key={q} value={q}>{q}</StyledOption>
      ))}
    </StyledSelectQ>
  );
}

export default SelectQuantity;
