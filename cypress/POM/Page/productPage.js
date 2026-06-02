class ProductPage {
  clickOnAddToCartButton() {
    cy.step("Click on Add to cart button");
    cy.get("button").contains("Add to cart").should("be.visible").click();

    return this;
  }

  verifyThatSuccessModalWindowIsOpened() {
    cy.step("Verify that Success modal window is opened");
    cy.get(".modal-content")
      .should("be.visible")
      .contains("Added!")
      .should("be.visible");

    return this;
  }

  clickOnViewCartLink() {
    cy.step("Click on View Cart link");
    cy.get(".modal-content")
      .find('[href="/view_cart"]')
      .should("be.visible")
      .click();

    return this;
  }
}

export default new ProductPage();
