import React from 'react';

function AddToOutfits(props) {
  //STYLES -----------------------------------------------------
  const greyPlus = 'https://lh3.googleusercontent.com/proxy/YI7mxgIyxxEPNe6yYJeXVzcZBDItYF_P4QJybclZiNrE2Y7Xga88ONbNyxroqLBAlyD_nizK4rrKTOpGKKqinZkQ37MWEDE';
  const cardT2 = {
    textAlign: 'center',
    color: 'grey',
    fontSize: '16px',
    fontWeight: 'bold',
    paddingTop: '4px',
    paddingBotton: '4px',
  };
  const cardStyle = {
    border: '2px solid #D3D3D3',
    marginRight: '36px',
  };
  const cardImgStyle = {
    width: '235px',
    height: '225px',
    objectFit: 'cover',
    marginTop: '80px',
  };
  const cardInfo = {
    padding: '8px 8px 8px 8px',
  };
  const imageStyle = {
    display: 'flex',
    width: '135px',
    height: '125px',
    objectFit: 'cover',
    margin: 'auto',
  };

  return(
    <div className="card" style={cardStyle}>
      <div style={cardImgStyle}>
        <img style={imageStyle} src={greyPlus} alt='grey plus' />
      </div>
      <div style={cardInfo}>
        <div style={cardT2}>Add to your outfits</div>
      </div>
    </div>
  );
}

export default AddToOutfits;