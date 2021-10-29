import React from 'react';
import Recommended from './Recommended.jsx';
import Outfits from './Outfits.jsx';

function RIAC() {
  const setMiddle = {
    margin: 'auto',
  };

  return (
    <div style={setMiddle}>
      <Recommended />
      <Outfits />
    </div>
  );
}

export default RIAC;
