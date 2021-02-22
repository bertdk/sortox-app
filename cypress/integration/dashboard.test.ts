describe('Test the loading of the dashboard', () => {
  it('Visits the main dashboard', () => {
    cy.visit('/')
    cy.get('#control-sort-run').click()
  })
})
