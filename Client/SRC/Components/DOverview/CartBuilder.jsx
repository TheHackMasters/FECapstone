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
    this.onQuantityChange = this.onQuantityChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { selection, skus } = this.props;
    if (selection !== prevProps.selection) {
      console.log('should update');
      this.setState({
        curSize: 'Select Size',
        curQuantity: '-',
        curSku: '',
        skus,
      });
      // console.log('Update needed', this.state);
    }
  }

  onSizeChange(event) {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const option = el.getAttribute('id');
    this.setState({
      curSize: event.target.value,
      curSku: option,
    });
  }

  onQuantityChange(event) {
    this.setState({
      curQuantity: event.target.value,
    });
  }

  render() {
    const { skus, curSku } = this.state;
    return (
      <CartColumns>
        <form>
          <BoxWrapper>
            <SelectSize skus={skus} handleChange={this.onSizeChange} />
          </BoxWrapper>
          <BoxWrapper>
            <SelectQuantity quantity={this.state} handleChange={this.onQuantityChange} />
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
