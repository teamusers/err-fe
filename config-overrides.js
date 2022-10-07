/* eslint-disable import/no-extraneous-dependencies */
const { alias } = require("react-app-rewire-alias");
const webpack = require("webpack");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets/",
    "@components": "src/components/",
    "@constants": "src/constants/",
    "@pages": "src/pages/",
  })(config);

  config.resolve.fallback = {
    ...config?.resolve?.fallback,
    process: require.resolve("process/browser"),
    zlib: require.resolve("browserify-zlib"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util"),
    buffer: require.resolve("buffer"),
    assert: require.resolve("assert"),
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ];

  return config;
};
