import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Heading, HeadingLevels } from "../src/index";

const App = () => {
  return (
    <div>
      <Heading level={HeadingLevels.One}>NYPL</Heading>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
