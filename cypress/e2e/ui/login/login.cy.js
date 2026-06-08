/// <reference types="cypress" />
import HomePage from "../../../POM/Page/homePage";
import Header from "../../../POM/Component/header";
import LoginPage from "../../../POM/Page/loginPage";
import Data from "../../../support/data";

describe("Login to account", { tags: ["@login", "@smoke"] }, () => {
  it("Login to account", () => {
    HomePage.openHomePage().verifyThatHomePageIsOpened();

    Header.clickLoginLink();

    LoginPage.verifyThatLoginPageIsOpened().verifyThatLoginFormIsOpened();

    cy.env(["EMAIL"]).then(({ EMAIL }) => {
      LoginPage.enterUserEmailInTheLoginForm(EMAIL);
    });

    cy.env(["PASSWORD"]).then(({ PASSWORD }) => {
      LoginPage.enterUserPasswordInTheLoginForm(PASSWORD);
    });

    LoginPage.clickOnLoginButton();

    HomePage.verifyThatHomePageIsOpened();

    Header.verifyThatLogoutLinkIsAvailable().verifyThatDeleteAccountLinkIsAvailable();

    cy.env(["USER_NAME"]).then(({ USER_NAME }) => {
      Header.verifyThatUserNameIsDisplayed(USER_NAME);
    });
  });
});
