declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to type with clearing the input first
     * @param selector - The selector for the input field
     * @param value - The value to type
     * @param options - Optional Cypress type options
     */
    cType(selector: string, value: any, options?: any): Chainable<JQuery<HTMLElement>>;
    
    cClick(selector: string, options?: any): Chainable;
  }
}
