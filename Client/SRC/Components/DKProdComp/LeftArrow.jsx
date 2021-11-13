import React from 'react';
import { ArrowButtonStyle, ArrowLeftStyle } from './styles/arrowButtonStyles.js';

function LeftArrow(props) {
  // const leftArrow = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesrDH4a-wiZIORdQTA2BC93Uj_WHCBf0gB9eKJnCjhHmsMw9dhkWM7p2KRLnzSlqBHrg&usqp=CAU';

  const leftArrow = 'https://freepngimg.com/thumb/web_design/24703-6-right-arrow-image.png';

  return (
    <>
      <ArrowButtonStyle>
        <ArrowLeftStyle
          loading="lazy"
          alt="Left arrow"
          src={leftArrow}
          onClick={props.nextSlide}
        />
      </ArrowButtonStyle>
    </>
  );
}

export default LeftArrow;
