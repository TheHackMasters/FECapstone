import React from 'react';
import styled from 'styled-components';

const BarText = styled.div`
height: 100%;
width: 18%;
/* background: yellow; */
`

const BarTextContent = () => {

  return (
    <BarText className="var-text-content">
      5 Stars
      <br/>
      4 Stars
      <br/>
      3 Stars
      <br/>
      2 Stars
      <br/>
      1 Star
    </BarText>
  )
}

export default BarTextContent;