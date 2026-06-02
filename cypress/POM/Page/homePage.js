class HomePage {
  openHomePage() {
    cy.step("Open the Home Page");
    cy.visit("/");

    cy.step("Verify that correct url is opened");
    cy.url().should("eq", Cypress.config().baseUrl + "/");

    return this;
  }

  verifyThatHomePageIsOpened() {
    cy.step("Verify that logo is present");
    cy.get('[src="/static/images/home/logo.png"]').should("be.visible");

    return this;
  }
}

export default new HomePage();
