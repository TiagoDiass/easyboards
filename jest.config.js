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
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/components/Board/Board.mock.ts',
    '!src/constants/initial-board.ts',
    '!src/pages/*.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/*',
    '!src/types/*',
    '!src/logic/useOnDragEnd/useOnDragEnd.ts' // we don't test the drag and drop
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'src']
};
