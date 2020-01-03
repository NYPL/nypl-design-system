"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resolvePackageKeyFactory() {
    return (packageJson, packageKeys) => {
        const packageKey = packageKeys.find((x) => packageJson[x]);
        if (packageKey) {
            return Object.assign({}, packageJson, { main: packageJson[packageKey] });
        }
        return packageJson;
    };
}
exports.resolvePackageKeyFactory = resolvePackageKeyFactory;
//# sourceMappingURL=resolve-package-key.js.map