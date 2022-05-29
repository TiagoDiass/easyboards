/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'src']
};
