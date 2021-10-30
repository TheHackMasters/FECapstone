import React from 'react';
import Card from './Card.jsx';

function RIAC() {
  const setMiddle = {
    margin: 'auto',
    width: '50%',
  };

  const carouselStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const title1 = {
    fontWeight: 'light',
    size: '24px',
    color: 'grey',
    padding: '32px 0px 8px 0px',
  };

  return (
    <div style={setMiddle}>
      <div className="recommended">
        <div style={title1}>RECOMMENDED</div>
        <div style={carouselStyle}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="outfits">
        <div style={title1}>OUTFITS</div>
        <div style={carouselStyle}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default RIAC;
