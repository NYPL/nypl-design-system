const globImporter = require('node-sass-glob-importer')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register', 
    '@storybook/addon-a11y/register'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    })

    //Remove SVG config from storybook
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().includes('svg')) {
          const test = rule.test
              .toString()
              .replace('svg|', '')
              .replace(/\//g, '')
          return { ...rule, test: new RegExp(test) }
      } else {
          return rule
      }
    })

    config.module.rules.unshift({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    })
    
    config.module.rules.push({
      test: /\.scss$/,
      use: [
          'style-loader',
          {
              loader: 'css-loader',
              options: {
                  importLoaders: 1,
                  modules: true,
              },
          },
          {
              loader: 'sass-loader',
              options: {
                  importer: globImporter(),
              },
          },
      ],
      include: [path.resolve(__dirname, './styles/**/*')],
  })

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
