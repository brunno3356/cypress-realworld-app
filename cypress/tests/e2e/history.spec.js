import HistoryPage from "../../pages/historyPage";
import userData from "../../fixtures/user-data.json";

const historyPage = new HistoryPage();

describe("RWA Historic Tests", () => {
  it("Conta nova acessa histórico", () => {
    historyPage.accessLoginPage();
    historyPage.login(
      userData.userRegisterHistTest.username,
      userData.userRegisterHistTest.password
    );
    historyPage.goToPersonalTab();
    historyPage.checkNoTransactions();
  });

  it("Listar transações existentes", () => {
    historyPage.accessLoginPage();
    historyPage.login(userData.userSuccess.username, userData.userSuccess.password);
    historyPage.goToPersonalTab();
    historyPage.checkTransactionsPaid();
  });
});