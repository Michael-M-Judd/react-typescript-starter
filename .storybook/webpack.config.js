const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      },
      include: path.resolve(__dirname, '../src')
    },
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('react-docgen-typescript-loader'),
      include: path.resolve(__dirname, '../src')
    },
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('@storybook/addon-storysource/loader'),
      include: path.resolve(__dirname, '../src')
    }
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
