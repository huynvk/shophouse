const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  alias: {
    '@emotion/core': toPath('node_modules/@emotion/react'),
    'emotion-theming': toPath('node_modules/@emotion/react'),
  },
};
