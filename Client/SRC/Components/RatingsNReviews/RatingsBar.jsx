// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import BarGroup from './BarGroup.jsx';

// const RatingsBar = () => {
//   const [barstate, setBarstate] = useState({
//     data: [
//       { name: '5 Stars', value: 20 },
//       { name: '4 Stars', value: 40 },
//       { name: '3 Stars', value: 35 },
//       { name: '2 Stars', value: 50 },
//       { name: '1 Stars', value: 55 },
//     ],
//   });

//   let barHeight = 30;

//   const barGroups = barstate.data.map((d, i) => (
//     <g transform={`translate(0, ${i * barHeight})`}>
//       <BarGroup d={d} barHeight={barHeight} />
//     </g>
//   ));
//   return (

//     <svg width="800" height="200">
//       <g className="container" />
//     </svg>

//   );
// };

// export default RatingsBar;
