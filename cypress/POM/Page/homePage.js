class HomePage {
  openHomePage() {
    cy.visit("/");

    cy.url().should("eq", Cypress.config().baseUrl + "/");

    return this;
  }

  verifyThatHomePageIsOpened() {
    cy.get('[src="/static/images/home/logo.png"]').should("be.visible");

    return this;
  }
}

export default new HomePage();
