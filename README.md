# Cypress Test Automation - Setup Guide

This repository contains a simple **Node.js** login application along with **Cypress** tests for end-to-end testing.

## Prerequisites

Before you begin, ensure that the following are installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (to clone the repository)

## Getting Started

Follow these steps to get up and running with both the Node.js app and Cypress tests.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/zuhairreaz11/web-automation-cypress.git
cd web-automation-cypress
```

### 2. Install Dependencies
Once inside your project folder, install the necessary dependencies:

```bash
npm install
```

### 3. Run the Node.js Application Locally
To start the Node.js app locally, run the following command:

```bash
node node-app/app.js
```

### 4.  Running Cypress Tests
You can run the Cypress tests either in headless mode or with the Cypress Test Runner UI.

**Option 1: Run Cypress Tests in Headless Mode**

To run the tests without the UI, execute:

```bash
npx cypress run
```

**Option 2: Open Cypress Test Runner UI**

To run the tests without the UI, execute:

```bash
npx cypress open 
```


### 7. Troubleshooting

#### 1.Ensure you are using a compatible version of Node.js
Cypress supports Node.js version 16.x or later.

#### 2. Check for dependency issues
If you encounter issues with dependencies, try deleting the node_modules folder and package-lock.json file, then run npm install again.

#### 3. For more troubleshooting help, refer to Cypress documentation

Cypress Troubleshooting Guide

### Additional Information 
#### 1. How to Create or Modify Tests
To create new tests, add them to the `cypress/e2e` folder. Then create a file like  `spec-name.cy.js`

```bash
describe('Test Name', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
```

#### 2. How to set-up a Configuration File
You can configure Cypress settings by modifying the cypress.json file. For example, you can set the base URL for your application, viewport size, timeouts, and more.

Example cypress.json file:

```bash
{
  "baseUrl": "https://www.example.com",
  "viewportWidth": 1280,
  "viewportHeight": 720
}
```

