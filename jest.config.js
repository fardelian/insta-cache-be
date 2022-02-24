/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  roots: [
    `${__dirname}/tests`,
    `${__dirname}/src`,
  ],
  coverageDirectory: `${__dirname}/artifacts/coverage`,
  reporters: [
    'default',
    ['jest-stare', {
      'resultDir': 'artifacts/jest-stare',
      'reportTitle': 'Jest Unit Test Report',
      'additionalResultsProcessors': [
        'jest-junit',
      ],
      'coverageLink': '../../coverage/lcov-report/index.html',
    }],
  ],
};
