describe("Check Selection", () => {
    it("Logs the user in", () => {
        cy.visit("https://www.saucedemo.com/v1/");
        cy.get("input[name='user-name']").type("standard_user");
        cy.get("input[name='password']").type("secret_sauce");
        cy.get("input#login-button").click();
        cy.get(".product_sort_container").select(1); // idx
        cy.get(".product_sort_container").select("Price (low to high)"); // value
        cy.get(".product_sort_container").select("hilo"); // value attribute
    })
})