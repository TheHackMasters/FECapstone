import React, { useState } from 'react';

function Card() {
  const [product, productChange] = useState({
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'Lightweight Weather-Resist Bomber',
    price: '$64',
  });

  const cardStyle = {
    border: '2px solid #D3D3D3',
    marginRight: '24px',
  };

  const cardImgStyle = {
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
    width: '235px',
    height: '225px',
    objectFit: 'cover',
  };

  const buttonStyle = {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  };

  return (
    <div className="card" style={cardStyle}>
      <div style={cardImgStyle}>
        <img style={imageStyle} src={product.imageSrc} alt={product.imgAlt} />
        <button type="submit" style={buttonStyle}>☆</button>
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
