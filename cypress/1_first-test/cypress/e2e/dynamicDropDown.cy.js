describe("Handling Dynamic Dropdowns functionality", () => {
    it("Dynamic dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#autocomplete").click().clear().type("In", {duration: 2000});
        // iterate over each array of ele
        cy.get("#ui-id-1 li div").each(($el, index, $list) => {
            // jquery method to get text
            cy.log($el.text());
            if($el.text() === "India"){
                // $el.click();
                cy.wrap($el).click();
            }
        });
    });
});