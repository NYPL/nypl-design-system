import '!style-loader!css-loader!sass-loader!import-glob-loader!design-system-styles/style.scss'; 
import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
