import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AnimationControl from "../AnimationControl.js";

export default {
  title: "AnimationControl"
};

storiesOf("AnimationControl", module).add("default", () => (
  <AnimationControl />
));
