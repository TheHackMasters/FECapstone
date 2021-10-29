import React, { useState, useEffect } from 'react';
import Parse from '../Parse.js';

import RatingsNReviews from './Components/RatingsNReviews/RatingsNReviews.jsx';
import Overview from './Components/DOverview/Overview.jsx';
import RIAC from './Components/DKProdComp/RIAC.jsx';
import QAMain from './Components/YQandA/QAMain.jsx';

function App(props) {
  // example of using a hook for state
  const [count, setCount] = useState(0);

  useEffect(() => {
    // testing parse
    // console.log(Parse);
    Parse.getStuff();
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
