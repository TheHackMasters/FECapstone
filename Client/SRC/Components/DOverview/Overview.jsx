import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RatingName from './RandNBuilder.jsx';
import ImageBuilder from './ImageBuilder.jsx';
import StyleSelector from './StyleSelector.jsx';
import CartBuilder from './CartBuilder.jsx';
import ProductInfo from './ProductInfo.jsx';

// Add in a min width(300) with an auto max width
const ComponentWrapper = styled.section`
  border: none
`;

const ComponentOrientation = styled.section`
display:flex;
flex-direction:row;
padding-bottom: 1em;
`;

const SubComponentOrientation = styled.section`
min-width: 30em;
max-width: 30em;
padding-left: 1em;
`;

const StyledBanner = styled.div`
text-align: center;
`;

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

  componentDidMount() {
    const { data, styles } = this.props;
    this.setState({
      data,
      styles: styles.results,
      styleItem: 0,
      prodId: data.id,
      styleId: styles.results[0].style_id,
    });
    console.log('Mounted overview');
  }

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
      // console.log('Update needed', this.state);
    }
  }

  switchStyle(event) {
    // console.log(event.target.id);
    this.setState({
      styleItem: event.target.id,
    });
  }

  render() {
    // console.log('should change', this.props);
    const {
      data, styles, styleItem, prodId, styleId,
    } = this.state;
    const { clickTracker } = this.props;
    // console.log('s', styles);
    // console.log('state', this.state);
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
