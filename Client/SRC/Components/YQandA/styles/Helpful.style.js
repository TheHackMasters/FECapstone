/*eslint-disable */

import styled from 'styled-components';

const HelpContainer = styled.span`
  position: absolute;
  left: 600px;
  font-size: 14px;
`
const QuestionLetter =styled.span`
  font-weight: bolder;
  font-size: 17px;
`

const HelpButton =styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  left: 660px;
  font-weight: none;
  font-size: 14px;
  margin-top:4px;
  text-decoration: underline;
`

const List = styled.div`
  display: inline;
  font-weight: bolder;
  font-size: 17px;
`

const Count = styled.span`
  position: absolute;
  font-size: 14px;
  left: 695px;
  text-decoration: none;
`

const AddButton =styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  left: 720px;
  margin-top:4px;
  text-decoration: underline;
`

export {HelpContainer, HelpButton, List, Count, QuestionLetter, AddButton};