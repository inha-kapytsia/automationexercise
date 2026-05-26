class MenProducts {
  verifyThatMenProductsPageIsOpened() {
    cy.url().should(
      "include",
      Cypress.config().baseUrl + "/category_products/",
    );

    cy.get("h2").contains("Men - Jeans Products").should("be.visible");

    return this;
  }

  selectSpecificProduct(productName) {
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
    cy.url().should("include", Cypress.config().baseUrl + "/product_details/");

    cy.get(".product-information")
      .find("h2")
      .contains(productName)
      .should("be.visible");

    return this;
  }
}

export default new MenProducts();
