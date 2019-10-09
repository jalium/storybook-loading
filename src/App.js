import React, { Component } from "react";
import "./App.css";
import "./loading.css";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  handleText = evt => {
    console.log(evt.target.value);
    this.setState({ time: evt.target.value });
  };

  startAnimation = () => {};

  render() {
    return (
      <div className="app-container">
        <div class="loader">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
        </div>
        <p className="inputLabel">Duration de l'animation</p>
        <input
          className="textbox"
          type="text"
          onChange={this.handleText}
        ></input>
        <p className="unit">secondes</p>
        <button className="btn" onClick={this.startAnimation}>
          Animer!
        </button>
      </div>
    );
  }
}

export default Loading;
