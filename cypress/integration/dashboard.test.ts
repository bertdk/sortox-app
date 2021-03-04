describe('Test the loading of the dashboard', () => {
  it('Should sort', () => {
    cy.get('#control-button-sort').click()
  })

  it.only('Should make a new random list', () => {
    cy.visit('/')
    cy.get('#list').as('list')
    cy.get('#control-button-randomize').click()
  })
})
