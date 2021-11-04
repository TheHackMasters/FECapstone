import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RatingName from './RandNBuilder.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartBuilder from './CartBuilder.jsx';
import ProductInfo from './ProductInfo.jsx';

const ComponentWrapper = styled.section`
  border: solid
`;

const ComponentOrientation = styled.section`
display:flex;
flex-direction:row;
padding-bottom: 1em;
`;

const SubComponentOrientation = styled.section`
padding-left: 1em;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    const { data, styles } = this.props;
    this.state = {
      data: data,
      styles: styles.results,
      styleItem: 0,
      prodId: data.id,
      photos: styles.results[0].photos,
      skus: styles.results[0].skus,
      styleId: styles.results[0].style_id,
    };
  }

  componentDidMount() {
    const { data, styles } = this.props;
    this.setState({
      data: data,
      styles: styles.results,
      styleItem: 0,
      prodId: data.id,
      photos: styles.results[0].photos,
      skus: styles.results[0].skus,
      styleId: styles.results[0].style_id,
    });
    console.log('Mounted overview');
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.id !== prevProps.data.id) {
      const { data, styles } = this.props;
      this.setState({
        data: data,
        styles: styles.results,
        styleItem: 0,
        prodId: data.id,
        photos: styles.results[0].photos,
        skus: styles.results[0].skus,
        styleId: styles.results[0].style_id,
      });
      // console.log('Update needed', this.state);
    }
  }

  /*
  THE PLAN:
  Spread the data in the styles array in as organic a way as possible.
  Use a state-track index to update all other components with the correct data from styles.
  We will build a lot of bound functions here.
  StyleSelector will be the core, which will update state to update the other components.
  e.g. Default Style at index 0, have a function to update dependent states based on the index.
  Such as: Price state, to use sale price if not null (e.z. if else) of style at 0
  Style photo array at index, to be passed to image builder(different from the styles)
  etc...
  */

  render() {
    // console.log('should change', this.props);
    const {
      data, styles, styleItem, prodId, photos, skus, styleId,
    } = this.state;
    // console.log('s', styles);
    // console.log('state', this.state);
    return (
      <ComponentWrapper id="overview">
        <div className="overview">Hello World from the Overview</div>
        <ComponentOrientation id="componentorient">
          <ImageBuilder styles={styles[styleItem]} />
          <div>
            <SubComponentOrientation id="ratingname">
              <RatingName data={data} style={styles[styleItem]} />
            </SubComponentOrientation>
            <SubComponentOrientation id="styleselector">
              <StyleSelector styles={styles} selection={styles[styleItem]} />
            </SubComponentOrientation>
            <SubComponentOrientation id="cartbuilder">
              <CartBuilder skus={skus} />
            </SubComponentOrientation>
          </div>
        </ComponentOrientation>
        <ProductInfo details={data} />
      </ComponentWrapper>
    );
  }
}

export default Overview;
