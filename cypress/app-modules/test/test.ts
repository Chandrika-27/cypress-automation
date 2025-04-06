import { cypressWrapper as cyUtils } from "../../support/cypress-wrapper";

import { orProducts, orSignUp } from "./or/test.or";

import { ISingUp } from "../../test-data-models/test/test.model";

export class Test {

    /**
     * @details - To click on products and verify all labels in dropdown
     */
    clickOnProductsAndVerifyLabels() {
        const selectors = [
            orProducts.symphonyCredit,
            orProducts.symphonyCtrm,
            orProducts.alchemyCtrm,
            orProducts.claimsManager,
            orProducts.freightManager,
            orProducts.tradeConfirmationsManager,
        ];

        cy.cClick(orProducts.products);
        cy.cClick(orProducts.rejectAll);

        selectors.forEach((loc) => {
            cyUtils.cIsVisible(loc);
        })
    }

    /**
     * @details - To select all modules in product and verify individual model label.
     */
    testModules() {
        this.verifyModule(orProducts.symphonyCtrm, orProducts.frontOffice);
        this.verifyModule(orProducts.alchemyCtrm, orProducts.alchemyCtrmHeader);
        this.verifyModule(orProducts.tradeConfirmationsManager, orProducts.tradeConfirmationsManagerHeader);
        this.verifyModule(orProducts.freightManager, orProducts.freightManagerHeader);
        this.verifyModule(orProducts.claimsManager, orProducts.claimsManagerHeader);
        this.verifyModule(orProducts.symphonyCredit, orProducts.symphonyCreditHeader);
    }

    /**
     * @details - To click on sign up now and verify thanks by documenting fields
     * @param signUpVal - To pass email, firstname, last name
     */
    verifySignUp(signUpVal: ISingUp) {
        const visibleClass = 'visible';

        cy.cClick(orSignUp.signUpNow);
        cy.cType(orSignUp.email, signUpVal.email);
        cy.cType(orSignUp.firstName, signUpVal.firstName);
        cy.cType(orSignUp.lastName, signUpVal.lastName);
        cy.cClick(orSignUp.signUpButton);
        cyUtils.cHasClass(orSignUp.thanksText, visibleClass);
    }

    private verifyModule(product: string, header: string) {
        cy.cClick(product);
        cyUtils.cIsVisible(header);
        cy.cClick(orProducts.amphora);
    }

}