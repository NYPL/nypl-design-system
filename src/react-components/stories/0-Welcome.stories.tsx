import * as React from "react";

import { storiesOf } from "@storybook/react";

storiesOf("Home", module)
  .add("introduction", () =>
    <div>
      <h2>NYPL Simplified Reusable Components</h2>
      <p>
        Welcome to the documentation for components used in various SimplyE web apps.
      </p>
    </div>,
    {
      info: {
        disable: true
      }
    }
  );