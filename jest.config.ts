import type { Config } from '@jest/types';

const untranspiledModulePatterns = [
  '(jest-)?@?react-native',
  '@react-native-community',
  'expo(nent)?',
  '@expo(nent)?/.*',
  'react-navigation',
  '@react-navigation/.*',
  '@unimodules/.*',
  'unimodules',
  'sentry-expo',
  'native-base',
  'react-native-svg',
  'react-native-calendars',
  'react-native-codegen',
  'react-native-countdown-component',
  'react-native-fit-image',
  'react-native-get-random-values',
  'react-native-gradle-plugin',
  'react-native-safe-area-context',
  'react-native-screens',
  'react-native-sortable-list',
  'react-native-swipe-gestures',
  'react-native-web',
];

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  cacheDirectory: '.cache/jest',
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  verbose: true,
  automock: false,
  reporters: ['default', 'github-actions'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  transformIgnorePatterns: [`node_modules/(?!${untranspiledModulePatterns.join('|')})`],
  transform: {},
  coverageReporters: ['json-summary', 'text', 'lcov'],
};

export default config;
