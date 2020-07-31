import "!style-loader!css-loader!sass-loader!import-glob-loader!../src/styles.scss";
import * as React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

// Add all the addons when starting up.
addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator((storyFn) => <div style={{ padding: "2%" }}>{storyFn()}</div>);

// automatically import all stories from node_modules/stories ending in *.stories.js
// Direct link used instead of require(module) because of Webpack's inability to resolve variables in require.context

configure(require.context("../src", true, /\.stories\.tsx$/), module);
