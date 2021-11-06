import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Parse from '../Parse.js';

import RatingsNReviews from './Components/RatingsNReviews/RatingsNReviews.jsx';
import Overview from './Components/DOverview/Overview.jsx';
import RIAC from './Components/DKProdComp/RIAC.jsx';
import QAMain from './Components/YQandA/QAMain.jsx';

import dummyOverview from './Components/DOverview/dummydata.js';

function App(props) {
  // example of using a hook for state

  const [overviewData, setOverviewData] = useState(dummyOverview.dummyOverview.data);
  const [overviewStyles, setOverviewStyles] = useState(dummyOverview.dummyOverview.styles);
  const [curProdId, setCurProdId] = useState(0);
  const [relatedData, setRelatedData] = useState([]);
  const [userCart, setUserCart] = useState(dummyOverview.dummyOverview.cart);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [qaList, setQaList] = useState();
  const [answerList, setAnswerList] = useState();

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
          const filter = arrSet.filter((item) => (item.id !== curProdId))
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
      // console.log('related prods', relatedData);
      const tempRelatedStyles = [];
      relatedData.forEach((prod) => {
        tempRelatedStyles.push(axios.get(`/products/${prod.id}/styles`)
          .then((result) => (result.data))
          // .then((products) => products.results.reduce((defaultStyle, item) => {
          //   if (item['default?']) {
          //     defaultStyle = item;
          //   }
          //   return defaultStyle;
          // }))
          .catch((err) => console.log(err)));
      });
      Promise.all(tempRelatedStyles)
        .then((values) => setRelatedStyles(values))
        .catch((err) => console.log(err));
    }
  }, [relatedData]);

  useEffect(() => {
    if (curProdId !== 0) {
      axios.get(`/qa/questions/${curProdId}`)
        .then((data) => setQaList(data.data))
        .catch((err) => console.log('Error! ', err));

      axios.get(`/qa/questions/${curProdId}/answers`)
        .then((data) => setAnswerList(data.data))
        .catch((err) => console.log(err));
    }
  }, [curProdId]);

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

  return (
    <div>
      <div>Hello World</div>
      <Overview
        data={overviewData}
        styles={overviewStyles}
        cart={userCart}
      />
      <RIAC
        relatedData={relatedData}
        relatedStyles={relatedStyles}
        overviewData={overviewData}
        overviewStyles={overviewStyles}
        setCurProdId={setCurProdId}
      />
      <QAMain qaList={qaList} answerList={answerList} />

      <a name="Ratings" />
      <RatingsNReviews
        meta={meta}
        reviews={reviews}
      />

    </div>
  );
}

export default App;
