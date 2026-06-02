class CategoryList {
  clickOnMenCategory() {
    cy.step("Open Men Category");
    cy.get("h4").find("a").contains("Men").should("be.visible").click();

    return this;
  }

  clickOnJeansSubCategory() {
    cy.step("Select Jeans Subcategory");
    cy.get("li").find("a").contains("Jeans").should("be.visible").click();

    return this;
  }

  clickOnWomenCategory() {
    cy.step("Open Women Category");
    cy.get('[href="#Women"]').should("be.visible").click();

    return this;
  }

  clickOnDressSubCategory() {
    cy.step("Select Dress Subcategory");
    cy.get("li").find("a").contains("Dress").should("be.visible").click();

    return this;
  }
}

export default new CategoryList();
