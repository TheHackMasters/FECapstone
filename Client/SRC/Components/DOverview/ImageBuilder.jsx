import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MiniImageBuilder from './MiniImageBuilder.jsx';

const ScrollWrapper = styled.div`
position: relative,
display: flex,
flexDirection: column,
height: 30em;
overflow: auto;
`;

const UpDownWrapper = styled.div`
position: relative;
height: 30px;
width: 100px;
padding: 10px;
`;

const StyledButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: dashed grey;
cursor:pointer;
overflow: hidden;
`;

const StyledLeftA = styled.button`
position: absolute;
top: 50%;
left: 25%;
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
color: black;
font-size: 1.5em;
font-weight: 900;
`;

const StyledRightA = styled.button`
position: absolute;
top: 50%;
right: 5%;
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
color: black;
font-size: 1.5em;
font-weight: 900;
`;

const StyledUpDownA = styled.button`
position: absolute;
top: 50%;
left: 50%
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
color: black;
font-size: 1.5em;
font-weight: 900;
width: 100px;
`;

function ImageBuilder(props) {
  const { styles } = props;
  const { results } = styles;
  // console.log(styles);

  const ProdImage = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    backgroundImage: `url(${results[0].photos[0].url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '40em',
    height: '40em',
  };

  let tempKey = 0;

  return (
    <div>
      <div id="imagebuilder" style={ProdImage}>
        <StyledButton />
        <StyledLeftA>🡸</StyledLeftA>
        <StyledRightA>🡺</StyledRightA>
        <UpDownWrapper>
          <StyledUpDownA>˄</StyledUpDownA>
        </UpDownWrapper>
        <ScrollWrapper class="scrollable">
          {results[0].photos.map((style) => {
            tempKey += 1;
            return (
              <MiniImageBuilder
                style={style}
                key={tempKey}
              />
            );
          })}
        </ScrollWrapper>
        <UpDownWrapper>
          <StyledUpDownA>˅</StyledUpDownA>
        </UpDownWrapper>
      </div>
    </div>
  );
}

export default ImageBuilder;
