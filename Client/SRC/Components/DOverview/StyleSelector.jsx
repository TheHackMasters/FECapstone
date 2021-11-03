import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StyleSelectorBuilder from './StyleSelectorBuilder.jsx';
import Checkbox from './Checkbox.jsx';

const StyleOrientation = styled.div`
display:flex;
flex-wrap: wrap;
padding-bottom: 1em;
`;

function StyleSelector(props) {
  const { styles } = props;
  const { results } = styles;
  // console.log('ss', styles);
  return (
    <StyleOrientation>
      {results.map((style) => (
        <StyleSelectorBuilder
          style={style}
          key={style.style_id}
        />
      ))}
    </StyleOrientation>
  );
}

export default StyleSelector;
