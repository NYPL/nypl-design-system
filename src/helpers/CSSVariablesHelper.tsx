let cssVariables: {
    [k: string]: string;
} = {};

let allCSS = [].slice
    .call(document.styleSheets)
    .reduce(function (prev, styleSheet) {
        if (styleSheet.cssRules) {
            return (
                prev +
                [].slice
                    .call(styleSheet.cssRules)
                    .reduce(function (prev, cssRule) {
                        // All of our global variables are applied to :root
                        if (cssRule.selectorText == ":root") {
                            var css = cssRule.cssText.split("{");
                            css = css[1].replace("}", "").split(";");
                            for (var i = 0; i < css.length; i++) {
                                var prop = css[i].split(":");
                                if (
                                    // if a valid CSS variable, i.e. --[whatever]
                                    prop.length == 2 &&
                                    prop[0].indexOf("--") == 1
                                ) {
                                    cssVariables[prop[0]] = prop[1];
                                }
                            }
                        }
                    }, "")
            );
        }
    }, "");

export default cssVariables;
