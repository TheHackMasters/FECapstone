import React from 'react';
import styled from 'styled-components';
import BarTextContent from './BarTextContent.jsx'
import Bar from './Bar.jsx';

const Graph = styled.div`
display: flex;
position: relative;
max-width:300px;
height: 200px;
/* background: #ddd; */
margin-bottom: -70px;
`

const BarGraph = (props) => {

  let bar5 = 0
  let bar4 = 0
  let bar3 = 0
  let bar2 = 0
  let bar1 = 0

  if(props.meta !== undefined) {
    // console.log(props.meta.data)
    const { meta } = props;
    const { data } = meta;
    const { ratings } = data;
    bar5 = ratings['5']
    bar4 = ratings['4']
    bar3 = ratings['3']
    bar2 = ratings['2']
    bar1 = ratings['1']

  }

  return (
    <div className="graph-wrapper">
      <Graph >
        <BarTextContent />
        <div>
          <Bar percent={bar5 * 10} />
          <Bar percent={bar4 * 10} />
          <Bar percent={bar3 * 10} />
          <Bar percent={bar2 * 10} />
          <Bar percent={bar1 * 10} />

        </div>
      </Graph>
    </div>
  )
}

export default BarGraph;