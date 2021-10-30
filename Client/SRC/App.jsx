import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Parse from '../Parse.js';

import RatingsNReviews from './Components/RatingsNReviews/RatingsNReviews.jsx';
import Overview from './Components/DOverview/Overview.jsx';
import RIAC from './Components/DKProdComp/RIAC.jsx';
import QAMain from './Components/YQandA/QAMain.jsx';

function App(props) {
  // example of using a hook for state
  const [count, setCount] = useState(0);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    // testing parse
    // console.log(Parse);
    // axios.get('/products')
    //   .then((data) => setAllData(data.data))
    //   .catch((err) => console.log(err));

    //Parse.getStuff();
  });

  return (
    <div>
      <div>Hello World</div>
      <Overview />
      <RIAC />
      <QAMain />
      <RatingsNReviews />
    </div>
  );
}

export default App;
