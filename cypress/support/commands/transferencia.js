Cypress.Commands.add('realizarTransferencia', (contaOrigin, contaDestino, valor) => {
    cy.selecionarOpcaoNaComboBox('conta-origem', contaOrigin)
    cy.selecionarOpcaoNaComboBox('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})