module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@testing-library|@react-native-community|@unimodules|expo(nent)?|expo-.*|@expo(nent)?/.*|react-clone-referenced-element|react-native-svg|@sentry/.*)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
} 