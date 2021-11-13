import styled from 'styled-components';

const ArrowButtonStyle = styled.button`
  background-color: transparent;
  border-color: transparent;
`;

const ArrowLeftStyle = styled.img`
  width: 2.4em;
  height: 3.4em;
  object-fit: cover;
  margin: auto;
  margin-right: 25px;
  transform: scaleX(-1);
`;

const ArrowRightStyle = styled.img`
  width: 2.4em;
  height: 3.4em;
  object-fit: cover;
  margin: auto;
  margin-left: 5px;
`;

export {
  ArrowButtonStyle, ArrowLeftStyle,
  ArrowRightStyle,
};
