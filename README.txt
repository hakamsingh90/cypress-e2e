## clone this repo to a local directory
git clone https://github.com/hakamsingh90/cypress-e2e.git

## install the node_modules
npm install

## open cypress
npx cypress open

## There is Two file under cypress/e2e/e2e_tests this path
## I have written code for SSO handle in [cookiess.cy.js] file
## When you will start cypress , then first try to run [bgpLogin.cy.js] file
## If this got failed in login then
## you need to run [cookiess.cy.js] then after run [bgpLogin.cy.js]

