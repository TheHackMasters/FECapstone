import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';



const RatingsNReviews = () => {

  return (
<>
    <h1> Hello From Ratings And Reviews </h1>

    <div className="RatingsNReviews">
      <section>
        <h1>Ratings and Reviews Container</h1>

        <Ratings />
        <Reviews />
      </section>

    </div>

    </>
  )
}

export default RatingsNReviews;

