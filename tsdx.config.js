const image = require("@rollup/plugin-image");

module.exports = {
    rollup(config, _options) {
        config.plugins.unshift(image());
        return config;
    },
};
