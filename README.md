# Sortox

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn cypress:open`

Open Cypress to test the app

## Cypress setup

- Require:

  - macOs: +10.9
  - Node.js: 10 or +12

- Installation: `yarn add cypress eslint-plugin-cypress eslint-plugin-chai-friendly eslint eslint-plugin-jest --dev`
- ESLint: `/cypress/.eslintrc.json` (recommended config used)
- Jest
- Typescript: `/cypress/tsconfig.json`
- IDE Integration (VS Code)

  - [Cypress Fixture-IntelliSense](https://marketplace.visualstudio.com/items?itemName=JosefBiehler.cypress-fixture-intellisense)
  - Cypress Fixture-IntelliSense: Supports your cy.fixture() and cy.route(..., fixture:) commands by providing intellisense for existing fixtures.

  - [Cypress Helper](https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper): Various helpers and commands for integration with Cypress.
  - [Cypress Snippets](https://marketplace.visualstudio.com/items?itemName=andrew-codes.cypress-snippets): Useful Cypress code snippets.
  - [Open Cypress](https://marketplace.visualstudio.com/items?itemName=tnrich.vscode-extension-open-cypress): Allows you to open Cypress specs and single it() blocks directly from VS Code.
  - [Test Utils](https://marketplace.visualstudio.com/items?itemName=chrisbreiding.test-utils): Easily add or remove .only and .skip modifiers with keyboard shortcuts or the command palette.
