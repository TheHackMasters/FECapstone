import React from 'react';
import Card from './Card.jsx';

function Outfits() {
  const outfitStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const title1 = {
    fontWeight: 'light',
    size: '14px',
    color: 'grey',
  };

  return (
    <div className="outfits">
      <div style={title1}>OUTFITS</div>
      <div style={outfitStyle}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  );
}

export default Outfits;
