"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sassUrlVariantsFactory(path) {
    return (url, extensions = []) => {
        const parsedUrl = path.parse(url);
        const urlVariants = [url];
        if (parsedUrl.dir && !parsedUrl.ext) {
            extensions.forEach((extension) => {
                urlVariants.push(path.join(parsedUrl.dir, `${parsedUrl.name}${extension}`));
                urlVariants.push(path.join(parsedUrl.dir, `_${parsedUrl.name}${extension}`));
            });
        }
        return urlVariants;
    };
}
exports.sassUrlVariantsFactory = sassUrlVariantsFactory;
//# sourceMappingURL=sass-url-variants.js.map