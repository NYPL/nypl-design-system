import '!style-loader!css-loader!sass-loader!import-glob-loader!@nypl/design-system-styles/style.scss';
import { configure, load, addDecorator } from '@storybook/html';
const twig = require('twig');
import bem from 'design-system-twig/_twig-components/functions/bem';
import attach_library from 'design-system-twig/_twig-components/functions/sb_attach-library'

twig.extendFunction("bem", bem);
twig.extendFunction("attach_library", attach_library);

// automatically import all stories from node_modules/stories ending in *.stories.js
// Direct link used instead of require(module) because of Webpack's inability to resolve variables in require.context

configure(require.context('../../node_modules/@nypl/design-system-twig/_patterns', true, /\.stories\.js$/), module);
