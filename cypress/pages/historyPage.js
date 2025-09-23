class HistoryPage {
  selectorsList() {
    const selectors = {
      usernameField: "#username",
      passwordField: "#password",
      loginButton: '[data-test="signin-submit"]',
      loginConfirmation: '[data-test="sidenav-home"]',
      personalButton: '[data-test="nav-personal-tab"]',
      alertNoTransactions: '[data-test="empty-list-header"]',
      transactionPaid:
        '[style="height: 128px; left: 0px; position: absolute; top: 0px; width: 100%;"]',
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
    cy.get(this.selectorsList().loginConfirmation).contains("Home");
  }

  goToPersonalTab() {
    cy.get(this.selectorsList().personalButton).click();
  }

  checkNoTransactions() {
    cy.get(this.selectorsList().alertNoTransactions).contains("No Transactions");
  }

  checkTransactionsPaid() {
    cy.get(this.selectorsList().transactionPaid).contains("paid");
  }
}

export default HistoryPage;