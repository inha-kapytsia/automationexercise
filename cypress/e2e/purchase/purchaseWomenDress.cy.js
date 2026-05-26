/// <reference types="cypress" />
import HomePage from "../../POM/Page/homePage";
import CategoryList from "../../POM/Component/categoryList";
import WomenProducts from "../../POM/Page/womenProducts";
import ProductPage from "../../POM/Page/productPage";
import ShoppingCart from "../../POM/Page/shoppingCart";

describe("Purchase Women Dress", () => {
  it("Open homepage", () => {
    const productName = "Sleeveless Dress";
    HomePage.openHomePage();

    CategoryList.clickOnWomenCategory().clickOnDressSubCategory();

    WomenProducts.verifyThatWomenProductsPageIsOpened()
      .selectSpecificProduct(productName)
      .verifyThatSpecificProductPageIsOpened(productName);

    ProductPage.clickOnAddToCartButton()
      .verifyThatSuccessModalWindowIsOpened()
      .clickOnViewCartLink();

    ShoppingCart.verifyThatShoppingCartPageIsOpened()
      .verifyThatCorrectProductIsAdded(productName)
      .verifyThatQuantityIsCorrect();
  });
});
