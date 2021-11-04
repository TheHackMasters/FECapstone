import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MiniImageBuilder from './MiniImageBuilder.jsx';

const ScrollWrapper = styled.div`
position: relative,
display: flex,
flexDirection: column,
height: 30em;
overflow: auto;
`;

const UpDownWrapper = styled.div`
position: relative;
height: 30px;
width: 100px;
margin: 1em;
`;

const StyledButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: dashed grey;
cursor:pointer;
overflow: hidden;
`;

const StyledLeftA = styled.button`
position: absolute;
top: 50%;
left: 25%;
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
color: black;
font-size: 1.5em;
font-weight: 900;
`;

const StyledRightA = styled.button`
position: absolute;
top: 50%;
right: 5%;
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
color: black;
font-size: 1.5em;
font-weight: 900;
`;

const StyledUpDownA = styled.button`
position: absolute;
top: 50%;
left: 50%
padding: 5px;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
color: black;
font-size: 1.5em;
font-weight: 900;
width: 100px;
`;

class ImageBuilder extends React.Component {
  constructor(props) {
    super(props);
    const { selection } = this.props;
    this.state = {
      curPhoto: 0,
      photos: selection.photos,
    };
    this.switchDisplay = this.switchDisplay.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { selection } = this.props;
    // console.log('prev', prevProps);
    if (selection.style_id !== prevProps.selection.style_id) {
      this.setState({
        curPhoto: 0,
        photos: selection.photos,
      });
      // console.log('Update needed', this.state);
    }
  }

  switchDisplay(event) {
    // console.log(event.target.id);
    this.setState({
      curPhoto: event.target.id,
    });
  }

  render() {
    const { photos, curPhoto } = this.state;
    const ProdImage = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      border: 'solid',
      backgroundImage: `url(${photos[curPhoto].url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '40em',
      height: '40em',
    };

    let tempKey = 0;

    return (
      <div>
        <div id="imagebuilder" style={ProdImage}>
          <StyledButton />
          <StyledLeftA>🡸</StyledLeftA>
          <StyledRightA>🡺</StyledRightA>
          <UpDownWrapper>
            <StyledUpDownA>˄</StyledUpDownA>
          </UpDownWrapper>
          <ScrollWrapper>
            {photos.map((style, index) => {
              tempKey += 1;
              return (
                <MiniImageBuilder
                  style={style}
                  key={tempKey}
                  id={index}
                  switchDisplay={this.switchDisplay}
                />
              );
            })}
          </ScrollWrapper>
          <UpDownWrapper>
            <StyledUpDownA>˅</StyledUpDownA>
          </UpDownWrapper>
        </div>
      </div>
    );
  }
}

export default ImageBuilder;
