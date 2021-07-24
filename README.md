# POC-testcafe

#Create node project
npm init

#install dependencies
npm install testcafe // For Automation Test cases
npm install testcafe-reporter-allure // For test report
npm install -g allure-commandline  // For test report
npm install eslint --save-dev // To assure code standards
npm i testcafe-reporter-jenkins // Jenkins
npm instal dotenv // to use environment variables

#Create tests folder
tests

#Create new scripts for execution in json file
    "test-headless": "testcafe firefox:headless,chrome:headless ./pom/tests/Login.test.js",
    "test-browsers": "testcafe chrome,safari ./pom/tests",
    "test-complete": "testcafe chrome ./pom/tests --reporter allure",
    "test-tasks-today": "testcafe chrome ./pom/tests/Today.test.js",
    "test-projects": "testcafe chrome ./pom/tests/Project.test.js",
    "test-tasks-upcoming": "testcafe chrome ./pom/tests/Upcoming.test.js",
    "test-login" : "testcafe chrome ./pom/tests/Login.test.js",
    "test-smoke": "testcafe chrome ./pom/tests --test-meta type=smoke",
    "test-chrome-concurrent": "testcafe chrome ./pom/tests --concurrency 3"

#Create pom Folder
pom

#Create data, pages, tests Folders inside pom Folder
data
pages
tests

#Create New files for all te features to test in tests Folder
Login.test.js
Project.test.js
Today.test.js
Upcoming.test.js

#Create New file for all te features to test in pages Folder
LoginPage.js
ProjectPage.js
TodaPage.js
UpcomingPage.js

#Create New file for Constants in data Folder
Constants.js

#Create new file at root level forn enviornment variables
.env

#Define Test Cases according to project

#Execute following script in order to run all test cases with allure report
npm run test-complete

#Execute following instructions to have acces to the Test Report
allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report  

#Execute following script in order to run Login fixture in 2 different browsers at
#the same time in hadlessmode
npm run test-headless

#Execute following script in order to run Login Fixture 
npm run test-login

#Execute following script in order to run Tasks for today Fixture
npm run test-tasks-today

#Execute following script in order to run Projects Fixture
npm run test-projects

#Execute following script in order to run Upcoming Tasks Fixture
npm run test-tasks-upcoming

#Execute following script in order to run an smole test:
npm run test-smoke

#Execute following script in order to run test in chrome and in safari:
npm run test-browsers

#Execute following script in order to run test with concurrency:
npm run est-chrome-concurrent



###################################

#eslint
npx eslint --init   
px eslint .eslintrc.js 

jenkins
npm i testcafe-reporter-jenkins