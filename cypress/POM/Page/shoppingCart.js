class ShoppingCart {
  verifyThatShoppingCartPageIsOpened() {
    cy.url().should("include", Cypress.config().baseUrl + "/view_cart");

    cy.get(".breadcrumbs").find(".active").contains("Shopping Cart");
    return this;
  }

  verifyThatCorrectProductIsAdded(productName) {
    cy.get("h4").contains(productName).should("be.visible");

    return this;
  }

  verifyThatQuantityIsCorrect() {
    cy.get(".cart_quantity").find("button").contains("1").should("be.visible");

    return this;
  }
}
export default new ShoppingCart();
