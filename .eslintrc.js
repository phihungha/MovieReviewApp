module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:relay/recommended'],
  plugins: ['relay'],
  rules: {
    'relay/generated-flow-types': 'off',
  },
  ignorePatterns: ['**/__generated__/**'],
};
