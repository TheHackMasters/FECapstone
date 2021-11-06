import React, { useState } from 'react';
import styled from 'styled-components';

// const sliderThumbStyles = (props) => (`
//   width: 25px;
//   height: 25px;
//   background: ${props.color};
//   cursor: pointer;
//   outline: 5px solid #333;
//   opacity: ${props.opacity}
// `
// )

const Styles = styled.div`
display: flex;
align-items: center;
color:#00000056;
margin-top: 0.2rem;
margin-bottom: 0.2rem;
/* background: #FCF3CF  ; */


.rangeSlider{
  width:50%;
}

.value {
  flex: 1;
  font-size: 1rem;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 24px;
  border: 0;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 40px;
  height: 24px;
  border: 0;
  cursor: pointer;
}

`;

const TextStyles = styled.div`
margin-top: 2px;
margin-bottom: 2px;
`

const RatingsSlider = (props) => {
  const [charState, setCharState] = useState({
    Fit: {
      id: 206673,
      value: '2.4000000000000000',
    },
    Length: {
      id: 206674,
      value: '2.6000000000000000',
    },
    Comfort: {
      id: 206675,
      value: '3.8000000000000000',
    },
    Quality: {
      id: 206676,
      value: '3.2000000000000000',
    },
  });

  // opacity={charState.Fit.value > 2 ? (charState.value / 10) : 0.1}

  return (
    <>
      <TextStyles>Fit</TextStyles>
      <Styles class="rangeSlider">
        Not So Great
        <input type="range" min={0} max={5} value={charState.Fit.value} className="slider" disabled="true" />
        Great!
      </Styles>
      Length
      <Styles>
        Not So Great
        <input type="range" min={0} max={5} value={charState.Length.value} className="slider" disabled="true" />
        Great!
      </Styles>
      Comfort
      <Styles>
        Not So Great
        <input type="range" min={0} max={5} value={charState.Comfort.value} className="slider" disabled="true" />
        Great!
      </Styles>
      Quality
      <Styles>
        Not So Great
        <input type="range" min={0} max={5} value={charState.Quality.value} className="slider" disabled="true" />
        Great!
      </Styles>

    </>
  );
};
export default RatingsSlider;
