"use strict";
// Re-written in TS from https://github.com/drupal-pattern-lab/bem-twig-extension
Object.defineProperty(exports, "__esModule", { value: true });
function bem(baseClass, modifiers, blockName, extra) {
    let classes = [];
    // If using a blockname to override default class.
    if (blockName) {
        classes.push(blockName.concat("__").concat(baseClass));
        // Set blockname--modifier classes for each modifier.
        if (modifiers) {
            modifiers.forEach((modifier) => {
                classes.push(
                    blockName
                        .concat("__")
                        .concat(baseClass)
                        .concat("--")
                        .concat(modifier)
                );
            });
        }
    }
    // If not overriding base class.
    else {
        // Set base class.
        classes.push(baseClass);
        if (modifiers) {
            modifiers.forEach((modifier) => {
                classes.push(baseClass.concat("--").concat(modifier));
            });
        }
    }
    // If extra non-BEM classes are added.
    if (extra) {
        extra.forEach((extraClass) => {
            classes.push(extraClass);
        });
    }
    let attributes = classes.join(" ");
    return attributes;
}
exports.default = bem;
