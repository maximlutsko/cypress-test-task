# cypress-test-task

This project contains automated tests using Cypress.

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** 
- **npm** or **yarn**  

## Installation

1. Clone this repository:  
```
git clone https://github.com/maximlutsko/cypress-test-task.git
```

2. Navigate to the project folder:
```
cd cypress-test-task
```

3. Install dependencies:
```
npm install
```

## Running Tests

Run all tests in headless mode:
```
npx cypress run
```

Run tests in interactive mode (Cypress UI):
```
npx cypress open
```

## Running Specific Tests

Run a single test file:
```
npx cypress run --spec "cypress/e2e/test-file.cy.js"
```

Run tests in a specific browser:
```
npx cypress run --browser chrome
```

## Folder Structure
```
cypress-test-task/
│── cypress/
│   ├── e2e/               # Test files
│   ├── fixtures/          # Test data (JSON files)
│   ├── support/           # Custom Cypress commands
│── cypress.config.js      # Cypress configuration file
│── package.json           # Project dependencies
│── README.md              # Project documentation
```