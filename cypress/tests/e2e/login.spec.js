import userData from "../../fixtures/user-data.json";
import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage();



describe("RWA Login Tests", () => {
  it("Login com usuário e senha válidos", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    loginPage.checkAccessValid();
  });

  it("Login com senha incorreta", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userFail.password);
    loginPage.checkAccessInvalid();
  });

  it("Login com nome de usuário inexistente", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userSuccess.password);
    loginPage.checkAccessInvalid();
  });
});