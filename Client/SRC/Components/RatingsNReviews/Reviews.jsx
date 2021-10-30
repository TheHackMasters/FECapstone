import React, { useEffect, useState } from 'react';

const Reviews = () => {



  return (
    <>
      <h1>Hello from Reviews</h1>

      <div className="reviews">
        <div>248 reviews, sorted by relevance</div>
        <div>
          <div>*****</div>
          <header>Review title ------------------------------------ </header>
          <p> | </p>
          <p>Review text here is a bunch of review text that
            reviews an item and tells how good or terrible it is.
            Or you can use this area to troll about how
            excellent the napkin quality is.. Maybe comment
            on the exquisite taste of the ketchup or something
            like that. God I love it when doors open both ways.</p>
          <span>Helpful | ?</span>
          <span> | Yes (7)</span>
          <span> | No (3)</span>
          |
          <span>Report</span>
        </div>
        <div>
          <div>****</div>
          <header>Review title ------------------------------------ </header>
          <p> | </p>
          <p>Review text here is a bunch of review text that
            reviews an item and tells how good or terrible it is.
            Or you can use this area to troll about how
            excellent the napkin quality is.. Maybe comment
            on the exquisite taste of the ketchup or something
            like that. God I love it when doors open both ways.</p>
            <span>Helpful | ?</span>
          <span> | Yes (7)</span>
          <span> | No (3)</span>
          |
          <span>Report</span>
        </div>
      </div>


    </>
  )
}

export default Reviews;