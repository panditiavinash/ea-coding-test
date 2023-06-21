const sharedConfig = require("./jest.config");
require('dotenv').config()

module.exports = {
  ...sharedConfig,
  moduleFileExtensions: ["js", "json", "ts"],
  testMatch: ["**/specs/**.ts"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "junit",
        outputName: "test-results.xml",
      },
    ],
  ],
  runner: "groups",
  testTimeout: 30000,
};
