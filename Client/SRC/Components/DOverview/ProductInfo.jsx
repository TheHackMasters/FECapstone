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
  const { details } = props;
  let {
    id, slogan, description, features,
  } = details;

  return (
    <ProdInfoOrient id="prodinfo">
      <Seperator1>
        <StyledHeading>
          {slogan}
        </StyledHeading>
        <StyledParagraph>
          {description}
        </StyledParagraph>
      </Seperator1>
      <Seperator2>
        {features.map((feature) => {
          id += 1;
          return (
            <StyledList key={id}>
              {feature.feature}
              :
              {' '}
              {feature.value}
            </StyledList>
          );
        })}
      </Seperator2>
    </ProdInfoOrient>
  );
}

export default ProductInfo;
