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
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "API Automation Test Report",
        append: false,
        includeConsoleLog: true,
        outputPath: "test-report/index.html",
      },
    ],
  ],
  runner: "groups",
  testTimeout: 30000,
};
