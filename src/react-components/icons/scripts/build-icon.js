var SVGSpriter =  require('svg-sprite');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var config = {
  mode: {
    symbol: {
      // symbol mode to build the SVG
      dest: 'dist/sprite', // destination folder
      sprite: 'sprite.svg', // sprite name
      example: false, // Don't build sample page
    },
  },
  svg: { // General options for created SVG files
      xmlDeclaration: false, // Add XML declaration to SVG sprite
      doctypeDeclaration: false, // Add DOCTYPE declaration to SVG sprite
      namespaceIDs: true, // Add namespace token to all IDs in SVG shapes
      namespaceClassnames: true, // Add namespace token to all CSS class names in SVG shapes
      dimensionAttributes: true // Width and height attributes on the sprite
  }
}

let spriter = new SVGSpriter(config);

// Add SVG source files
let dir = path.join(__dirname, "../svg/")
fs.readdirSync(dir).forEach(file => {
  spriter.add(dir + file, null, fs.readFileSync(dir + file, {encoding: 'utf-8'}));
});

// Compile the sprite
spriter.compile((error, result) => {
    /* Write `result` files to disk (or do whatever with them ...) */
    for (var mode in result) {
        for (var resource in result[mode]) {
            mkdirp.sync(path.dirname(result[mode][resource].path));
            fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
        }
    }
});
