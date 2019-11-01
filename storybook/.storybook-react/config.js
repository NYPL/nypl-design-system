import '!style-loader!css-loader!sass-loader!import-glob-loader!design-system-styles/style.scss';
import { configure } from '@storybook/react';
const twig = require('twig');


twig.extendFunction("bem", function(baseClass, modifiers, blockName, extra) {
    console.log("variables", baseClass, modifiers, blockName, extra)
    let classes = [];
    // If using a blockname to override default class.
    if (blockName) {
        classes.push(blockName.concat("__").concat(baseClass));

        // Set blockname--modifier classes for each modifier.
        if(modifiers) {
            modifiers.forEach((modifier) => {
                classes.push(blockName.concat("__").concat(baseClass).concat("__").concat(modifier))
            })
        }
    } 
    // If not overriding base class.
    else {
        // Set base class.
        classes.push(baseClass);

        if(modifiers) {
            modifiers.forEach((modifier) => {
                classes.push(baseClass.concat("--").concat(modifier));
            })
        }
    }

    // If extra non-BEM classes are added.
    if (extra) {
      extra.forEach((extraClass) => {
        classes.push(extra_class);
      })
    };
    
    let attributes = "class=\"".concat(classes.join(' ')).concat("\"")
    console.log("attribute", attributes);
    return attributes;
})

// automatically import all stories from node_modules/stories ending in *.stories.js
// Direct link used instead of require(module) because of Webpack's inability to resolve variables in require.context

configure(require.context('../../node_modules/design-system-react-components/stories', true, /\.stories\.tsx$/), module);
//configure(require.context('../../node_modules/design-system-twig/_patterns', true, /\.stories\.js$/), module);
