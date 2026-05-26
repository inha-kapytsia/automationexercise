class CategoryList {
  clickOnMenCategory() {
    cy.get("h4").find("a").contains("Men").should("be.visible").click();

    return this;
  }

  clickOnJeansSubCategory() {
    cy.get("li").find("a").contains("Jeans").should("be.visible").click();

    return this;
  }

  clickOnWomenCategory() {
    cy.get('[href="#Women"]').should("be.visible").click();

    return this;
  }

  clickOnDressSubCategory() {
    cy.get("li").find("a").contains("Dress").should("be.visible").click();

    return this;
  }
}

export default new CategoryList();
