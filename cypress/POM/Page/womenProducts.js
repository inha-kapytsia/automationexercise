class WomenProducts {
  verifyThatWomenProductsPageIsOpened() {
    cy.step("Verify that Women Products Page is opened");
    cy.url().should(
      "include",
      Cypress.config().baseUrl + "/category_products/",
    );
    cy.step("Verify that title is correct");
    cy.get("h2").contains("Women - Dress Products").should("be.visible");

    return this;
  }

  selectSpecificProduct(productName) {
    cy.step("Select specific Product");
    cy.get(".single-products")
      .find("p")
      .contains(productName)
      .should("be.visible")
      .parent()
      .parent()
      .next()
      .find("a")
      .contains("View Product")
      .should("be.visible")
      .click();

    return this;
  }

  verifyThatSpecificProductPageIsOpened(productName) {
    cy.step("Verify that specific Product Page is opened");
    cy.url().should("include", Cypress.config().baseUrl + "/product_details/");

    cy.step("Verify that Product is correct");
    cy.get(".product-information")
      .find("h2")
      .contains(productName)
      .should("be.visible");

    return this;
  }
}

export default new WomenProducts();
