export const cypressWrapper = {
    cIsVisible: (selectors: string, isVisible: boolean = true, options?: any) => {
        if (isVisible) {
            cy.get(selectors).should('be.visible');
        }
        else {
            cy.get(selectors).should('not.be.visible');
        }
    },

    cHasClass: (selector: string, value: string, hasClass: boolean = true) => {
        const element = cy.get(selector);
        const condition = hasClass ? 'have.class' : 'not.have.class';

        element.should(condition, value)
    }
}