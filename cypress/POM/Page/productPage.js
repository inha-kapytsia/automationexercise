class ProductPage {
  clickOnAddToCartButton() {
    cy.get("button").contains("Add to cart").should("be.visible").click();

    return this;
  }

  verifyThatSuccessModalWindowIsOpened() {
    cy.get(".modal-content")
      .should("be.visible")
      .contains("Added!")
      .should("be.visible");

    return this;
  }

  clickOnViewCartLink() {
    cy.get(".modal-content")
      .find('[href="/view_cart"]')
      .should("be.visible")
      .click();

    return this;
  }
}

export default new ProductPage();
