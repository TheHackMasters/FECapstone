/*eslint-disable */

import styled from 'styled-components';

const UserContainer =styled.span`
  position: absolute;
  left: 50px;
  font-size: 14px;
`

const HelpAContainer = styled.span`
  position: absolute;
  left: 270px;
  font-size: 14px;
`

const HelpAButton =styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  left: 320px;
  font-weight: none;
  font-size: 14px;
  margin-top:4px;
  text-decoration: underline;
`

const AnswerCount = styled.span`
  position: absolute;
  font-size: 14px;
  left: 350px;
  text-decoration: none;
`
const Report =styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  left: 390px;
  font-weight: none;
  font-size: 14px;
  margin-top:4px;
  text-decoration: underline;
`

export {UserContainer, HelpAContainer, HelpAButton, AnswerCount, Report};