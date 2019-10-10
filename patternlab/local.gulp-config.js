/* globals module */

(() => {
  const themeDir = './';
  const paths = {
    // js: `${themeDir}/components/_patterns/**/*.js`,
    js: `${themeDir}/components/_patterns/**/*.js`,
    dist_js: `${themeDir}/dist`,
    // sass: themeDir,
    // sass: `../src/styles/**/*.scss`,
    icons: `${themeDir}/images/icons/src`,
    img: [
      `${themeDir}/images/**/*`,
      `${themeDir}/components/_patterns/**/*.{jpg, gif, png, svg}`,
    ],
    dist_css: `${themeDir}/dist/css`,
    pattern_lab: `${themeDir}/pattern-lab/public`,
    theme_images: `${themeDir}/images`,
    logo: `${themeDir}/logo.png`,
  };

  module.exports = {
    host: 'http://127.0.0.1:8888/',
    themeDir,
    paths,
    sassOptions: {
      outputStyle: 'expanded',
      eyeglass: {
        enableImportOnce: false,
      },
    },
    cssConfig: {
      enabled: true,
      // src: `${themeDir}/components/_patterns/**/*.scss`,
      src: `../src/styles/**/*.scss`,
      dest: `${themeDir}/dist/`,
      flattenDestOutput: true,
      lint: {
        enabled: false,
        failOnError: true,
      },
      sourceComments: false,
      sourceMapEmbed: false,
      outputStyle: 'expanded',
      autoPrefixerBrowsers: ['last 2 versions', 'IE >= 11'],
      // includePaths: ['./node_modules'],
      // includePaths: ['./node_modules'],
      includePaths: ['./node_modules', 'node_modules/breakpoint-sass/stylesheets/', './node_modules/normalize.css'],
      // includePaths: ['node_modules', 'node_modules/breakpoint-sass/stylesheets', 'node_modules/normalize.css'],
    },
    iconConfig: {
      mode: {
        symbol: {
          // symbol mode to build the SVG
          dest: 'dist/img/sprite', // destination foldeer
          sprite: 'sprite.svg', // sprite name
          example: false, // Don't build sample page
        },
      },
      svg: {
        xmlDeclaration: false, // strip out the XML attribute
        doctypeDeclaration: false, // don't include the !DOCTYPE declaration
      },
    },
    patternLab: {
      enabled: true,
      configFile: `${themeDir}config.yml`,
      watchedExtensions: ['twig', 'json', 'yaml', 'yml', 'md', 'jpg', 'jpeg', 'png'],
      scssToYAML: [
        {
          // src: `${themeDir}/components/_patterns/00-base/01-colors/_color-vars.scss`,
          src: `../src/styles/00-base/01-colors/_color-vars.scss`,
          // dest: `${themeDir}/components/_patterns/00-base/01-colors/colors.yml`,
          dest: `../src/twig/_patterns/00-base/01-colors/colors.yml`,
          lineStartsWith: '$',
          allowVarValues: false,
        },
      ],
    },
    browserSync: {
      enabled: true,
      baseDir: './',
      startPath: 'pattern-lab/public/',
      // Uncomment below if using a specific local url
      // domain: 'emulsify.dev',
      notify: false,
      openBrowserAtStart: false,
      reloadOnRestart: true,
      ui: false,
      // Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
      // ghostMode: false to turn all off
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: true,
        location: true
      }
    },
    wpt: {
      // WebPageTest API key https://www.webpagetest.org/getkey.php
      // key:
    },
    pa11y: {
      includeNotices: false,
      includeWarnings: false,
      ignore: [
        'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.2',
        'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
        'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
        'WCAG2AA.Principle3.Guideline3_2.3_2_1.G107',
      ],
      hideElements: '',
      rootElement: null,
      rules: [],
      standard: 'WCAG2AA',
      wait: 250,
      actions: [],
    },
  };
})();
