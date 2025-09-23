class RegisterPage {
  selectorsList() {
    const selectors = {
      firstNameField: "#firstName",
      lastNameField: "#lastName",
      usernameField: "#username",
      passwordField: "#password",
      passwordConfirmField: "#confirmPassword",
      submitButton: '[data-test="signup-submit"]',
      confirmation: ".MuiTypography-h5",
      passwordErrorAlert: "#confirmPassword-helper-text",
      nameErrorAlert: "#firstName-helper-text",
      usernameAlert: "#username-helper-text",
    };
    return selectors;
  }

  accessRegisterPage() {
    cy.visit("http://localhost:3000/signup");
  }

  registerNewUser(firstName, lastName, username, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().passwordConfirmField).type(confirmPassword);
  }

  registerWithEmptyPassword(firstName, lastName, username, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordConfirmField).type(confirmPassword);
  }

  registerWithEmptyName(firstName, username, password, confirmPassword) {
    cy.get(this.selectorsList().lastNameField).type(firstName);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().passwordConfirmField).type(confirmPassword);
  }

  registerWithEmptyUsername(firstName, lastName, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().usernameField).clear();
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().passwordConfirmField).type(confirmPassword);
  }

  submitButtonClick() {
    cy.get(this.selectorsList().submitButton).click();
  }

  registerConfirmation() {
    cy.get(this.selectorsList().confirmation).contains("Sign in");
  }

  registerPasswordError() {
    cy.get(this.selectorsList().passwordErrorAlert);
    cy.get(this.selectorsList().passwordErrorAlert).contains("Password does not match");
  }

  registerFirstNameError() {
    cy.get(this.selectorsList().nameErrorAlert);
    cy.get(this.selectorsList().nameErrorAlert).contains("First Name is required");
  }

  registerUsernameError() {
    cy.get(this.selectorsList().usernameAlert);
    cy.get(this.selectorsList().usernameAlert).contains("Username is required");
  }
}

export default RegisterPage;