import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Heading } from "../src/index";

const App = () => {
  return (
    <div>
      <Heading level="one">NYPL</Heading>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
