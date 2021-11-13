import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import helper from '../RatingsNReviews/ratings/helper.js';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarFullIcon from '@mui/icons-material/Star';

function Card(props) {
  const [product, setProduct] = useState(props.products);

  const [topRightIcon, setTopRightIcon] = useState(props.isRecc ? '☆' : 'X');
  const [topRightClicked, setTopRightClicked] = useState(props.isRecc);
  // console.log(props);

  const [ratingsFloat, setRatingsFloat] = useState(0);

  useEffect(() => {
    axios.get(`/reviews/meta/${product.id}`)
      .then((data) => (data.data))
      .then((meta) => {
        if (meta !== undefined) {
          // const { data } = meta;
          // const { ratings } = data;
          setRatingsFloat(Number((Math.round(helper.averageRating(meta.ratings) * 10) / 10).toFixed(1)));
        }
      })
      .catch((err) => console.log(err));
  }, [product.id]);

  const imageStyle = {
    display: 'flex',
    height: '15em',
    width: '14.3em',
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
        <StarRatingComponent
                name="myRating"
                editing={false}
                renderStarIcon={() => <span><StarIcon fontSize="small"/></span>}
                renderStarIconHalf={() => <span fontSize='small'><HalfStar fontSize="small"/></span>}
                starCount={5}
                value={ratingsFloat}
                starColor={"black"}
                emptyStarColor={"#C4C4C4"}
              />
      </CardInfo>
    </CardStyle>
  );
}

export default Card;

const CardStyle = styled.div`
  border: 2px solid #D3D3D3;
  margin-left: 1em;
  margin-right: 1em;
  width: 14.2em;
  height: 21.8em;
  margin-bottom: 2em;
`;

const CardImgStyle = styled.div`
  position: relative;
  width: 14.3em;
  height: 15.1em;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 8px 6px 0px 8px;
  background-color: #FFFFFF;
`;

const StarIcon = styled(StarFullIcon)`
  margin-top: .1em;
  `;

const HalfStar = styled(StarHalfIcon)`
  color: black;
  margin-top: .1em;
  `;
