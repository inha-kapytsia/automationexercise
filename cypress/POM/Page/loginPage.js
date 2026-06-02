class LoginPage {
  verifyThatLoginPageIsOpened() {
    cy.step("Verify that Login Page is opened");
    cy.url().should("include", Cypress.config().baseUrl + "/login");

    return this;
  }

  verifyThatSignUpFormIsOpened() {
    cy.step("Verify that Sign Up Form is opened");
    cy.get("h2").contains("New User Signup!").should("be.visible");

    return this;
  }

  verifyThatLoginFormIsOpened() {
    cy.step("Verify that Login Form is opened");
    cy.get("h2").contains("Login to your account").should("be.visible");

    return this;
  }

  enterUserEmailInTheLoginForm(userEmail) {
    cy.step("Enter user email in the field");
    cy.get('[data-qa="login-email"]')
      .type(userEmail)
      .should("have.value", userEmail);
    return this;
  }

  enterUserPasswordInTheLoginForm(userPassword) {
    cy.step("Enter user password in the field");
    cy.get('[data-qa="login-password"]')
      .type(userPassword)
      .should("have.value", userPassword);
    return this;
  }

  clickOnLoginButton() {
    cy.step("Click on Login button");
    cy.get('[data-qa="login-button"]').click();

    return this;
  }

  enterUserNameInTheForm(userName) {
    cy.step("Enter user name in the field");
    cy.get('[data-qa="signup-name"]')
      .type(userName)
      .should("have.value", userName);
    return this;
  }

  enterUserEmailInTheForm(userEmail) {
    cy.step("Enter user email in the field");
    cy.get('[data-qa="signup-email"]')
      .type(userEmail)
      .should("have.value", userEmail);

    return this;
  }

  clickOnSignUpButton() {
    cy.step("Click on Signup button");
    cy.get('[data-qa="signup-button"]').click();

    return this;
  }
}

export default new LoginPage();
