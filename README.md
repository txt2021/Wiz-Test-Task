# Playwright Automation Framework for Wiz Team Homework

A UI automation framework built with **Playwright + TypeScript** using the **Page Object Model (POM)** design pattern.

## Tech Stack

- Playwright
- TypeScript
- Allure Report
- GitHub Actions
- GitHub Pages

## Scenarious

Scenarious 1 and 4 both related to login, so both are located in the login.spec.ts

Scenario 2 is located in the cart.spec.ts

Scenario 3 is located in the checkout.spec.ts


## Installation

Clone the repository

```bash
git clone < https://github.com/txt2021/Wiz-Test-Task.git >
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Environment Variables

Create a `.env` file in the project root.


---

## Running Tests

Run all tests

```bash
npm run test-all   
```

Run in headed mode

```bash
npx run test-all --headed
```

Run a specific test 

Login:

```bash
npm run test-login
```

Cart:

```bash
npm run test-cart
```

Checkout:

```bash
npm run test-login
```

---


## Allure Report

Run tests

```bash
npm run test-all
```

Generate report

```bash
npm run generate-report
```

Open report

```bash
npm run open-report
```

---

## CI/CD

The project includes a GitHub Actions pipeline that automatically:

- installs dependencies
- installs Playwright browsers
- executes Playwright tests
- generates Allure Report
- publishes the report to GitHub Pages

The pipeline is triggered on every push and pull request.

---

## Author

Tetiana Chuiasova