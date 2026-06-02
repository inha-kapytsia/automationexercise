class ShoppingCart {
  verifyThatShoppingCartPageIsOpened() {
    cy.step("Verify that Shopping Cart Page is opened");
    cy.url().should("include", Cypress.config().baseUrl + "/view_cart");

    cy.step("Verify that active breadcrumbs is Shopping Cart");
    cy.get(".breadcrumbs").find(".active").contains("Shopping Cart");
    return this;
  }

  verifyThatCorrectProductIsAdded(productName) {
    cy.step("Verify that correct Product is added to the cart");
    cy.get("h4").contains(productName).should("be.visible");

    return this;
  }

  verifyThatQuantityIsCorrect() {
    cy.step("Verify that correct quantity of Product is added to the cart");
    cy.get(".cart_quantity").find("button").contains("1").should("be.visible");

    return this;
  }
}
export default new ShoppingCart();
