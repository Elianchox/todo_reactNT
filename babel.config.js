module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['./src'],
        alias: {
          '@assets': './assets',
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
          '@theme': './src/theme',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
