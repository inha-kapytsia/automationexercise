/// <reference types="cypress" />

describe("Get all products using API", { tags: ["@api"] }, () => {
  it("Get all products", () => {
    cy.request("GET", "/api/productsList").then((response) => {
      expect(response.status).to.eq(200);
      const body = JSON.parse(response.body);
      expect(body.products).to.be.an("array");
      expect(body.products).to.not.be.empty;
      expect(body.products[0]).to.have.property("id");
      expect(body.products[0]).to.have.property("name");
      expect(body.products[0]).to.have.property("price");
    });
  });
});
