module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~atoms': './src/components/atoms',
          '~features': './src/features',
          '~navigation': './src/navigation',
          '~state': './src/state',
          '~styles': './src/styles',
          '~store': './src/store',
          '~models': './src/models',
          '~constants': './src/constants',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
