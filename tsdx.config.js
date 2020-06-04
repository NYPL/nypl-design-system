// const svg = require("rollup-plugin-svg");
const url = require("@rollup/plugin-url");

module.exports = {
    rollup(config, _options) {
        config.plugins = [url(), ...config.plugins];
        return config;
    },
};
