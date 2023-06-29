describe("Assertion demo", () =>{
    // it("Implicit assertion", () =>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should("include","orangehrmlive.com")
    //     cy.url().should("contain","orangehrm")
    // })

    // it("Implicit assertion without repeating cy.url and using eq and contain", () =>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should("include","orangehrmlive.com")
    //     .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     .should("contain","orangehrm")
    // })

    // it("implicit assertion would repeating should replacing with and", () =>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should("include","orangehrmlive.com")
    //     .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     .and("contain","orangehrm")
    // })

    // it("implicit assertion with a negative assertion", () =>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should("include","orangehrmlive.com")
    //     .and("not.eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/")
    //     .and("not.contain","greenhrm")
    // })

    // it("implicit assertion with the title function", () =>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.title().should("include","OrangeHRM")
    //     .and("eq","OrangeHRM")
    //     .and("contain","HRM")
    // })

    // it("Explicit Assertion with both BDD and TDD Approach", () =>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.get("input")
    // })

})