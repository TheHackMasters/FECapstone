import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SelectQuantity from './SelectQuantity.jsx';
import SelectSize from './SelectSize.jsx';

const CartRows = styled.div`
margin-top: 15px;
display:flex;
flex-direction:row;
`;

const CartColumns = styled.div`
display:flex;
flex-direction:column;
font-weight: bolder;
`;

const BoxWrapper = styled.label`
margin: 15px;
`;

const BoxAlt = styled.div`
border: solid;
padding: 10px;
margin: 5px;
cursor:pointer;
`;

const BoxStar = styled.div`
border: solid;
padding: 15px;
margin: 5px;
margin-left: 4em;
cursor:pointer;
`;

const StyledPlus = styled.span`
font-size: 1em;
font-weight: bolder;
margin-left: 5em;
`;

const StyledSelectS = styled.select`
padding: 10px;
border: solid;
width: 13rem;
cursor:pointer;
`;

const StyledSelectQ = styled.select`
padding: 10px;
border: solid;
width: 5rem;
cursor:pointer;
`;

const StyledOption = styled.option`
width: 10fr;
`;

class CartBuilder extends React.Component {
  constructor(props) {
    super(props);
    const { skus } = this.props;
    console.log('CB', this.props);
    this.state = {
      curSize: 'Select Size',
      curQuantity: '-',
      curSku: '',
      skus,
    };
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onSizeChange = this.onQuantityChange.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   const { skus } = this.props;
  //   if (selection.style_id !== prevProps.skus.style_id) {
  //     this.setState({
  //       curPhoto: 0,
  //       photos: selection.photos,
  //     });
  //     // console.log('Update needed', this.state);
  //   }
  // }

  onSizeChange(event) {
    console.log('event', event);
    console.log('value', event.target.value);
    console.log('id', event.target.id);
    this.setState({
      curSize: event.target.id,
    });
  }

  onQuantityChange(event) {
    this.setState({
      curQuantity: event.target.id,
    });
  }

  render() {
    const { skus } = this.state;
    return (
      <CartColumns>
        <form>
          <BoxWrapper>
            <StyledSelectS onChange={(event) => {
              this.onSizeChange(event);
            }}
            >
              <StyledOption value="makeAbuilder">Select Size</StyledOption>
              <SelectSize skus={skus} />
            </StyledSelectS>
          </BoxWrapper>
          <BoxWrapper>
            <StyledSelectQ>
              <StyledOption value="makeAbuilder">1</StyledOption>
            </StyledSelectQ>
          </BoxWrapper>
        </form>
        <CartRows>
          <BoxAlt>
            <span>ADD TO BAG</span>
            <StyledPlus>+</StyledPlus>
          </BoxAlt>
          <BoxStar>
            <span>☆</span>
          </BoxStar>
        </CartRows>
      </CartColumns>
    );
  }
}

export default CartBuilder;
