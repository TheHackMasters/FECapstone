import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProdImage = styled.div`
position: relative;
display:flex;
flex-direction:column;
border: solid;
background-image: url("http://placecorgi.com/600/600");
background-repeat: no-repeat;
width: 600px;
height: 600px;
`;

const MiniImageWrapper = styled.div`
position: relative;
height: 100px;
width: 100px;
padding: 10px;
`;

const UpDownWrapper = styled.div`
position: relative;
height: 30px;
width: 100px;
padding: 10px;
`;

const MiniImage = styled.div`
background-image: url("http://placecorgi.com/100/100");
height: 100px;
width: 100px;
border: solid;
background-repeat: no-repeat;
background-position: center;
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
  return (
    <div>
      <ProdImage>
        <StyledButton />
        <StyledLeftA>🡸</StyledLeftA>
        <StyledRightA>🡺</StyledRightA>
        <UpDownWrapper>
          <StyledUpDownA>˄</StyledUpDownA>
        </UpDownWrapper>
        <MiniImageWrapper>
          <MiniImage />
        </MiniImageWrapper>
        <MiniImageWrapper>
          <MiniImage />
        </MiniImageWrapper>
        <MiniImageWrapper>
          <MiniImage />
        </MiniImageWrapper>
        <UpDownWrapper>
          <StyledUpDownA>˅</StyledUpDownA>
        </UpDownWrapper>
      </ProdImage>
    </div>
  );
}

export default ImageBuilder;
