import React, { Component } from "react";

class Animation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let display = this.props.display;
    return (
      <div
        className="loader-container"
        style={display ? { opacity: 1 } : { opacity: 0 }}
      >
        <div id="loader">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
        </div>
      </div>
    );
  }
}

export default Animation;
