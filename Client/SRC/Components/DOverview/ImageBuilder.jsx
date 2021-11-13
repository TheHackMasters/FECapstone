import React from 'react';
import styled from 'styled-components';

import MiniImageBuilder from './MiniImageBuilder.jsx';

// creates the scrollable feature of the image gallery and orients it
const ScrollWrapper = styled.div`
position: relative,
display: flex,
flexDirection: column,
height: 30em;
overflow: auto;
`;

// serves as a buffer to keep the image gallery oriented
// could be adjusted/renamed/removed in later update
const UpDownWrapper = styled.div`
position: relative;
height: 30px;
width: 100px;
margin: 1em;
`;

// I REALLY wanted time to get this button working...
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

// I will need to test removing this later...
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

// only state management it needs to handle is swapping the local image gallery
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

  // updates the gallery based on the selected photo passed from the Overview
  componentDidUpdate(prevProps) {
    const { selection } = this.props;
    if (selection.style_id !== prevProps.selection.style_id) {
      this.setState({
        curPhoto: 0,
        photos: selection.photos,
      });
    }
  }

  // simple event to switch the selected background photo
  switchDisplay(event) {
    this.setState({
      curPhoto: event.target.id,
    });
  }

  render() {
    const { photos, curPhoto } = this.state;
    // Example implementation of click tracking - the not working resize button!
    const { clickTracker } = this.props;
    // Dynamic styling to change the background image based on inputs
    // allows for other elements to easily be placed on top of the image
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
        <StyledButton
          data-trackingid="Overview ImageResize"
          onClick={(event) => {
            clickTracker(event);
          }}
        />
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
