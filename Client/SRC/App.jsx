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
  const [count, setCount] = useState(0);
  const [allData, setAllData] = useState([]);
  const [overviewData, setOverviewData] = useState(dummyOverview.dummyOverview.data);
  const [overviewStyles, setOverviewStyles] = useState(dummyOverview.dummyOverview.styles);
  const [curProdId, setCurProdId] = useState(0);
  const [relatedData, setRelatedData] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((data) => {
        setAllData(data.data);
        setCurProdId(data.data[0].id);
      })
      .catch((err) => console.log(err));
  }, [overviewData]);

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

  return (
    <div>
      <div>Hello World</div>
      <Overview data={overviewData} styles={overviewStyles} />
      <RIAC relatedData={relatedData} overviewData={overviewData} />
      <QAMain />
      <a name="Ratings" />
      <RatingsNReviews />
    </div>
  );
}

export default App;
