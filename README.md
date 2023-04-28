# Expense Tracker App

This is a simple expense tracker app built with React, where users can input their expenses and view them in a list.

## Prerequisites

* Node.js (version 12 or higher)

## Installation

1. Open your terminal and clone the repository from GitHub: `git clone https://github.com/partelsandra/user-manager`
2. Navigate to the project directory: `cd expenses`
3. Install the dependencies: `npm install`

## Run the App

1. Start the development server: `npm run start`
2. Open your browser and visit http://localhost:3000 to see the app in action.

## Run the Tests

1. Start the development server: `npm run start`
2. Run the tests: `npm test`
1. Visit http://localhost:3000
2. Get the `#username` input element
3. Type `John` into the `#username` input element
4. Get the `#age` input element
5. Type `25` into the `#age` input element
6. Get the form element
7. Submit the form
8. Check that the text `John - 25 years old` exists on the page
9. Check that a new list item element was added to the page

- **Description:** should display an error message when the form is submitted with invalid input
- **Outcome:** passed

**Test Steps:**

1. Visit http://localhost:3000
2. Get the `#username` input element
3. Type `test` into the `#username` input element
4. Get the `#age` input element
5. Type `0` into the `#age` input element
6. Get the form element
7. Submit the form
8. Check that the text `Invalid age` exists on the page
9. Check that the text `Please enter a valid age (> 0)` exists on the page
10. Check that a new error message element was added to the page


