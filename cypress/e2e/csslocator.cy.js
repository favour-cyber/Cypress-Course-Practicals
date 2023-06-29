
describe('Csslocator', () => {
  it("Csslocator", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.title().should('eq','OrangeHRM')

    cy.get("[name='username']").type("Admin")

    cy.get("[name='password']").type("admin123")

    cy.get('.oxd-button').click()
  })
})