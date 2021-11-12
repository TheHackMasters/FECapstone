import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import helper from './helper.js';
import RatingsSlider from './RatingsSlider.jsx';
import BarGraph from './BarGraph/BarGraph.jsx';
import StarRatingComponent from 'react-star-rating-component';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';


const Ratings = (props) => {
  // const { data: { ratings, characteristics, recommended } } = meta;
  // console.log(props);
  // console.log(ratings);

  // const [ratings, setRatings] = useState();
  const [charState, setCharState] = useState({});
  const [floatState, setFloatState] = useState(0);

  let recValue = 0;

  if (props.meta !== undefined) {

    const { meta } = props;
    const { data } = meta;
    const { characteristics } = data;

    const rc = data.recommended;
    const recommended = Math.round((Number(rc.true) / (Number(rc.false) + Number(rc.true))) * 100);
    recValue = recommended;
    // console.log(recValue);
  }
  useEffect(() => {

    if (props.meta !== undefined) {
      const { data } = props.meta;
      const { ratings } = data;

      let ratingsFloat = (Math.round(helper.averageRating(ratings) * 10) / 10).toFixed(1);
      setFloatState(Number(ratingsFloat))
    }


  }, [props]);




  return (

    <>
      <RatingsDiv>

        <div>

            <RatingsHeader>Ratings & Reviews </RatingsHeader>
          <div className="ratings">
            <div>
              <FloatSize>{floatState}</FloatSize>
              {' '}
              <br />
              <StarRatingComponent
                name="myRating"
                editing={false}
                renderStarIcon={() => <span fontSize='small'><StarIcon fontSize='small'/></span>}
                renderStarIconHalf={() => <span fontSize='small'><HalfStar fontSize='small'/></span>}
                starCount={5}
                value={floatState}
                starColor={"black"}
                emptyStarColor={"#C4C4C4"}
              />
            </div>
            <span> </span>
            <div>
              {' '}
              {recValue}
              % of reviewers recommend this product
            </div>
            <BarGraph meta={props.meta} />

            <RatingsSlider meta={props.meta} />

          </div>

        </div>

      </RatingsDiv>

    </>
  );
};

export default Ratings;

const RatingsDiv = styled.div`
display: grid;
width: 100%;
grid-column: 1;
grid-row: 1/6;
padding: 20px;
margin-left: 30px;

`;

const HalfStar = styled(StarHalfIcon)`
color: black;
`

const RatingsHeader = styled.h3`
  justify-content: start;
  font-weight: 300;
  size: 18px;
  color: grey;
  padding: 2em 0em 0em 0em;

`

const FloatSize = styled.h3`

font-weight: 900;
font-size: 46px;
margin-top: -30px;
margin-bottom: -30px;
`

const Stars = styled(StarRatingComponent)`
margin-left: 30px;
`