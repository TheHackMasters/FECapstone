import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProdInfoOrient = styled.section`
display:flex;
flex-direction:row;
padding-bottom: 1em;
`;

const Seperator1 = styled.div`
padding: 5%;
width: 45%;
`;

const StyledHeading = styled.h3`
font-weight: bolder;
`;

const StyledParagraph = styled.p`
`;

const Seperator2 = styled.ul`
padding: 5%;
border-left: solid;
`;

const StyledList = styled.li`
list-style-type: "✔";
padding: 5px;
padding-left: 10px;
`;

function ProductInfo(props) {
  return (
    <ProdInfoOrient>
      <Seperator1>
        <StyledHeading>
          Child's Ice Cream Cone melts due to Long-Winded Speech
        </StyledHeading>
        <StyledParagraph>
          Today, in the Ninth inning of the third round of the squeal-ball constest,
          Lord Mayor Constantine the Third, Esquire, King, and Knight,
          offered his condolences for wasting everybody's time.
        </StyledParagraph>
      </Seperator1>
      <Seperator2>
        <StyledList>1000% GMO</StyledList>
        <StyledList>Made with REAL Genuine Leather Substitute</StyledList>
      </Seperator2>
    </ProdInfoOrient>
  );
}

export default ProductInfo;
