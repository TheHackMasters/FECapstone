import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import StyleSelectorBuilder from './StyleSelectorBuilder.jsx';

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

// controller to build styles for display
function StyleSelector(props) {
  const { styles, selection, switchStyle, styleItem } = props;
  return (
    <div>
      <StyledSpan> STYLE 🡆 </StyledSpan>
      <span className="selectedStyle">{selection.name}</span>
    <StyleOrientation>
      {styles.map((style, index) => (
        <StyleSelectorBuilder
          style={style}
          key={style.style_id}
          id={index}
          data-testid={`${style.style_id}`}
          switchStyle={switchStyle}
          styleItem={styleItem}
        />
      ))}
    </StyleOrientation>
    </div>
  );
}

export default StyleSelector;
