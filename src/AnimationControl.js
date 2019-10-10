import React, { Component } from "react";
import "./AnimationControl.css";
import "./animation.css";
import Animation from "./Animation.js";

class AnimationControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      play: false
    };
  }

  handleText = evt => {
    console.log(evt.target.value);
    this.setState({ time: evt.target.value });
  };

  startAnimation = () => {
    this.setState({ play: true });
    setTimeout(() => {
      this.setState({ play: false });
    }, this.state.time * 1000);
  };

  render() {
    return (
      <div className="app-container">
        <Animation display={this.state.play} />
        <span className="input-label">Duration de l'animation</span>
        <input
          className="text-box"
          type="text"
          onChange={this.handleText}
        ></input>
        <span className="unit">secondes</span>
        <button className="btn" onClick={this.startAnimation}>
          Animer!
        </button>
      </div>
    );
  }
}

export default AnimationControl;
