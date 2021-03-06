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
## Project Structure 
```
├── ...
├── api_testing            # Main API testing folder
├── pom                    # Main Page Object Model folder
│   ├── data               # Data providers
│   ├── pages              # All pages located here.
│   ├── Tests              # Test files ( One fixture per file located here)
│   └── ...                
└── .eslintrc.json         # Eslint Configuration file
└── .env                   # Environment variables
└── .testcaferc.json       # Testcafe Configuration file
└── package.json           # Project dependencies
```
## Getting started Pre-requisites
You need to have the following tools installed on your computer.
Node.js v14.17.3 or higher, npm 7.20.0 or higher. To install both tools you can download them from the [Node.js website](https://nodejs.org/en/)
### Instalation
Clone this repository into your local machine:
```
git@github.com:OlyGar/POC-testcafe.git
```
Install dependencies by running:
```
npm install
```
Create a .env file with the following variables:
```
BASE_URL=https://todoist.com
STANDARD_USER=your@email.com
STANDARD_USER_PASSWORD=your_password
```
## Running the tests
Once you have the environment set up, you can run the tests by running the following commands.

To run all test cases
```
npm run test-all
```
To run all test cases with allure report
```
npm run test-complete-report
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
To run Tasks Fixture
```
npm run test-tasks
```
To run Projects Fixture
```
npm run test-projects
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
* [JavaScript](https://www.javascript.com/)
* [ESLint](https://eslint.org/)
* [Evidence for Jenkins jobs] (https://drive.google.com/file/d/1jeib-GXNYggU7J6QJREFDqEGJCjSBgyL/view?usp=sharing)
* [Evidence for Jenkins jobs with reporter] (https://drive.google.com/file/d/1-EdVokSjKjDjqh3fLgC5eVyYWQygsaAx/view?usp=sharing)
