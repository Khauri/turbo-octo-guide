module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: config => {
    // This fixes the problem, but not sure if it should be default in the config
    config.module.rules.unshift({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  }
}