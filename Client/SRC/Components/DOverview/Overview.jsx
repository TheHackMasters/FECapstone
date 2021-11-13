import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RatingName from './RandNBuilder.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartBuilder from './CartBuilder.jsx';
import ProductInfo from './ProductInfo.jsx';

// lock in section to prevent bleed-over
const ComponentWrapper = styled.section`
  border: none
`;

const ComponentOrientation = styled.section`
display:flex;
flex-direction:row;
padding-bottom: 1em;
`;

// minimum and maximum width need to be locked in place to maintain consistent flex display
const SubComponentOrientation = styled.section`
min-width: 30em;
max-width: 30em;
padding-left: 1em;
`;

const StyledBanner = styled.div`
text-align: center;
`;
// the main hub, the core state management happens here to change between products and styles
class Overview extends React.Component {
  constructor(props) {
    super(props);
    const { data, styles } = this.props;
    this.state = {
      data,
      styles: styles.results,
      styleItem: 0,
      prodId: data.id,
      styleId: styles.results[0].style_id,
    };
    this.switchStyle = this.switchStyle.bind(this);
  }

  // spin up the overview with data from the first server call
  componentDidMount() {
    const { data, styles } = this.props;
    this.setState({
      data,
      styles: styles.results,
      styleItem: 0,
      prodId: data.id,
      styleId: styles.results[0].style_id,
    });
  }

  // update the  overview live as the input product and styles change
  componentDidUpdate(prevProps) {
    if (
      (this.props.data.id !== prevProps.data.id)
      || (this.props.styles.product_id !== prevProps.styles.product_id)
    ) {
      const { data, styles } = this.props;
      this.setState({
        data,
        styles: styles.results,
        styleItem: 0,
        prodId: data.id,
        styleId: styles.results[0].style_id,
      });
    }
  }

  // simple event to update state when a different style is clicked
  switchStyle(event) {
    // console.log(event.target.id);
    this.setState({
      styleItem: event.target.id,
    });
  }

  render() {
    // use object spread to grab necessary passthrough items and clarify elements
    const { data, styles, styleItem } = this.state;
    const { clickTracker, meta } = this.props;

    return (
      <ComponentWrapper id="overview">
        <StyledBanner className="overview">
          <span>
            <i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i>
            {' '}
            ⎯⎯ SALE/DISCOUNT
            {' '}
            <b>OFFER</b>
            {' '}
            ⎯⎯
            {' '}
            <u>NEW PRODUCT HIGHLIGHT</u>
          </span>
        </StyledBanner>
        <ComponentOrientation id="componentorient">
          <ImageBuilder
            selection={styles[styleItem]}
            clickTracker={clickTracker}
          />
          <div>
            <SubComponentOrientation id="ratingname">
              <RatingName
                data={data}
                style={styles[styleItem]}
                meta={meta}
              />
            </SubComponentOrientation>
            <SubComponentOrientation id="styleselector">
              <StyleSelector
                styles={styles}
                selection={styles[styleItem]}
                switchStyle={this.switchStyle}
                styleItem={styleItem}
              />
            </SubComponentOrientation>
            <SubComponentOrientation id="cartbuilder">
              <CartBuilder
                skus={styles[styleItem].skus}
                selection={styles[styleItem].style_id}
              />
            </SubComponentOrientation>
          </div>
        </ComponentOrientation>
        <ProductInfo details={data} />
      </ComponentWrapper>
    );
  }
}

export default Overview;
