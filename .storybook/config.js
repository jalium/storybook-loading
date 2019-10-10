import { configure } from "@storybook/react";
import "../src/index.css";
import "../src/AnimationControl.css";
import "../src/animation.css"

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

configure(loadStories, module);
