const twig = require('twig');
const bem = require('../_twig-components/functions/bem');
const util = require('util');

twig.extendFunction("bem", bem);
const render = util.promisify(twig.renderFile);

module.exports = render;
