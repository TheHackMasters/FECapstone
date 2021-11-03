import React from 'react';

function AddToOutfitsCard(props) {
  // STYLES -----------------------------------------------------
  const greyPlus = 'https://images.squarespace-cdn.com/content/v1/56e19ec5e3214084d69d4b7d/1473524254173-BGV5W2Z5FM46F67SYZHJ/PlusIcon_Small_Gray.png';
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
    height: '235px',
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

  return (
    <div
      className="card"
      style={cardStyle}
      onClick={()=> props.clickStar(props.currProduct)}
      >
      <div style={cardImgStyle}>
        <img style={imageStyle} src={greyPlus} alt="grey plus" />
      </div>
      <div style={cardInfo}>
        <div style={cardT2}>Add to your outfits</div>
      </div>
    </div>
  );
}

export default AddToOutfitsCard;
