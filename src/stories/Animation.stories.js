import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Animation from "../Animation.js";

export default {
  title: "Animation"
};

storiesOf("Animation", module)
  .add("hidden", () => <Animation display={false} />)
  .add("displaying", () => <Animation display={true} />);
