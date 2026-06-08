/// <reference types="cypress" />

import HomePage from "../../../POM/Page/homePage";
import Header from "../../../POM/Component/header";
import LoginPage from "../../../POM/Page/loginPage";
import SignUpPage from "../../../POM/Page/signUpPage";
import Data from "../../../support/data";

describe("Registration", () => {
  it(
    "Create a new account",
    { tags: ["@registration", "@login", "@smoke"] },
    () => {
      HomePage.openHomePage().verifyThatHomePageIsOpened();

      Header.clickLoginLink();

      LoginPage.verifyThatLoginPageIsOpened()
        .verifyThatSignUpFormIsOpened()
        .enterUserNameInTheForm(Data.userName)
        .enterUserEmailInTheForm(Data.userEmail)
        .clickOnSignUpButton();

      SignUpPage.verifyThatSignUpPageIsOpened()
        .verifyThatNameFieldHasCorrectValue(Data.userName)
        .verifyThatEmailFieldHasCorrectValue(Data.userEmail)
        .checkTitleRadioButton()
        .setUserPassword(Data.userPassword)
        .setTheDateOfBirth("1", "October", "1999")
        .checkNewsletterCheckbox()
        .checkSpecialOffersCheckbox()
        .enterFirstName(Data.userFirstName)
        .enterLastName(Data.userLastName)
        .enterCompany(Data.userCompany)
        .enterAddress(Data.userAddress1)
        .enterAddress2(Data.userAddress2)
        .selectCountry(Data.userCountry)
        .enterState(Data.userState)
        .enterCity(Data.userCity)
        .enterZipcode(Data.userZipcode)
        .enterMobileNumber(Data.userPhoneNumber)
        .clickOnCreateAccountButton()
        .verifyThatAccountCreatedPageIsOpened()
        .saveUserInToDB(Data.userEmail, Data.userPassword, Data.userName)
        .clickOnContinueButton();

      HomePage.verifyThatHomePageIsOpened();

      Header.verifyThatLogoutLinkIsAvailable()
        .verifyThatDeleteAccountLinkIsAvailable()
        .verifyThatUserNameIsDisplayed(Data.userName)
        .clickLogoutLink()
        .verifyThatLoginLinkIsAvailable();

      LoginPage.verifyThatLoginPageIsOpened();
    },
  );

  it("Login to newly created account", () => {
    HomePage.openHomePage().verifyThatHomePageIsOpened();

    Header.clickLoginLink();

    LoginPage.verifyThatLoginPageIsOpened()
      .verifyThatLoginFormIsOpened()
      .enterUserEmailInTheLoginForm(Data.userEmail)
      .enterUserPasswordInTheLoginForm(Data.userPassword)
      .clickOnLoginButton();

    HomePage.verifyThatHomePageIsOpened();

    Header.verifyThatLogoutLinkIsAvailable()
      .verifyThatDeleteAccountLinkIsAvailable()
      .verifyThatUserNameIsDisplayed(Data.userName);
  });
});
