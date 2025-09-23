import userData from "../../fixtures/user-data.json";
import RegisterPage from "../../pages/registerPage";

const registerPage = new RegisterPage();

describe("RWA Register Tests", () => {
  it("Campos obrigatórios preenchidos", () => {
    registerPage.accessRegisterPage();
    registerPage.registerNewUser(
      userData.userRegister.firstName,
      userData.userRegister.lastName,
      userData.userRegister.username,
      userData.userRegister.password,
      userData.userRegister.confirmPassword
    );
    registerPage.submitButtonClick();
    registerPage.registerConfirmation();
  });

  it("Campo senha vazio", () => {
    registerPage.accessRegisterPage();
    registerPage.registerWithEmptyPassword(
      userData.userRegister.firstName,
      userData.userRegister.lastName,
      userData.userRegister.username,
      userData.userRegister.confirmPassword
    );
    registerPage.registerPasswordError();
  });

  it("Campo nome vazio", () => {
    registerPage.accessRegisterPage();
    registerPage.registerWithEmptyName(
      userData.userRegister.lastName,
      userData.userRegister.username,
      userData.userRegister.password,
      userData.userRegister.confirmPassword
    );
    registerPage.registerFirstNameError();
  });

  it("Nome de usuário vazio", () => {
    registerPage.accessRegisterPage();
    registerPage.registerWithEmptyUsername(
      userData.userRegister.firstName,
      userData.userRegister.lastName,
      userData.userRegister.password,
      userData.userRegister.confirmPassword
    );
    registerPage.registerUsernameError();
  });
});