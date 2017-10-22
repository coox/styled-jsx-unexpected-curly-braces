const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]',
            },
          },
          'babel-loader',
          path.resolve(__dirname, './styled-jsx-css-loader'),
        ],
      }
    );

    return config;
  },
};
