import React from 'react';

function LeftArrow(props) {
  const leftArrow = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesrDH4a-wiZIORdQTA2BC93Uj_WHCBf0gB9eKJnCjhHmsMw9dhkWM7p2KRLnzSlqBHrg&usqp=CAU';

  const arrowLeftStyle = {
    width: '55px',
    height: '55px',
    objectFit: 'cover',
    margin: 'auto',
    marginRight: '25px',
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
          alt="Left arrow"
          src={leftArrow}
          onClick={props.nextSlide}
        />
      </button>
    </>
  );
}

export default LeftArrow;
