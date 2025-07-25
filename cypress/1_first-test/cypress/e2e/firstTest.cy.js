describe("Check Login", () => {
    it("Logs the user in", () => {
        cy.visit("https://www.saucedemo.com/v1/");
        cy.get("input[name='user-name']").type("standard_user");
        cy.get("input[name='password']").type("secret_sauce");
        cy.get("input#login-button").click();
    })
})