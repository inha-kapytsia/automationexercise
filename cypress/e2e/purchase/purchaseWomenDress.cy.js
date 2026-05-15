/// <reference types="cypress" />

describe("Purchase Women Dress", () => {
  it("Open homepage", () => {
    cy.visit("/");

    cy.url().should("eq", Cypress.config().baseUrl + "/");

    cy.get('[src="/static/images/home/logo.png"]').should("be.visible");

    cy.get('[href="#Women"]').should("be.visible").click();

    cy.get("li").find("a").contains("Dress").should("be.visible").click();

    cy.url().should(
      "include",
      Cypress.config().baseUrl + "/category_products/",
    );

    cy.get("h2").contains("Women - Dress Products").should("be.visible");

    cy.get(".single-products")
      .find("p")
      .contains("Sleeveless Dress")
      .should("be.visible")
      .parent()
      .parent()
      .next()
      .find("a")
      .contains("View Product")
      .should("be.visible")
      .click();

    cy.url().should("include", Cypress.config().baseUrl + "/product_details/");

    cy.get(".product-information")
      .find("h2")
      .contains("Sleeveless Dress")
      .should("be.visible");

    cy.get("button").contains("Add to cart").should("be.visible").click();

    cy.get(".modal-content")
      .should("be.visible")
      .contains("Added!")
      .should("be.visible");

    cy.get(".modal-content")
      .find('[href="/view_cart"]')
      .should("be.visible")
      .click();

    cy.url().should("include", Cypress.config().baseUrl + "/view_cart");

    cy.get(".breadcrumbs").find(".active").contains("Shopping Cart");

    cy.get("h4").contains("Sleeveless Dress").should("be.visible");

    cy.get(".cart_quantity").find("button").contains("1").should("be.visible");
  });
});
