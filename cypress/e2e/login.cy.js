describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/')
  })
  it('login com dados válidos deve permitir entrada no sistema', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('1234765')
    cy.get('#login-section > .btn').click()

    cy.get('.toast').should('be.visible')
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})