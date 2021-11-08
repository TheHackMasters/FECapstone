import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import helper from './helper.js';
import { StarsRating } from "stars-rating-react-hooks";
import RatingStar from './RatingStar.jsx';
import RatingsSlider from './RatingsSlider.jsx';
import BarGraph from './BarGraph/BarGraph.jsx'

const Ratings = (props) => {
  // const { data: { ratings, characteristics, recommended } } = meta;
  // console.log(props);
  // console.log(ratings);

  // const [ratings, setRatings] = useState();
  const [charState, setCharState] = useState({});

  let recValue = 0;

  let ratingsFloat = 0;

  if (props.meta !== undefined) {
    const { data } = props.meta;
    const { ratings } = data;

    ratingsFloat = (Math.round(helper.averageRating(ratings) * 10) / 10).toFixed(1);
  }

  if (props.meta !== undefined) {
    // console.log(meta);
    const { meta } = props;
    const { data } = meta;
    const { characteristics } = data;
    // setCharState(charState = characteristics);
    // console.log(charState);

    const rc = data.recommended;
    const recommended = Math.round((Number(rc.true) / (Number(rc.false) + Number(rc.true))) * 100);
    recValue = recommended;
    // console.log(recValue);
  }

  return (

    <>
      <RatingsDiv>

        <div>

          <div className="ratings">
            <h2>Ratings & Reviews </h2>
            <div>
              {ratingsFloat}
              {' '}
              <RatingStar ratingsFloat={ratingsFloat} />
            </div>
            <span> </span>
            <div>
              {' '}
              {recValue}
              % of reviewers recommend this product
            </div>
            <BarGraph meta={props.meta}/>

            <RatingsSlider meta={props.meta}/>

          </div>

        </div>

      </RatingsDiv>

    </>
  );
};

export default Ratings;

const RatingsDiv = styled.div`
display: grid;
background-color: white;
width: 100%;
grid-column: 1;
grid-row: 1/6;
padding: 20px;
margin-left: 30px;

`;
