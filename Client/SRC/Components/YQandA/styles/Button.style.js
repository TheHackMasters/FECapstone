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
  top: 20px;
  right: 40px;
  width: 270px;

  &:hover {
    opacity: 0.7;
    transform: scale(0.98)
  }
`
const AddMoreQuestion = styled.button`

  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: black;
  background-color: #87CEEB;
  position: relative;
  top: 20px;
  right: 10px;
  width: 200px;

  &:hover {
    opacity: 0.7;
    transform: scale(0.98)
  }
`

export {LoadMoreButton, AddMoreQuestion}