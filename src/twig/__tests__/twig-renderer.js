const TwigRenderer = require('@basalt/twig-renderer');
const path = require('path');
const config = { 
    relativeFrom: __dirname,
    src: {
      roots: [
        path.join(__dirname, "/../"),
      ],
    },
    alterTwigEnv: [{
        file: '../_twig-components/functions/bem.function.php',
        functions: ['bem'],
      }],
    autoescape: false,
    verbose: false,
  };

const testRenderer = new TwigRenderer(config);

module.exports = testRenderer