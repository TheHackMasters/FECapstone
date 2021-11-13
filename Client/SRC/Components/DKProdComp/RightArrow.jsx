import React from 'react';
import { ArrowButtonStyle, ArrowRightStyle } from './styles/arrowButtonStyles.js';

function RightArrow(props) {
  const rightArrow = 'https://freepngimg.com/thumb/web_design/24703-6-right-arrow-image.png';

  return (
    <>
      <ArrowButtonStyle>
        <ArrowRightStyle
          loading="lazy"
          alt="right arrow"
          src={rightArrow}
          onClick={props.nextSlide}
        />
      </ArrowButtonStyle>
    </>

  );
}

export default RightArrow;
