class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "#username",
      passwordField: "#password",
      loginButton: '[data-test="signin-submit"]',
      loginConfirmation: '[data-test="sidenav-home"]',
      errorAlert: '[data-test="signin-error"]',
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("http://localhost:3000");
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }

  checkAccessValid() {
    cy.get(this.selectorsList().loginConfirmation);
  }

  checkAccessInvalid() {
    cy.get(this.selectorsList().errorAlert);
    cy.get(this.selectorsList().errorAlert).contains("Username or password is invalid");
  }
}

export default LoginPage;