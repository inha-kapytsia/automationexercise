/// <reference types="cypress" />

import moment from "moment";
import HomePage from "../../POM/Page/homePage";
import CategoryList from "../../POM/Component/categoryList";
import MenProducts from "../../POM/Page/menProducts";
import ProductPage from "../../POM/Page/productPage";
import ShoppingCart from "../../POM/Page/shoppingCart";

describe("Purchase Men Jeans", () => {
  it("Open home page", () => {
    const productName = "Grunt Blue Slim Fit Jeans";

    HomePage.openHomePage();

    CategoryList.clickOnMenCategory().clickOnJeansSubCategory();

    MenProducts.verifyThatMenProductsPageIsOpened()
      .selectSpecificProduct(productName)
      .verifyThatSpecificProductPageIsOpened(productName);

    ProductPage.clickOnAddToCartButton()
      .verifyThatSuccessModalWindowIsOpened()
      .clickOnViewCartLink();

    ShoppingCart.verifyThatShoppingCartPageIsOpened()
      .verifyThatCorrectProductIsAdded(productName)
      .verifyThatQuantityIsCorrect();

    const number = moment().unix().toString();

    console.log(number);
  });
});
