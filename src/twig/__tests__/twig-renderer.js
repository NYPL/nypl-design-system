const twig = require('twig');
const bem = require('../_twig-components/functions/bem');
const util = require('util');

twig.extendFunction("bem", bem);
const render = util.promisify(twig.renderFile);

// function renderFile(fileName, overrides) {
//   return new Promise((resolve, reject) => {
//     twig.renderFile(fileName, overrides, (err, html) => {
//       if(err) {
//         reject(error);
//       } else {
//         resolve(html);
//       }
//     });
//   })
// }

module.exports = render;