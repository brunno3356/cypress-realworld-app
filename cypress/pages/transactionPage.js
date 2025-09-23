class TransactionPage {
  selectorsList() {
    const selectors = {
      usernameField: "#username",
      passwordField: "#password",
      loginButton: '[data-test="signin-submit"]',
      loginConfirmation: '[data-test="sidenav-home"]',
      errorAlert: '[data-test="signin-error"]',
      newTransactionButton: '[data-test="nav-top-new-transaction"]',
      contactSelect: '[data-test="user-list-item-uBmeaz5pX"]',
      amountField: "#amount",
      noteTransactionField: "#transaction-create-description-input",
      submitPaymentButton: '[data-test="transaction-create-submit-payment"]',
      transactionAlert: ".MuiAlert-message",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("http://localhost:3000");
  }

  login(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }

  verifyLoginSuccess() {
    cy.get(this.selectorsList().loginConfirmation).contains("Home");
  }

  startNewTransaction() {
    cy.get(this.selectorsList().newTransactionButton).click();
    cy.get(this.selectorsList().contactSelect).click({ force: true });
  }

  fillTransaction(amount, note) {
    cy.get(this.selectorsList().amountField).type(amount);
    cy.get(this.selectorsList().noteTransactionField).type(note);
  }

  submitTransaction() {
    cy.get(this.selectorsList().submitPaymentButton).click();
  }

  verifyTransactionSuccess() {
    cy.get(this.selectorsList().transactionAlert).contains("Transaction Submitted!");
  }
}

export default TransactionPage;