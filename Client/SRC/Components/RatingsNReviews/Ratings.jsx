import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Ratings = (props) => {
  // const { data: { ratings, characteristics, recommended } } = meta;
  // console.log(props);
  // console.log(ratings);

  // const [ratings, setRatings] = useState();

  let recValue = 0;

  if (props.meta !== undefined) {
    const { meta } = props;
    // console.log(meta);
    const rc = meta.data.recommended;
    const recommended = Math.round((Number(rc.true) / (Number(rc.false) + Number(rc.true))) * 100);
    recValue = recommended;
    // console.log(recValue);
  }



  return (

    <>
      <RatingsDiv>

        <div>

          <div className="ratings">
            <div>Ratings & Reviews </div>
            <div>3.5 *****</div>
            <div>
              {' '}
              {recValue}
              % of reviewers recommend this product
            </div>
            <div>5 stars ##########</div>
            <div>4 stars #####</div>
            <div>3 stars ########</div>
            <div>2 stars ##</div>
            <div>1 stars ###</div>
            <div> Size (too small, too large)</div>
            <div> Comfort (poor, perfect)</div>
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
