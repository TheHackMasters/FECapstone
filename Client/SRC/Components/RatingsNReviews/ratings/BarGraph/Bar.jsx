import React from 'react';
import styled from 'styled-components';

const IndividualBar = styled.div`
height: 12%;
background: #999999;
z-index: 25;
border-bottom: 1px solid #222;
border-right: 1px solid #222;
`

const Bar = ({ percent }) => {


  return (
    <IndividualBar opacity="80%" className="bar" style={{ width: percent }}>

    </IndividualBar>
  )
}

export default Bar;