/// <reference types="cypress" />

import moment from "moment";
import HomePage from "../../POM/Page/homePage";
import CategoryList from "../../POM/Component/categoryList";
import MenProducts from "../../POM/Page/menProducts";
import ProductPage from "../../POM/Page/productPage";
import ShoppingCart from "../../POM/Page/shoppingCart";
import Data from "../../support/data";

describe(
  "Purchase Men Jeans",
  { tags: ["@purchase", "@menProducts", "@smoke", "@current"] },
  () => {
    it("Open home page", () => {
      HomePage.openHomePage();

      CategoryList.clickOnMenCategory().clickOnJeansSubCategory();

      MenProducts.verifyThatMenProductsPageIsOpened()
        .selectSpecificProduct(Data.menProductName)
        .verifyThatSpecificProductPageIsOpened(Data.menProductName);

      ProductPage.clickOnAddToCartButton()
        .verifyThatSuccessModalWindowIsOpened()
        .clickOnViewCartLink();

      ShoppingCart.verifyThatShoppingCartPageIsOpened()
        .verifyThatCorrectProductIsAdded(Data.menProductName)
        .verifyThatQuantityIsCorrect();
    });
  },
);
