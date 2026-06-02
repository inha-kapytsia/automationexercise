class SignUpPage {
  verifyThatSignUpPageIsOpened() {
    cy.step("Verify that Signup Page is Opened");
    cy.url().should("include", Cypress.config().baseUrl + "/signup");

    cy.step("Verify that title is correct");
    cy.get("h2").contains("Enter Account Information").should("be.visible");

    return this;
  }

  verifyThatNameFieldHasCorrectValue(userName) {
    cy.step("Verify that Name field has correct value");
    cy.get('[data-qa="name"]').should("have.value", userName);

    return this;
  }

  verifyThatEmailFieldHasCorrectValue(userEmail) {
    cy.step("Verify that Email field has correct value");
    cy.get('[data-qa="email"]').should("have.value", userEmail);

    return this;
  }

  checkTitleRadioButton() {
    cy.step("Select gender");
    cy.get("#id_gender2").check().should("be.checked");

    return this;
  }

  setUserPassword(userPassword) {
    cy.step("Set user password");
    cy.get('[data-qa="password"]')
      .type(userPassword, { log: false })
      .should((el$) => {
        if (el$.val() !== userPassword) {
          throw new Error("Different value of typed password");
        }
      });

    return this;
  }

  setTheDateOfBirth(day, month, year) {
    cy.step("Set user Date of Birth");
    cy.get('[data-qa="days"]').select(day).should("have.value", day);

    const monthValues = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };

    const value = monthValues[month];
    if (value) {
      cy.get('[data-qa="months"]').select(month).should("have.value", value);
    }

    cy.get('[data-qa="years"]').select(year).should("have.value", year);

    return this;
  }

  checkNewsletterCheckbox() {
    cy.step("Check the newsletter checkbox");
    cy.get("#newsletter").check().should("be.checked");
    return this;
  }

  checkSpecialOffersCheckbox() {
    cy.step("Check the special offers checkbox");
    cy.get("#optin").check().should("be.checked");
    return this;
  }

  enterFirstName(userFirstName) {
    cy.step("Enter First name");
    cy.get('[data-qa="first_name"]')
      .type(userFirstName)
      .should("have.value", userFirstName);

    return this;
  }

  enterLastName(userLastName) {
    cy.step("Enter Last name");
    cy.get('[data-qa="last_name"]')
      .type(userLastName)
      .should("have.value", userLastName);

    return this;
  }

  enterCompany(userCompany) {
    cy.step("Enter a Company");
    cy.get('[data-qa="company"]')
      .type(userCompany)
      .should("have.value", userCompany);

    return this;
  }

  enterAddress(userAddress1) {
    cy.step("Enter an Address");
    cy.get('[data-qa="address"]')
      .type(userAddress1)
      .should("have.value", userAddress1);

    return this;
  }

  enterAddress2(userAddress2) {
    cy.step("Enter an Address 2");
    cy.get('[data-qa="address2"]')
      .type(userAddress2)
      .should("have.value", userAddress2);

    return this;
  }

  selectCountry(userCountry) {
    cy.step("Select a Country");
    cy.get('[data-qa="country"]')
      .select(userCountry)
      .should("have.value", userCountry);

    return this;
  }

  enterState(userState) {
    cy.step("Enter a State");
    cy.get('[data-qa="state"]').type(userState).should("have.value", userState);

    return this;
  }

  enterCity(userCity) {
    cy.step("Enter a City");
    cy.get('[data-qa="city"]').type(userCity).should("have.value", userCity);
    return this;
  }

  enterZipcode(userZipcode) {
    cy.step("Enter a Zipcode");
    cy.get('[data-qa="zipcode"]')
      .type(userZipcode)
      .should("have.value", userZipcode);

    return this;
  }

  enterMobileNumber(userPhoneNumber) {
    cy.step("Enter a Mobile Number");
    cy.get('[data-qa="mobile_number"]')
      .type(userPhoneNumber)
      .should("have.value", userPhoneNumber);

    return this;
  }

  clickOnCreateAccountButton() {
    cy.step("Click on Create Account button");
    cy.get('[data-qa="create-account"]').click();

    return this;
  }

  verifyThatAccountCreatedPageIsOpened() {
    cy.step("Verify that Account Created Page is opened");
    cy.url().should("include", Cypress.config().baseUrl + "/account_created");

    cy.step("Verify that success message is displayed");
    cy.get("h2").contains("Account Created!").should("be.visible");

    return this;
  }

  clickOnContinueButton() {
    cy.step("Click on Continue button");
    cy.get('[data-qa="continue-button"]').click();

    return this;
  }

  saveUserInToDB(email, password, username) {
    cy.writeFile("cypress/fixtures/user.json", {
      createdUserEmail: email,
      createdUserPassword: password,
      createdUserName: username,
    });

    return this;
  }
}

export default new SignUpPage();
