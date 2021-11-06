import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSelectQ = styled.select`
padding: 10px;
border: solid;
width: 5rem;
cursor:pointer;
`;

const StyledOption = styled.option`
width: 10fr;
`;

function SelectQuantity(props) {
  const { handleChange, quantity } = props;
  const [quantityBuild, setQuantityBuild] = useState([]);
  const quantityArr = (num) => {
    const newArr = [];
    let max = num;
    if (max > 15) {
      max = 15;
    }
    for (let i = 0; i < max; i++) {
      newArr[i] = i + 1;
    }
    return newArr;
  };

  useEffect(() => {
    if (quantity.curSku !== '') {
      const { skus, curSku } = quantity;
      setQuantityBuild(quantityArr(skus[curSku].quantity));
    }
  }, [quantity]);

  // console.log(quantityArr);
  return (
    <StyledSelectQ onChange={handleChange}>
      <StyledOption id="-" key="-" value="invalid">-</StyledOption>
      {quantityBuild.map((q) => (
        <StyledOption id={q} key={q} value={q}>{q}</StyledOption>
      ))}
    </StyledSelectQ>
  );
}

export default SelectQuantity;
