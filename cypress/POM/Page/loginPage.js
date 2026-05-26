class LoginPage {
  verifyThatLoginPageIsOpened() {
    cy.url().should("include", Cypress.config().baseUrl + "/login");

    return this;
  }

  verifyThatSignUpFormIsOpened() {
    cy.get("h2").contains("New User Signup!").should("be.visible");

    return this;
  }

  enterUserNameInTheForm(userName) {
    cy.get('[data-qa="signup-name"]')
      .type(userName)
      .should("have.value", userName);
    return this;
  }

  enterUserEmailInTheForm(userEmail) {
    cy.get('[data-qa="signup-email"]')
      .type(userEmail)
      .should("have.value", userEmail);

    return this;
  }

  clickOnSignUpButton() {
    cy.get('[data-qa="signup-button"]').click();

    return this;
  }
}

export default new LoginPage();
