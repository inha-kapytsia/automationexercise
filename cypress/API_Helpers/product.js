class GetProduct {
  getAvailableProduct(productName) {
    cy.request({
      method: "POST",
      url: "/api/searchProduct",
      form: true,
      body: {
        search_product: productName,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      const body = JSON.parse(response.body);

      expect(body.products[0].name.toLowerCase()).contains(
        productName.toLowerCase(),
      );
    });

    return this;
  }
}

export default new GetProduct();
