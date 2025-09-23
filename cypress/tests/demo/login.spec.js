describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type('Rockfeller')
    cy.get('[name="lastName"]').type('jonh')
    cy.get('[name="username"]').type('Rockfeller')
    cy.get('[name="password"]').type('12345')
    cy.get('[name="confirmPassword"]').type('12345')
    cy.get(' [type="submit"]').click()
    cy.get('[name="username"]').type('Rockfeller')
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
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type('jonh')
    cy.get('[name="lastName"]').type('Rockfeller')
    cy.get('[name="username"]').type('Rockfeller')
    cy.get('[name="password"]').type('12345')
    cy.get('[name="confirmPassword"]').type('12345')
    cy.get(' [type="submit"]').click()
    cy.get('[name="username"]').type('jonas')
    cy.get('[name="password"]').type('12335')
    cy.get(' [type="submit"]').click()
    cy.contains('Username or password is invalid').should('be.visible')
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
     cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type('pedro')
    cy.get('[name="lastName"]').type('baiano')
    cy.get('[name="username"]').type('pedrinho')
    cy.get('[name="password"]').type('12345')
    cy.get('[name="confirmPassword"]').type('12345')
    cy.get(' [type="submit"]').click()
    cy.get('[name="username"]').type('pedrinho')
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


describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type('cleitin')
    cy.get('[name="lastName"]').type('baiano')
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