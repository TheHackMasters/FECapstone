import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';

const StyleOrientation = styled.section`
display:flex;
flex-direction:row;
padding-bottom: 1em;
height: auto;
width: auto;
`;

const StylesWrapper = styled.div`
position: relative;
height: 100px;
width: 100px;
padding: 10px;
`;

const CircledStyles = styled.div`
border: solid;
border-radius: 5em;
background-image: url("http://placecorgi.com/100/100");
height: 100px;
width: 100px;
background-repeat: no-repeat;
background-position: center;
cursor:pointer;
`;

function StyleSelector(props) {
  return (
    <StyleOrientation>
      <StylesWrapper>
        <Checkbox />
        <CircledStyles />
      </StylesWrapper>
      <StylesWrapper>
        <Checkbox />
        <CircledStyles />
      </StylesWrapper>
      <StylesWrapper>
        <Checkbox />
        <CircledStyles />
      </StylesWrapper>
    </StyleOrientation>
  );
}

export default StyleSelector;
