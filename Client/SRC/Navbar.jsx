import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const NavStyle = styled.section`
background-color: #808080;
color: white;
display:flex;
flex-direction:row;
padding: 2em;
position: relative;
margin-bottom: 2em;
`;

const Logo = styled.span`
text-align: left;
left: 20px;
font-weight: bolder;
text-decoration: underline;
font-size: 24px;
`;

const Input = styled.input`
  background-color: #808080;
  color: white;
  font-size: 1em;
  position: relative;
  bottom: 5px;
  width: 20%;
  padding: 1px;
  border: bottom;
  border-color: transparent;
`;

const Container = styled.div`
  text-align: right;
  width: 40em;
  height: 29px;
  right: 20px;
  position: absolute;
`;

function Navbar(props) {
  return (
    <NavStyle>
      <Logo>Soliloquy</Logo>
      <Container>
        <Input
          type="text"
          placeholder="Search the site..."
        />
        <SearchIcon
          style={{ color: '#FFFFFF' }}
        />
      </Container>
    </NavStyle>
  );
}

export default Navbar;
