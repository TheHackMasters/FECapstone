import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const NavStyle = styled.section`
background-color: black;
color: green;
display:flex;
flex-direction:row;
padding: 1em;
position: relative;
width: 65em;
`;

const Logo = styled.span`
font-family: 'Allison', cursive;
text-align: left;
left: 20px;
font-weight: bolder;
font-style: italic;
text-decoration: underline;
`;

const Input = styled.input`
  background-color: black;
  color: white;
  font-size: 1em;
  position: relative;
  bottom: 5px;
  width: 20%;
  padding: 1px;
`;
const Container = styled.div`
  text-align: right;
  width: 40em;
  position: absolute;
  right: 20px;
`;

function Navbar(props) {
  return (
    <NavStyle>
      <Logo> Soliloquy</Logo>
      <Container>
        <Input
          type="text"
          placeholder="Search the site..."
        />
        <SearchIcon
          style={{ color: '#6495ed' }}
        />
      </Container>
    </NavStyle>
  );
}

export default Navbar;
