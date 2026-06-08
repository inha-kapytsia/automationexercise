/// <reference types="cypress" />
import Product from "../../API_Helpers/product";

describe("Search product using API", { tags: ["@api"] }, () => {
  it("Search product", () => {
    const productName = "top";
    Product.getAvailableProduct(productName);

    const productName2 = "Men Tshirt";
    Product.getAvailableProduct(productName2);
  });
});
