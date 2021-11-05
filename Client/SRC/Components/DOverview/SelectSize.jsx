import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledOption = styled.option`
width: 10fr;
`;

function SelectSize(props) {
  console.log(props);
  return (
    <option id="1" value="makeAbuilder">Testing</option>
  );
}

export default SelectSize;
