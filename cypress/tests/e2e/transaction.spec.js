import TransactionPage from "../../pages/transactionPage";
import userData from "../../fixtures/user-data.json";

const transactionPage = new TransactionPage();

describe("RWA Transactions Tests", () => {
  it("Envio com saldo suficiente", () => {
    transactionPage.accessLoginPage();
    transactionPage.login(userData.userSuccess.username, userData.userSuccess.password);
    transactionPage.verifyLoginSuccess();
    transactionPage.startNewTransaction();
    transactionPage.fillTransaction(userData.sendValue.value1, userData.sendValueMessages.message1);
    transactionPage.submitTransaction();
    transactionPage.verifyTransactionSuccess();
  });

  it("Enviar valor maior que o saldo", () => {
    transactionPage.accessLoginPage();
    transactionPage.login(userData.userSuccess.username, userData.userSuccess.password);
    transactionPage.verifyLoginSuccess();
    transactionPage.startNewTransaction();
    transactionPage.fillTransaction(userData.sendValue.value2, userData.sendValueMessages.message2);
    transactionPage.submitTransaction();
    transactionPage.verifyTransactionSuccess();
  });

  it("Enviar valor com saldo zero", () => {
    transactionPage.accessLoginPage();
    transactionPage.login(userData.userSuccess.username, userData.userSuccess.password);
    transactionPage.verifyLoginSuccess();
    transactionPage.startNewTransaction();
    transactionPage.fillTransaction(userData.sendValue.value1, userData.sendValueMessages.message3);
    transactionPage.submitTransaction();
    transactionPage.verifyTransactionSuccess();
  });
});