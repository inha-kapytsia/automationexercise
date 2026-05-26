class Header {
  clickLoginLink() {
    cy.get('[href="/login"]').click();

    return this;
  }

  verifyThatLogoutLinkIsAvailable() {
    cy.get(".header-middle").contains(" Logout").should("be.visible");

    return this;
  }

  verifyThatDeleteAccountLinkIsAvailable() {
    cy.get(".header-middle").contains(" Delete Account").should("be.visible");

    return this;
  }

  verifyThatUserNameIsDisplayed() {
    cy.get(".header-middle").contains(userName).should("be.visible");
    return this;
  }
}

export default new Header();
