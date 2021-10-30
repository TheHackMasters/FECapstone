import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CircledStyles = styled.img`
border: solid;
border-radius: 1em;
padding: 10px;
background-image: "http://placecorgi.com/100/100";
`;

function StyleSelector(props) {
  return (
    <div>
      <CircledStyles
        src="http://placecorgi.com/100/100"
        alt=""
      />
      <CircledStyles
        src="http://placecorgi.com/100/100"
        alt=""
      />
      <CircledStyles
        src="http://placecorgi.com/100/100"
        alt=""
      />
    </div>
  );
}

export default StyleSelector;
