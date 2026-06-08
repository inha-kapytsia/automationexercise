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

import HomePage from "../POM/Page/homePage";
import Header from "../POM/Component/header";
import LoginPage from "../POM/Page/loginPage";

Cypress.Commands.add("consoleLog", (somethingToLog) => {
  cy.log("----------------");
  cy.log(somethingToLog);

  cy.log("----------------");
});

Cypress.Commands.add("loginAsUser", () => {
  HomePage.openHomePage();

  Header.clickLoginLink();

  cy.env(["EMAIL"]).then(({ EMAIL }) => {
    LoginPage.enterUserEmailInTheLoginForm(EMAIL);
  });

  cy.env(["PASSWORD"]).then(({ PASSWORD }) => {
    LoginPage.enterUserPasswordInTheLoginForm(PASSWORD);
  });

  LoginPage.clickOnLoginButton();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
