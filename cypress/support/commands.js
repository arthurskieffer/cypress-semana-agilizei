// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () =>  {
    //logar usar os cookies
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0rPopjUfg6txBuPsd2lA4oo03lANCWBG6dZDVNiZVhoZqXTiWkVOxRGttaDq0zUq0O9jlkUq%2FyV9rvFPxw7irR84NkYgy8eKtXhTCOsMZBkZB7okO56agMwVth2rt9BJGI3eKNMiFOQjiZ%2BavJAqgxHYTbEqc9kwkH4XnMkpqpLCxfLuPTS5p0GygNJKNfNp0xEAxFixm5kagTxb2PFaUUxmi410tpnkS8qtrd%2F1ASN4vGdmI3QNe%2BKull7DXvEWfnsEO4ZvFIHtwJ28VpJMYvF%2FAQhMd%2BoDiSNqU8QZwmFlYa8J4dgRentAApLnkq8q2k9l%2FSWJ%2Bb55orA0K%2BzFhQe0B%2FU5RTEjjues3AESe9%2FlKNt5YC8oeRyN7mkkRoxFifJJ4%2BXn8ex391jFIZrwrUANc4kcPTTnjkXAV5ldMfoTjBcq1w28m715f62lyhYC0g%3D%3D000349'
    )
})