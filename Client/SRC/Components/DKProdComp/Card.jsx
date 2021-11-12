import React, { useState } from 'react';
import styled from 'styled-components';

function Card(props) {
  const [product, setProduct] = useState(props.products);

  const [topRightIcon, setTopRightIcon] = useState(props.isRecc ? '☆' : 'X');
  const [topRightClicked, setTopRightClicked] = useState(props.isRecc);
  // console.log(props);

  const imageStyle = {
    display: 'flex',
    maxHeight: '100%',
    maxWidth: '100%',
    height: '240px',
    width: '235px',
    objectFit: 'cover',
  };

  const buttonStyleDefault = {
    backgroundColor: 'transparent',
    borderColor: 'white',
    position: 'absolute',
    top: '3%',
    right: '3%',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '12px',
  };

  const buttonStyleClicked = {
    backgroundColor: 'transparent',
    borderColor: 'white',
    position: 'absolute',
    top: '3%',
    right: '3%',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '12px',
  };

  const imgCheck = (id) => {
    // console.log('style', props.style);
    if (id === Number(props.style.product_id) && props.style.results[0].photos[0].thumbnail_url) {
      return props.style.results[0].photos[0].thumbnail_url;
    }
    return ('https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  };

  return (
    <CardStyle>
      <CardImgStyle>
        <img
          style={imageStyle}
          loading="lazy"
          src={imgCheck(product.id)}
          alt={product.imgAlt}
          onClick={() => (props.setCurProdId(product.id))}
        />
        {topRightClicked
          ? (
            <button
              type="submit"
              onClick={() => {
                setTopRightClicked(!topRightClicked);
                props.clickStar(product);
              }}
              style={buttonStyleDefault}
            >
              {topRightIcon}
            </button>
          )
          : (
            <button
              type="submit"
              onClick={(e, id) => {
                setTopRightClicked(!topRightClicked);
                props.clickX(product);
              }}
              style={buttonStyleClicked}
            >
              {topRightIcon}
            </button>
          )}
      </CardImgStyle>
      <CardInfo>
        <div className="T2">{product.category}</div>
        <div className="T1"onClick={() => (props.setCurProdId(product.id))}>{product.name}</div>
        <div className="T2">{product.default_price}</div>
        <div>☆☆☆☆☆</div>
      </CardInfo>
    </CardStyle>
  );
}

export default Card;

const CardStyle = styled.div`
  border: 2px solid #D3D3D3;
  margin-right: 36px;
  width: 14.6em;
  height: 350px;
`;

const CardImgStyle = styled.div`
  position: relative;
  width: 14.6em;
  height: 15.1em;
  object-fit: cover;
`;

const CardT2 = styled.div`
  color: grey;
  font-size: 12px;
  font-weight: light;
  padding-top: 4px;
  padding-botton: 4px;
`;

const CardT1 = styled.div`
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-top: 4px;
  padding-botton: 4px;
`;

const CardInfo = styled.div`
  padding: 8px 8px 8px 8px;
  background-color: #FFFFFF;
`;
