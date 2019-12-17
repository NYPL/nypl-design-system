import '!style-loader!css-loader!sass-loader!import-glob-loader!@nypl/design-system-styles/style.scss';
import { configure, addDecorator } from '@storybook/react';

// automatically import all stories from node_modules/stories ending in *.stories.js
// Direct link used instead of require(module) because of Webpack's inability to resolve variables in require.context

configure(require.context('../../node_modules/@nypl/design-system-react-components/src/components', true, /\.stories\.tsx$/), module);
