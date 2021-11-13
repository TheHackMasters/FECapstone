import React from 'react';

// shockingly complicated system to add a check mark
// to a selected style, and hide it if not selected
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props;
    this.state = {
      id,
      isSelected: true,
    };
  }

  // checks the initial state of the app to render/hide the box
  componentDidMount() {
    const { styleItem } = this.props;
    const { id } = this.props;
    if (styleItem !== id) {
      this.setState({
        isSelected: false,
      });
    }
  }

  // checks for changes and if the box needs to be displayed
  componentDidUpdate(prevProps) {
    const { styleItem } = this.props;
    const { id } = this.props;
    if (styleItem !== prevProps.styleItem) {
      if (styleItem === `${id}`) {
        this.setState({
          isSelected: true,
        });
      } else {
        this.setState({
          isSelected: false,
        });
      }
    }
  }

  render() {
    const { id, display, isSelected } = this.state;
    const curDisplay = {
      position: 'absolute',
      top: '1em',
      right: '1em',
      cursor: 'pointer',
    };
    let checkmark;
    // conditional rendering logic to display the checkbox
    if (isSelected) {
      checkmark = (
        <div id={id} style={curDisplay}>
          ✅
        </div>
      );
    } else {
      <div id={id} style={curDisplay} />;
    }

    return (
      <div>
        {checkmark}
      </div>
    );
  }
}

export default Checkbox;
