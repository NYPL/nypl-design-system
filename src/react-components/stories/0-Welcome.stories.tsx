import * as React from "react";

import { storiesOf } from "@storybook/react";

storiesOf("Home", module)
  .add("introduction", () =>
    <div>
      <h2>NYPL Design System React Components</h2>
      <p>
        Welcome to the documentation for the NYPL Design System React Components
      </p>
    </div>,
    {
      info: {
        disable: true
      }
    }
  );