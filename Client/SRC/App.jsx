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
  const [allData, setAllData] = useState([]);
  const [overviewData, setOverviewData] = useState(dummyOverview.dummyOverview.data);
  const [overviewStyles, setOverviewStyles] = useState(dummyOverview.dummyOverview.styles);
  const [curProdId, setCurProdId] = useState(0);
  const [relatedData, setRelatedData] = useState([]);
  const [userCart, setUserCart] = useState(dummyOverview.dummyOverview.cart);
  const [qaList, setQaList] = useState();
  const [answerList, setAnswerList] = useState([]);

  // Get the initial featured product and update app state
  useEffect(() => {
    axios.get('/products')
      .then((data) => {
        setAllData(data.data);
        setCurProdId(data.data[0].id);
      })
      .catch((err) => console.log(err));
  }, [overviewData]);

  // Update the styles and related products when the currently selected
  // product changes
  useEffect(() => {
    if (curProdId !== 0) {
      axios.get(`/products/${curProdId}`)
        .then((data) => setOverviewData(data.data))
        .catch((err) => console.log(err));

      axios.get(`/products/${curProdId}/styles`)
        .then((data) => setOverviewStyles(data.data))
        .catch((err) => console.log(err));

      axios.get(`/products/${curProdId}/related`)
        .then((data) => {
          const arr = [];
          allData.forEach((item) => {
            if (data.data.includes(item.id)) {
              arr.push(item);
            }
          });
          setRelatedData([...arr]);
        })
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
      axios.get(`/qa/questions/${curProdId}`)
        .then((data) => setQaList(data.data))
        .catch((err) => console.log('Error! ', err));

      // axios.get(`/qa/questions/${curProdId}/answers`)
      //   .then((data) => setAnswerList(data.data))
      //   .catch((err) => console.log(err));
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
      <RIAC relatedData={relatedData} overviewData={overviewData} />
      <QAMain qaList={qaList} answerList={answerList} />
      <a name="Ratings" />
      <RatingsNReviews />
    </div>
  );
}

export default App;
