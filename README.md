# Interview Test Cases

## Overview
This repository contains solutions for the interview test cases, including:
- Web testing using WebdriverIO (Test Cases 1 and 2)
- API testing using Postman (Test Case 3)

## Setup and Instructions
### Web Tests
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   
  Run Web Tests:
      npx wdio run .\wdio.conf.js --spec .\test\specs\duckSearch.spec.js
      
####API Tests
The API test (Test Case 3) is implemented using Postman.

Import the Postman collection file located in the api-tests/ folder.


##### Improvements
Enhance error handling for flaky tests.
Optimize locators for better performance in web tests.
Implement CI/CD integration for automated testing.

