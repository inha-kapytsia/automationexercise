class Header {
  verifyThatLoginLinkIsAvailable() {
    cy.step("Verify that Login is available in the header");
    cy.get(".header-middle").contains(" Signup / Login").should("be.visible");

    return this;
  }

  clickLoginLink() {
    cy.step("Click Login in the Header");
    cy.get('[href="/login"]').click();

    return this;
  }

  verifyThatLogoutLinkIsAvailable() {
    cy.step("Verify that Logout is available in the header");
    cy.get(".header-middle").contains(" Logout").should("be.visible");

    return this;
  }

  clickLogoutLink() {
    cy.step("Click Logout link in the header");
    cy.get('[href="/logout"]').click();

    return this;
  }

  verifyThatDeleteAccountLinkIsAvailable() {
    cy.step("Verify that Delete Account is available in the header");
    cy.get(".header-middle").contains(" Delete Account").should("be.visible");

    return this;
  }

  verifyThatUserNameIsDisplayed(userName) {
    cy.step("Verify that " + userName + " is displayed in the header");
    cy.get(".header-middle").contains(userName).should("be.visible");
    return this;
  }
}

export default new Header();
