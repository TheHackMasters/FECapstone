import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox.jsx';

const StylesWrapper = styled.div`
position: relative;
height: 5em;
width: 5em;
padding: 1em;
`;

// builds each individual style and assigns it the switch style click event
function StyleSelectorBuilder(props) {
  const { style, switchStyle, id, styleItem } = props;

  const CircledStyles = {
    border: 'solid',
    borderRadius: '5em',
    backgroundImage: `url(${style.photos[0].thumbnail_url})`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer',
  };

  return (
    <StylesWrapper>
      <Checkbox styleItem={styleItem} id={id} />
      <div
        style={CircledStyles}
        id={id}
        onClick={(event) => {
          switchStyle(event);
        }}
      />
    </StylesWrapper>
  );
}

export default StyleSelectorBuilder;
