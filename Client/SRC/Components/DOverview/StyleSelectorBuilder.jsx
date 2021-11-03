import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';

const StylesWrapper = styled.div`
position: relative;
height: 5em;
width: 5em;
padding: 1em;
`;

function StyleSelectorBuilder(props) {
  const { style } = props;
  // console.log('SSB', style);

  const CircledStyles = {
    border: 'solid',
    borderRadius: '5em',
    backgroundImage: `url(${style.photos[0].thumbnail_url})`,
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer',
  };

  return (
    <StylesWrapper>
      <Checkbox />
      <div style={CircledStyles} />
    </StylesWrapper>
  );
}

export default StyleSelectorBuilder;
