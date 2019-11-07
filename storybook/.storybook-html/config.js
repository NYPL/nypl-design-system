import '!style-loader!css-loader!sass-loader!import-glob-loader!design-system-styles/style.scss';
import { load, addDecorator } from '@storybook/html';
const twig = require('twig');
import bem from 'design-system-twig/_twig-components/functions/bem';

twig.extendFunction("bem", bem);

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

// automatically import all stories from node_modules/stories ending in *.stories.js
// Direct link used instead of require(module) because of Webpack's inability to resolve variables in require.context

load(require.context('../../node_modules/design-system-twig/_patterns', true, /\.stories\.js$/), module);
