/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {

    testEnvironment: "jsdom",
    coverageDirectory: "coverage",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*test.{js,jsx,tsx}", "!src/**/*stories.{js,jsx,tsx}",'src/**/*.{js,jsx,ts,tsx}',],
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    coveragePathIgnorePatterns: [
      "<rootDir>/node_modules/",
      ".story.js",
      ".story.tsx",
      "<rootDir>/assetsTransformer.js",
      "<rootDir>/coverage",
      "<rootDir>/src/assets",
      "<rootDir>/src/utils/commandCentermockData.js",
    ],
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/coverage",
      "<rootDir>/src/utils/commandCentermockData.js",
    ],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
      '^.+\\.png$': 'jest-transform-stub',
      // Other transform configurations...
    },
  
    moduleNameMapper: { 
           
      '^/public/(.*)$': '<rootDir>/public/$1',
      '^utils$': '<rootDir>/src/utils',
      '^public$': '<rootDir>/public/',
    },
    verbose: true,
    moduleDirectories: ["node_modules", "src","public"],
  };
  