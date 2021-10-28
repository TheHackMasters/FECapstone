import React from 'react';
import Parse from '../Parse';

import Overview from './Components/DOverview/Overview.jsx';
import RIAC from './DKProdComp/RIAC.jsx'

const App = (props) => (
  <div>
    <div>Hello World</div>
    <Overview />
    <div id='Replace me'></div>
    <div id='Replace me'></div>
    <div id='Replace me'></div>
    <RIAC/>
  </div>
);

export default App;
