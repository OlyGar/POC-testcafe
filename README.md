# PoC-Testcafe
This project was created for bootcampQ3-2021. The automation framework involves technologies as Testcafe, Eslint, Allure reporter, it also includes execution of jobs to be run on Jenkins
## Goals
* Initialize a new npm project and install all required dependencies.
* Organize your fixtures, pages, data and tests following the best practices covered in the Front End Session.
* Use best practices for element selectors (CSS, Testcafe’s Selectors).
* Implement hooks in your fixtures and/or tests as you see fit.
* Implement Testcafe's Roles.
* Select a set of Test Cases as part of your Smoke Testing suite. Use Testcafe’s test medatada to tag these test cases.
* Configure a visual reporter for your tests.
* Create a Testcafe’s config file and set up a higher assertion timeout.
* Create scripts to run each fixture separately.
* Create a script that runs the Login fixture in 2 different browsers at the same time in headless mode.
* Create a new script that only runs tests that are part of the Smoke Testing.
* Document everything in a readme file, describing the steps and how to’s, including the commands to run your test cases.
* Set up eslint or any other static analysis tool to assure code standards.
* Create your own github repository and upload your framework.
* Configure a local Jenkins instance
* Create a Jenkins Job that runs all the scripts in headless mode
* Create a job that runs only the Smoke Testing Suite in headless mode

## Getting started
You need to have the following tools installed on your computer.
Node.js v14.17.3 or higher, npm 7.20.0 or higher. To install both tools you can download them from the [Node.js website](https://nodejs.org/en/)
### Instalation
Clone this repository into your local machine
```
git@github.com:OlyGar/POC-testcafe.git
```
Install dependencies by running
```
npm install
```
## Running the tests
Once you have the environment set up, you can run the tests by running the following commands.

To run all test cases with allure report
```
npm run test-complete
```
To have acces to the Test Report
```
allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report   
```
To run Login fixture in 2 different browsers at the same time in hadlessmode
```
npm run test-headless
```
To run Login Fixture 
```
npm run test-login
```
To run Tasks for today Fixture
```
npm run test-tasks-today
```
To run Projects Fixture
```
npm run test-projects
```
To run Upcoming Tasks Fixture
```
npm run test-tasks-upcoming
```
To run an smoke test:
```
npm run test-smoke
```
To run test in chrome and in safari:
```
npm run test-browsers
```
To run test with concurrency:
```
npm run est-chrome-concurrent
```
To run an all test in headless mode:
```
npm run test-complete-headless
```
To run an smoke test in headless mode:
```
npm run test-smoke-headless
```
To execute Eslint validations
```
npm run lint
```

## References
For more information please refer to:
* [Testcafe](https://testcafe.io/)
* [Jenkins](https://jenkins.io/)
* [ESLint](https://eslint.org/)
