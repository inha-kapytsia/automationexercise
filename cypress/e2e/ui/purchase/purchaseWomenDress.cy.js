/// <reference types="cypress" />
import HomePage from "../../../POM/Page/homePage";
import CategoryList from "../../../POM/Component/categoryList";
import WomenProducts from "../../../POM/Page/womenProducts";
import ProductPage from "../../../POM/Page/productPage";
import ShoppingCart from "../../../POM/Page/shoppingCart";
import Data from "../../../support/data";

describe(
  "Purchase Women Dress",
  { tags: ["@purchase", "@womenProducts", "@smoke"] },
  () => {
    it("Open homepage", () => {
      HomePage.openHomePage();

      CategoryList.clickOnWomenCategory().clickOnDressSubCategory();

      WomenProducts.verifyThatWomenProductsPageIsOpened()
        .selectSpecificProduct(Data.womenProductName)
        .verifyThatSpecificProductPageIsOpened(Data.womenProductName);

      ProductPage.clickOnAddToCartButton()
        .verifyThatSuccessModalWindowIsOpened()
        .clickOnViewCartLink();

      ShoppingCart.verifyThatShoppingCartPageIsOpened()
        .verifyThatCorrectProductIsAdded(Data.womenProductName)
        .verifyThatQuantityIsCorrect();
    });
  },
);
