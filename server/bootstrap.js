require('ignore-styles');

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ['@babel/env', '@babel/preset-react'],
  plugins: [
    [
      "@babel/plugin-proposal-class-properties"
    ]
  ]
});

require('./index');