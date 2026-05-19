/// <reference types="cypress" />

describe("Registration", () => {
  it("Create a new account", () => {
    const userName = "Inha123";

    const userEmail =
      "kapytsia.inha+" + Math.floor(Math.random() * 100000) + "@gmail.com";

    const userPassword = "ABCd" + Math.floor(Math.random() * 100000000);

    const userFirstName = "Inha";

    const userLastName = "Kapytsia";

    const userCompany = "QA";

    const userAddress1 = "Test Street 1";

    const userAddress2 = "Test Street 2";

    const userState = "Lvivska";

    const userCity = "Lviv";

    const userZipcode = "79000";

    const userPhoneNumber = "+380931122345";

    //add country

    cy.visit("/");

    cy.url().should("eq", Cypress.config().baseUrl + "/");

    cy.get('[src="/static/images/home/logo.png"]').should("be.visible");

    cy.get('[href="/login"]').click();

    cy.url().should("include", Cypress.config().baseUrl + "/login");

    cy.get("h2").contains("New User Signup!").should("be.visible");

    cy.get('[data-qa="signup-name"]').type(userName);

    cy.get('[data-qa="signup-email"]').type(userEmail);

    cy.get('[data-qa="signup-button"]').click();

    cy.url().should("include", Cypress.config().baseUrl + "/signup");

    cy.get("h2").contains("Enter Account Information").should("be.visible");

    cy.get('[data-qa="name"]').should("have.value", userName);

    cy.get('[data-qa="email"]').should("have.value", userEmail);

    cy.get("#id_gender2").check().should("be.checked");

    cy.get('[data-qa="password"]').type(userPassword);

    cy.get('[data-qa="days"]').select("1").should("have.value", "1");

    cy.get('[data-qa="months"]').select("February").should("have.value", "2");

    cy.get('[data-qa="years"]').select("1999").should("have.value", "1999");

    cy.get("#newsletter").check().should("be.checked");

    cy.get("#optin").check().should("be.checked");

    cy.get('[data-qa="first_name"]')
      .type(userFirstName)
      .should("have.value", userFirstName);

    cy.get('[data-qa="last_name"]').type(userLastName);

    cy.get('[data-qa="company"]').type(userCompany);

    cy.get('[data-qa="address"]').type(userAddress1);

    cy.get('[data-qa="address2"]').type(userAddress2);

    cy.get('[data-qa="country"]')
      .select("Canada")
      .should("have.value", "Canada");

    cy.get('[data-qa="state"]').type(userState);

    cy.get('[data-qa="city"]').type(userCity);

    cy.get('[data-qa="zipcode"]').type(userZipcode);

    cy.get('[data-qa="mobile_number"]').type(userPhoneNumber);

    cy.get('[data-qa="create-account"]').click();

    cy.url().should("include", Cypress.config().baseUrl + "/account_created");

    cy.get("h2").contains("Account Created!").should("be.visible");

    cy.get('[data-qa="continue-button"]').click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");

    cy.get(".header-middle").contains(" Logout").should("be.visible");

    cy.get(".header-middle").contains(" Delete Account").should("be.visible");

    cy.get(".header-middle").contains(userName).should("be.visible");
  });
});
