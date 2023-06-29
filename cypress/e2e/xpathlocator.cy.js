describe('xpathlocator', () =>{
    it('find no of quick launch', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq','OrangeHRM')

        cy.get("[name='username']").type("Admin")

        cy.get("[name='password']").type("admin123")
    
        cy.get('.oxd-button').click()

        cy.xpath("//div[@class='oxd-grid-3 orangehrm-quick-launch']").should('have.length',1)

    })
})