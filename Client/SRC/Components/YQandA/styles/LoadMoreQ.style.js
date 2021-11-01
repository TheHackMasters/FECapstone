/*eslint-disable */

import styled from 'styled-components';

const LoadMoreButton = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: black;
  background-color: #87CEEB;
  position: relative;
  top: 10px;
  right: 40px;

  &:hover {
    opacity: 0.7;
    transform: scale(0.98)
  }
`

export {LoadMoreButton}