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
          'styled-jsx-css-loader',
        ],
      }
    );

    return config;
  },
};
