import React from 'react';

function LeftArrow(props) {
  // const leftArrow = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesrDH4a-wiZIORdQTA2BC93Uj_WHCBf0gB9eKJnCjhHmsMw9dhkWM7p2KRLnzSlqBHrg&usqp=CAU';

  const leftArrow = 'https://freepngimg.com/thumb/web_design/24703-6-right-arrow-image.png';

  const arrowLeftStyle = {
    width: '2.4em',
    height: '3.4em',
    objectFit: 'cover',
    margin: 'auto',
    marginRight: '25px',
    transform: 'scaleX(-1)',
  };

  const arrowButtonStyle = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  };

  return (
    <>
      <button style={arrowButtonStyle}>
        <img
          style={arrowLeftStyle}
          loading="lazy"
          alt="Left arrow"
          src={leftArrow}
          onClick={props.nextSlide}
        />
      </button>
    </>
  );
}

export default LeftArrow;
