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
    // console.log('IB', this.props);
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
    const { clickTracker } = this.props;
    const ProdImage = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      border: 'solid',
      backgroundImage: `url(${photos[curPhoto].url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minWidth: '40em',
      height: '40em',
    };

    let tempKey = 0;

    return (
      <div
        id="imagebuilder"
        style={ProdImage}
        data-testid="MainImage"
      >
        <StyledButton />
        <UpDownWrapper>
          <StyledUpDownA />
        </UpDownWrapper>
        <ScrollWrapper>
          {photos.map((style, index) => {
            tempKey += 1;
            return (
              <MiniImageBuilder
                style={style}
                key={tempKey}
                id={index}
                data-testid={`photo${index}`}
                switchDisplay={this.switchDisplay}
              />
            );
          })}
        </ScrollWrapper>
        <UpDownWrapper>
          <StyledUpDownA />
        </UpDownWrapper>
      </div>
    );
  }
}

export default ImageBuilder;
