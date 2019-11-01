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
        file: './bem_for_test.function.php',
        functions: ['bem'],
      }],
    autoescape: false,
    verbose: false,
  };

const testRenderer = new TwigRenderer(config);

module.exports = testRenderer