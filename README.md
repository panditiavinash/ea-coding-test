# ea-coding-test

Pre-requisites for setting up this repo are
    - Node.js
    - npm or yarn

Commands to run the tests:

    - Clone this repository from Git Hub
    - Run the any of the following commands: This command will install all the dependencies that are mentioned in package.json
        - npm install 
        - yarn install
    - Inside "package.json" file we can find "scripts" sections and we can use any of the tags here to run the tests. Any of the following commands can be used to run the tests:
        npm commands: 
            - npm run test
            - npm run test-stare-html-report
            - npm run test-html-reporter
        yarn commands:
            - yarn run test
            - yarn run test-stare-html-report
            - yarn run test-html-reporter            

    - test: This tag will generate a "junit" report in the root folder
    - test-stare-html-report: This tag will generate a html report in the root folder, this will use   "jest-stare" node.js library to generate report
    - test-html-reporter: This tag as well generated a html report in the root folder, this will use "jest-html-reporter" library to generate report

Tests are written inside "test/specs" folder

Once the tests are run, "apiLogs.txt" will be generated inside the root folder and this file will have the request and response logs of all the tests.

This framework will generate an html report once all the tests are run.