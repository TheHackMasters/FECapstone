import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MiniImageWrapper = styled.div`
position: relative;
height: 6em;
width: 6em;
padding: 1em;
`;

function MiniImageBuilder(props) {
  const { style, switchDisplay, id } = props;
  // console.log('MIB', style);

  const MiniImage = {
    backgroundImage: `url(${style.thumbnail_url})`,
    backgroundSize: 'cover',
    height: '6em',
    width: '6em',
    border: 'solid',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <MiniImageWrapper>
      <div
        style={MiniImage}
        id={id}
        onClick={(event) => {
          switchDisplay(event);
        }}
      />
    </MiniImageWrapper>
  );
}

export default MiniImageBuilder;