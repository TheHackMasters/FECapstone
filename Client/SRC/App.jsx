import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RatingsNReviews from './Components/RatingsNReviews/RatingsNReviews.jsx';
import Overview from './Components/DOverview/Overview.jsx';
import RIAC from './Components/DKProdComp/RIAC.jsx';
import Questions from './Components/YQandA/Refactoring/Questions.jsx';
import { ContextObj } from './Components/YQandA/Refactoring/ContextObj.jsx';
import Navbar from './Navbar.jsx';

import dummyOverview from './Components/DOverview/dummydata.js';
import dummyRelatedData from './Components/DKProdComp/dummyRelatedData.js';
import dummyRelatedStyles from './Components/DKProdComp/dummyRelatedStylesData.js';

function App(props) {
  // example of using a hook for state
  const [overviewData, setOverviewData] = useState(dummyOverview.dummyOverview.data);
  const [overviewStyles, setOverviewStyles] = useState(dummyOverview.dummyOverview.styles);
  const [curProdId, setCurProdId] = useState(0);
  const [relatedData, setRelatedData] = useState(dummyRelatedData.dummyRelatedData);
  const [userCart, setUserCart] = useState(dummyOverview.dummyOverview.cart);
  const [relatedStyles, setRelatedStyles] = useState(dummyRelatedStyles.styles);
  const [productId, setProductId] = useState(61575);
  const [productInfo, setProductInfo] = useState({});

  const [meta, setMeta] = useState();
  const [reviews, setReviews] = useState();

  // Get the initial featured product and update app state
  useEffect(() => {
    axios.get('/products')
      .then((data) => {
        setCurProdId(data.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  // Update the styles and related products when the currently selected
  // product changes
  useEffect(() => {
    if (curProdId !== 0) {
      axios.get(`/products/${curProdId}`)
        .then((data) => setOverviewData(data.data))
        .then(() => axios.get(`/products/${curProdId}/styles`))
        .then((data) => setOverviewStyles(data.data))
        .catch((err) => console.log(err));

      axios.get(`/products/${curProdId}/related`)
        .then((result) => {
          const arr = [];
          const set = new Set(result.data);
          const arrSet = Array.from(set);
          const filter = arrSet.filter((item) => (item.id !== curProdId));
          filter.forEach((id) => {
            arr.push(axios.get(`/products/${id}`)
              .then((reply) => (reply.data))
              .catch((err) => console.log(err)));
          });
          return arr;
        })
        .then((ary) => Promise.all(ary))
        .then((finished) => setRelatedData(finished))
        .catch((err) => console.log(err));
    }
  }, [curProdId]);

  // Gets the current cart data from the API
  useEffect(() => {
    axios.get('/cart')
      .then((data) => {
        setUserCart(data.data);
      })
      .catch((err) => console.log(err));
  }, [curProdId]);

  useEffect(() => {
    if (curProdId !== 0) {
      const tempRelatedStyles = [];
      relatedData.forEach((prod) => {
        tempRelatedStyles.push(axios.get(`/products/${prod.id}/styles`)
          .then((result) => (result.data))
          .catch((err) => console.log(err)));
      });
      Promise.all(tempRelatedStyles)
        .then((values) => setRelatedStyles(values))
        .catch((err) => console.log(err));
    }
  }, [relatedData]);

  useEffect(() => {
    if (curProdId !== 0) {
      axios.get(`/reviews/meta/${curProdId}`)
        .then((results) => setMeta({ data: results.data }))
        .catch((error) => console.log(error));

      axios.get(`/reviews/${curProdId}`)
        .then((results) => setReviews({ reviews: results.data.results }))
        .catch((error) => console.log(error));
    }
  }, [curProdId]);

  const clickTracker = (event) => {
    const we = event.target.dataset.trackingid.split(' ');
    const clickData = {
      element: we[1],
      widget: we[0],
      time: Date(),
    };
    axios.post('/interactions', clickData)
      .then((data) => {
        console.log('success!', data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Overview
        data={overviewData}
        styles={overviewStyles}
        cart={userCart}
        clickTracker={clickTracker}
        meta={meta}
      />
      <RIAC
        relatedData={relatedData}
        relatedStyles={relatedStyles}
        overviewData={overviewData}
        overviewStyles={overviewStyles}
        setCurProdId={setCurProdId}
      />
      <ContextObj.Provider value={{ productId, setProductId, productInfo }}>
        <Questions />
      </ContextObj.Provider>

      <a name="Ratings" />
      <RatingsNReviews
        meta={meta}
        reviews={reviews}
      />

    </div>
  );
}

export default App;
