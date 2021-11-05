import React, { useState } from 'react';

function Card(props) {
  const [product, setProduct] = useState(props.products);

  const [topRightIcon, setTopRightIcon] = useState(props.isRecc ? '☆' : 'X');
  const [topRightClicked, setTopRightClicked] = useState(props.isRecc);
  //console.log(props);
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

  const imgCheck = (id) => {
    if (id === Number(props.style.product_id) && props.style.results[0].photos[0].thumbnail_url) {
      return props.style.results[0].photos[0].thumbnail_url;
    }
    else {
      return ('https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
      }
    };

  return (
    <div className="card" style={cardStyle}>
      <div style={cardImgStyle}>
        <img style={imageStyle} src={imgCheck(product.id)} alt={product.imgAlt} onClick={() => (props.setCurProdId(product.id))}/>
        {topRightClicked
        ? <button type="submit"
        onClick={() => {
          setTopRightClicked(!topRightClicked)
          props.clickStar(product);
        }
      }
        style={buttonStyleDefault} >{topRightIcon}</button>
        : <button type="submit"
        onClick={(e, id) => {
          setTopRightClicked(!topRightClicked)
          props.clickX(product);
        }
      }
        style={buttonStyleClicked} >{topRightIcon}</button>}
      </div>
      <div style={cardInfo}>
        <div style={cardT2}>{product.category}</div>
        <div style={cardT1} onClick={() => (props.setCurProdId(product.id))}>{product.name}</div>
        <div style={cardT2}>{product.default_price}</div>
        <div>☆☆☆☆☆</div>
      </div>
    </div>
  );
}

export default Card;
