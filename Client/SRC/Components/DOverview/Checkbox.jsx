import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const { id, styleItem } = props;
    this.state = {
      id,
      display: 'block',
      styleItem,
    };
  }

  componentDidMount() {
    const { styleItem } = this.props;
    const { id } = this.props;
    if (styleItem !== id) {
      this.setState({
        display: 'none',
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { styleItem } = this.props;
    const { id } = this.props;
    if (styleItem !== prevProps.styleItem) {
      if (styleItem === `${id}`) {
        this.setState({
          display: 'block',
        });
      } else {
        this.setState({
          display: 'none',
          styleItem,
        });
      }
    }
  }

  render() {
    const { id, display } = this.state;
    const curDisplay = {
      position: 'absolute',
      top: '1em',
      right: '1em',
      cursor: 'pointer',
      display,
    };
    return (
      <div>
        <div
          id={id}
          style={curDisplay}
        >
          ✅
        </div>
      </div>
    );
  }
}

export default Checkbox;
