describe("Checkbox test", () => {
    it("It should click checkbox", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("[type='radio']").check("radio2");
        cy.get("button#mousehover").scrollIntoView();
        // cy.get("button#mousehover").trigger("mouseover");
        cy.get(".mouse-hover-content").invoke("show"); // use immediate parent as the selector
    })
});