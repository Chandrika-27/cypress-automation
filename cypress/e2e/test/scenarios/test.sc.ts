import { tdSignUp } from "../../../fixtures/test/test.td";

import { Test } from "../../../app-modules/test/test";

export class TestTask1 {

  private test = new Test();

  task1() {
    it('Task1 UI', () => {
      cy.visit('https://amphora.net/');
      this.test.clickOnProductsAndVerifyLabels();
      this.test.testModules();
      this.test.verifySignUp(tdSignUp);
    })
  }

}