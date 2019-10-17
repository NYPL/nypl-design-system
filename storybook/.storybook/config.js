import '!style-loader!css-loader!sass-loader!import-glob-loader!design-system-styles/style.scss'; 
import { configure } from '@storybook/react';

// automatically import all stories from node_modules/stories ending in *.stories.js
// Direct link used instead of require(module) because of Webpack's inability to resolve variables in require.context

configure(require.context('../node_modules/design-system-react-components/stories', true, /\.stories\.tsx$/), module);
