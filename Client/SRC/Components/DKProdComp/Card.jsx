import React, { useState } from 'react';

function Card() {
  const [product, productChange] = useState({
    imageSrc: './',
    imgAlt: './',
    category: 'jackets',
    name: 'bomber',
    price: '123',
  });

  const cardStyle = {
    border: '2px solid #D3D3D3',
    margin: '8px',
  };

  const cardImgStyle = {
    border: '2px solid #D3D3D3',
    width: '225px',
    height: '220px',
  };

  const cardT2 = {
    color: 'grey',
    size: '10px',
    fontWeight: 'light',
  };

  const cardT1 = {
    color: 'black',
    size: '12px',
    fontWeight: 'bold',
  };

  return (
    <div className="card" style={cardStyle}>
      <div style={cardImgStyle}>
        <img src={product.imageSrc} alt={product.imgAlt} />
        <a href="localhost">
          <button type="submit">Star</button>
        </a>
      </div>
      <div>
        <div style={cardT2}>{product.category}</div>
        <div style={cardT1}>{product.name}</div>
        <div style={cardT2}>{product.price}</div>
        <div>Replace with star rating component</div>
      </div>
    </div>
  );
}

export default Card;
