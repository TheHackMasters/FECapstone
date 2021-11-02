import React from 'react';

function EmptyOutfit() {
  const cardT2 = {
    textAlign: 'center',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    paddingTop: '160px',
    paddingBotton: '4px',
    position: 'relative',
    width: '235px',
    margin: 'auto',
  };

  const cardStyle = {
    border: '2px solid #D3D3D3',
    marginRight: '36px',
    width: '235px',
    backgroundColor: 'grey',
  };

  return (
    <div className="card" style={cardStyle}>
      <div>
        <div style={cardT2}>Select Your Outfits</div>
      </div>
    </div>
  );
}

export default EmptyOutfit;
