// custom function to type
Cypress.Commands.add("cType", (selector: string, value: any, options?: any) => {
    cy.get(selector).clear().then(() => {
        cy.get(selector).type(value, options)
    })
});

// custom function to click
Cypress.Commands.add("cClick", (selector: string, options?: any) => {
    cy.get(selector).click(options);
});