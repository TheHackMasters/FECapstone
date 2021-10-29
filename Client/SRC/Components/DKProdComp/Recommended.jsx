import React from 'react';
import Card from './Card.jsx';

function Recommended() {
  const recommendedStyle = {
    display: 'flex',
    flexDirection: 'row',
  };
  const justifyContentHeader = {
    justifyContent: 'flex-start',
  };

  const title1 = {
    fontWeight: 'light',
    size: '14px',
    color: 'grey',
  };

  return (
    <div className="recommended">
      <div style={title1}>RECOMMENDED</div>
      <div style={recommendedStyle}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Recommended;
