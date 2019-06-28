const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const PATHS = {
  src: path.resolve('./src'),
  dist: path.resolve('./dist'),
  nodeModules: path.resolve('./node_modules')
};

module.exports = {
  components: './src/index.ts',
  outputPath: './build/playroom',

  // Optional:
  title: 'Coinsquare Component Library',
  frameComponent: './playroom/FrameComponent.tsx',
  widths: [375, 768, 1224],
  port: 6002,
  openBrowser: true,
  exampleCode: `
      <AppBar/>
      <Button style={{ margin: '10px' }}>
        button
      </Button>
      <Typography variant="body1">Use this interactive playground with our components to build out a prototype!</Typography>
    `,
  webpackConfig: () => {
    return {
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: { loader: require.resolve('react-docgen-typescript-loader') }
          },
          {
            test: /\.(png|gif|jpe?g)$/i,
            loader: isDev
              ? 'url-loader?limit=10000'
              : 'file-loader?outputPath=assets/&name=[name].[ext]'
          },
          {
            test: /\.(svg|mp4)$/i,
            loader: isDev ? 'url-loader' : 'file-loader',
            query: {
              limit: 10000,
              outputPath: 'assets/'
            }
          },
          {
            test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            include: [PATHS.src, PATHS.nodeModules],
            loader: isDev ? 'url-loader' : 'file-loader',
            query: {
              limit: 10000,
              outputPath: 'assets/'
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.ts', '.tsx']
      }
    };
  }
};
