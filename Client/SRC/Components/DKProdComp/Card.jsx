import React, { useState } from 'react';

function Card(props) {
  const [product, productChange] = useState(props.product);

  var isRecommended = props.isRecc;
  const [topRightIcon, setTopRightIcon] = useState(isRecommended ? '☆' : 'X');
  const [topRightClicked, setTopRightClicked] = useState(false);

  const cardStyle = {
    border: '2px solid #D3D3D3',
    marginRight: '36px',
  };

  const cardImgStyle = {
    position: 'relative',
    width: '235px',
    height: '225px',
    objectFit: 'cover',
  };

  const cardT2 = {
    color: 'grey',
    fontSize: '12px',
    fontWeight: 'light',
    paddingTop: '4px',
    paddingBotton: '4px',
  };

  const cardT1 = {
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    paddingTop: '4px',
    paddingBotton: '4px',
  };

  const cardInfo = {
    padding: '8px 8px 8px 8px',
  };

  const imageStyle = {
    display: 'flex',
    width: '235px',
    height: '225px',
    objectFit: 'cover',
  };

  const buttonStyleDefault = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'absolute',
    top: '3%',
    right: '3%',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const buttonStyleClicked = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'absolute',
    top: '3%',
    right: '3%',
    color: 'pink',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  return (
    <div className="card" style={cardStyle}>
      <div style={cardImgStyle}>
        <img style={imageStyle} src={product.imageSrc} alt={product.imgAlt} />
        <button type="submit" onClick={(e) => setTopRightClicked(!topRightClicked)} style={topRightClicked ? buttonStyleClicked : buttonStyleDefault}>{topRightIcon}</button>
      </div>
      <div style={cardInfo}>
        <div style={cardT2}>{product.category}</div>
        <div style={cardT1}>{product.name}</div>
        <div style={cardT2}>{product.price}</div>
        <div>☆☆☆☆☆</div>
      </div>
    </div>
  );
}

export default Card;
