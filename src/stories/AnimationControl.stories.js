import React from "react";
import { storiesOf } from "@storybook/react";
import AnimationControl from "../AnimationControl.js";

export default {
  title: "AnimationControl"
};

storiesOf("AnimationControl", module).add("default", () => (
  <AnimationControl />
));
