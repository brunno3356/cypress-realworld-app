describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type('douglas')
    cy.get('[name="lastName"]').type('goncalves')
    cy.get('[name="username"]').type('douglinas')
    cy.get('[name="password"]').type('12345')
    cy.get('[name="confirmPassword"]').type('12345')
    cy.get(' [type="submit"]').click()
    cy.get('[name="username"]').type('douglinas')
    cy.get('[name="password"]').type('12345')
    cy.get(' [type="submit"]').click()
    cy.get('.MuiDialogTitle-root')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('[placeholder="Bank Name"]').type('bradesco')
    cy.get('[name="routingNumber"]').type('123456789')
    cy.get('[name="accountNumber"]').type('123456789')
    cy.get('[type="submit"]').click()
    cy.get('[data-test="user-onboarding-next"]').click()
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it.only('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type('douglas')
    cy.get('[name="lastName"]').type('goncalves')
    cy.get('[name="username"]').type('douglinas')
    cy.get('[name="password"]').type('12345')
    cy.get('[name="confirmPassword"]').type('12345')
    cy.get(' [type="submit"]').click()
    cy.get('[name="username"]').type('jonas')
    cy.get('[name="password"]').type('12335')
    cy.get(' [type="submit"]').click()
    cy.contains('Username or password is invalid').should('be.visible')
  });
});