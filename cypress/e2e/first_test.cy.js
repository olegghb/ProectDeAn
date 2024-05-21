//базовый тест для понимания структуры который проверяет навигацию на странице магазина
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('First test', () => {
  it('passes', () => {
    cy.visit(Cypress.env("base_url"));
    cy.get('.btn-box > .btn-theme').click();
    // Verify location
    cy.location().should(loc => {
      console.log(loc)
      expect(loc.href).to.contain("shop");
    })
  })
})