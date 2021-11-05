import React from 'react';

function RightArrow(props) {
  const rightArrow = 'https://freepngimg.com/thumb/web_design/24703-6-right-arrow-image.png';

  const arrowRightStyle = {
    width: '55px',
    height: '55px',
    objectFit: 'cover',
    margin: 'auto',
    marginLeft: '5px',
  };

  const arrowButtonStyle = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  };

  return (
    <>
      <button style={arrowButtonStyle}>
        <img
          style={arrowRightStyle}
          alt="right arrow"
          src={rightArrow}
          onClick={props.nextSlide}
        />
      </button>
    </>

  );
}

export default RightArrow;
