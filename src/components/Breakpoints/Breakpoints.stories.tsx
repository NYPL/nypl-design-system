import * as React from "react";

import cssVariables from "../../helpers/CSSVariablesHelper";
import getCSSVariable from "../../helpers/getCSSVariable";
import { CSSVariablesInterface } from "../../interfaces";

const breakpointVariables: CSSVariablesInterface = {};

for (const [key, value] of Object.entries(cssVariables)) {
  if (key.startsWith(" --breakpoint")) {
    breakpointVariables[key] = value;
  }
}

const breakpointSizes = {
  Desktop: "xl",
  "Tablet Landscape": "large",
  "Tablet Portrait": "medium",
  Mobile: "small",
};

const breakpointValuesList = [];

for (const [key, value] of Object.entries(breakpointSizes)) {
  breakpointValuesList.push(
    <li>
      <span>{key}:</span>
      <span>{getCSSVariable(`--breakpoint-${value}`)}</span>
    </li>
  );
}

const breakpointVarsList = [];

for (const [key, value] of Object.entries(breakpointSizes)) {
  breakpointVarsList.push(
    <span className={`${key}`}>
      --breakpoint-{value}: {getCSSVariable(`--breakpoint-${value}`)}
      <br />
    </span>
  );
}

export const breakpoints = () => (
  <>
    <ul>{breakpointValuesList}</ul>
    <pre>{breakpointVarsList}</pre>
  </>
);

breakpoints.storyName = "Breakpoints";

// const breakpointVarsList = [];

// for (const [key, value] of Object.entries(breakpointSizes)) {
//   breakpointVarsList.push(
//     <div style={{ marginBottom: "2%" }}>
//       <div>
//         <span
//           style={{
//             marginRight: "var(--space-s)",
//           }}
//         >
//           {key}
//         </span>
//         <span>--breakpoint-{value}</span>
//       </div>
//       <p>{getCSSVariable(`--breakpoint-${value}`)}</p>
//     </div>
//   );
// }
