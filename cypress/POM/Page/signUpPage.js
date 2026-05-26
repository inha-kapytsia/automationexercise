class SignUpPage {
  verifyThatSignUpPageIsOpened() {
    cy.url().should("include", Cypress.config().baseUrl + "/signup");

    cy.get("h2").contains("Enter Account Information").should("be.visible");

    return this;
  }

  verifyThatNameFieldHasCorrectValue(userName) {
    cy.get('[data-qa="name"]').should("have.value", userName);

    return this;
  }

  verifyThatEmailFieldHasCorrectValue(userEmail) {
    cy.get('[data-qa="email"]').should("have.value", userEmail);

    return this;
  }

  checkTitleRadioButton() {
    cy.get("#id_gender2").check().should("be.checked");

    return this;
  }

  setUserPassword(userPassword) {
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
    cy.get("#newsletter").check().should("be.checked");
    return this;
  }

  checkSpecialOffersCheckbox() {
    cy.get("#optin").check().should("be.checked");
    return this;
  }

  enterFirstName(userFirstName) {
    cy.get('[data-qa="first_name"]')
      .type(userFirstName)
      .should("have.value", userFirstName);

    return this;
  }

  enterLastName(userLastName) {
    cy.get('[data-qa="last_name"]')
      .type(userLastName)
      .should("have.value", userLastName);

    return this;
  }

  enterCompany(userCompany) {
    cy.get('[data-qa="company"]')
      .type(userCompany)
      .should("have.value", userCompany);

    return this;
  }

  enterAddress(userAddress1) {
    cy.get('[data-qa="address"]')
      .type(userAddress1)
      .should("have.value", userAddress1);

    return this;
  }

  enterAddress2(userAddress2) {
    cy.get('[data-qa="address2"]')
      .type(userAddress2)
      .should("have.value", userAddress2);

    return this;
  }

  selectCountry(userCountry) {
    cy.get('[data-qa="country"]')
      .select(userCountry)
      .should("have.value", userCountry);

    return this;
  }

  enterState(userState) {
    cy.get('[data-qa="state"]').type(userState).should("have.value", userState);

    return this;
  }

  enterCity(userCity) {
    cy.get('[data-qa="city"]').type(userCity).should("have.value", userCity);
    return this;
  }

  enterZipcode(userZipcode) {
    cy.get('[data-qa="zipcode"]')
      .type(userZipcode)
      .should("have.value", userZipcode);

    return this;
  }

  enterMobileNumber(userPhoneNumber) {
    cy.get('[data-qa="mobile_number"]')
      .type(userPhoneNumber)
      .should("have.value", userPhoneNumber);

    return this;
  }

  clickOnCreateAccountButton() {
    cy.get('[data-qa="create-account"]').click();

    return this;
  }

  verifyThatAccountCreatedPageIsOpened() {
    cy.url().should("include", Cypress.config().baseUrl + "/account_created");

    cy.get("h2").contains("Account Created!").should("be.visible");

    return this;
  }

  clickOnContinueButton() {
    cy.get('[data-qa="continue-button"]').click();

    return this;
  }
}

export default new SignUpPage();
