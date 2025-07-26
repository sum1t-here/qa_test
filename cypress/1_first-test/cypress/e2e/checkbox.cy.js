describe("Checkbox test", () => {
    it("It should click checkbox", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // check specific box
        cy.get("#checkBoxOption1").click();

        // check all box
        // cy.get("[type='checkbox']").check();
        
        // check by value
        cy.get("[type='checkbox']").check("option3");
    })
});