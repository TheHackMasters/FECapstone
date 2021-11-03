import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StyleSelectorBuilder from './StyleSelectorBuilder.jsx';
import Checkbox from './Checkbox.jsx';

const StyleOrientation = styled.div`
display:flex;
flex-wrap: wrap;
padding-bottom: 1em;
`;

const StyledSpan = styled.span`
font-size: 1em;
font-weight: bolder;
padding-right: 1em;
`;

function StyleSelector(props) {
  const { styles } = props;
  const { results } = styles;
  // console.log('ss', styles);
  return (
    <div>
      <StyledSpan> STYLE > </StyledSpan>
      <span className="selectedStyle">{results[0].name}</span>
    <StyleOrientation>
      {results.map((style) => (
        <StyleSelectorBuilder
          style={style}
          key={style.style_id}
        />
      ))}
    </StyleOrientation>
    </div>
  );
}

export default StyleSelector;
