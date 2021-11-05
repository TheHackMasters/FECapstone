/*eslint-disable */

import styled from 'styled-components';

const HelpContainer = styled.span`
  position: absolute;
  left: 600px;
`

const HelpButton =styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  left: 660px;
  font-weight: none;
  margin-top:6px;
  text-decoration: underline;
`

const List = styled.li`
  display: inline;
`

const Count = styled.span`
  position: absolute;
  left: 690px;
  text-decoration: none;
`

export {HelpContainer, HelpButton, List, Count};