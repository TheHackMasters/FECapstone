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
  console.log(props)
  // const [charState, setCharState] = useState({
  //   Fit: {
  //     id: 206673,
  //     value: '4',
  //   },
  //   Length: {
  //     id: 206674,
  //     value: '2.6000000000000000',
  //   },
  //   Comfort: {
  //     id: 206675,
  //     value: '3.8000000000000000',
  //   },
  //   Quality: {
  //     id: 206676,
  //     value: '3.2000000000000000',
  //   },
  // });

  let fitValue;
  let lengthValue;
  let comfortValue;
  let qualityValue;
  let sizeValue;
  let widthValue;

  if (props.meta !== undefined) {
    const { meta } = props;
    const { data } = meta;
    const { characteristics } = data;

    if (characteristics.Fit !== undefined) {
      fitValue = characteristics.Fit.value
    }
    if (characteristics.Size !== undefined) {
      sizeValue = characteristics.Size.value
    }
    if (characteristics.Width !== undefined) {
      widthValue = characteristics.Width.value
    }
    if (characteristics.Length !== undefined) {
      lengthValue = characteristics.Length.value
    }
    if (characteristics.Comfort !== undefined) {
      comfortValue = characteristics.Comfort.value
    }
    if (characteristics.Quality !== undefined) {
      qualityValue = characteristics.Quality.value
    }


    // fitValue = characteristics.Fit.value
    // sizeValue = characteristics.Size.value
    // widthValue = characteristics.Width.value
    // lengthValue = characteristics.Length.value
    // comfortValue = characteristics.Comfort.value
    // qualityValue = characteristics.Quality.value
    // console.log(fitValue)
  }
  // opacity={charState.Fit.value > 2 ? (charState.value / 10) : 0.1}


  return (
    <>
      <TextStyles>Fit</TextStyles>
      <Styles className="rangeSlider">
        Not So Great
        <input type="range" min={0} max={5} value={fitValue} className="slider" disabled="true" />
        Great!
      </Styles>
      Length
      <Styles>
        Not So Great
        <input type="range" min={0} max={5} value={lengthValue} className="slider" disabled="true" />
        Great!
      </Styles>
      Comfort
      <Styles>
        Not So Great
        <input type="range" min={0} max={5} value={comfortValue} className="slider" disabled="true" />
        Great!
      </Styles>
      Quality
      <Styles>
        Not So Great
        <input type="range" min={0} max={5} value={qualityValue} className="slider" disabled="true" />
        Great!
      </Styles>

    </>
  );
};
export default RatingsSlider;
