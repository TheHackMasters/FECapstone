import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProdImage = styled.div`
display:flex;
flex-direction:column;
border: solid;
background-image: url("http://placecorgi.com/400/400");
background-repeat: no-repeat;
height: 400px;
width: 400px;
`;

const MiniImageWrapper = styled.div`
height: 100px;
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

function ImageBuilder(props) {
  return (
    <div>
      <ProdImage>
        <MiniImageWrapper>
          <MiniImage />
        </MiniImageWrapper>
        <MiniImageWrapper>
          <MiniImage />
        </MiniImageWrapper>
        <MiniImageWrapper>
          <MiniImage />
        </MiniImageWrapper>
      </ProdImage>
    </div>
  );
}

export default ImageBuilder;
