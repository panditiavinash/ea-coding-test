const sharedConfig = require("./jest.config");

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
      "jest-stare",
      {
        resultDir: "results/jest-stare",
        reportTitle: "API Automation Testing Report",
        additionalResultsProcessors: ["jest-junit"],
        coverageLink: "./index.html",
      },
    ],
  ],
  runner: "groups",
  testTimeout: 30000,
};
