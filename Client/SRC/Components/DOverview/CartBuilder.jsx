import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CartRows = styled.div`
margin-top: 15px;
display:flex;
flex-direction:row;
`;

const CartColumns = styled.div`
display:flex;
flex-direction:column;
font-weight: bolder;
`;

const BoxWrapper = styled.label`
margin: 15px;
`;

const BoxAlt = styled.div`
border: solid;
padding: 10px;
margin: 5px;
cursor:pointer;
`;

const BoxStar = styled.div`
border: solid;
padding: 15px;
margin: 5px;
margin-left: 4em;
cursor:pointer;
`;

const StyledPlus = styled.span`
font-size: 1em;
font-weight: bolder;
margin-left: 5em;
`;

const StyledSelectS = styled.select`
padding: 10px;
border: solid;
width: 13rem;
cursor:pointer;
`;

const StyledSelectQ = styled.select`
padding: 10px;
border: solid;
width: 5rem;
cursor:pointer;
`;

const StyledOption = styled.option`
width: 10fr;
`;

function CartBuilder(props) {
  const [curSize, setCurSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  console.log('CB', props);

  return (
    <CartColumns>
      <form>
        <BoxWrapper>
          <StyledSelectS>
            <StyledOption value="makeAbuilder">Select Size</StyledOption>
          </StyledSelectS>
        </BoxWrapper>
        <BoxWrapper>
          <StyledSelectQ>
            <StyledOption value="makeAbuilder">1</StyledOption>
          </StyledSelectQ>
        </BoxWrapper>
      </form>
      <CartRows>
        <BoxAlt>
          <span>ADD TO BAG</span>
          <StyledPlus>+</StyledPlus>
        </BoxAlt>
        <BoxStar>
          <span>☆</span>
        </BoxStar>
      </CartRows>
    </CartColumns>
  );
}

export default CartBuilder;
