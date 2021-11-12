import React from 'react';
import styled from 'styled-components';

function EmptyOutfit() {
  return (
    <CardStyle>
      <div>
        <CardT2>Select Your Outfits</CardT2>
      </div>
    </CardStyle>
  );
}

export default EmptyOutfit;

const CardT2 = styled.div`
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding-top: 160px;
  padding-botton: 4px;
  position: relative;
  width: 235px;
  margin: auto;
`;

const CardStyle = styled.div`
  border: 2px solid #D3D3D3;
  margin-right: 1em;
  margin-left: 1em;
  width: 14.3em;
  height: 21.8em;
  background-color: grey;
  margin-bottom: 2em;
`;
