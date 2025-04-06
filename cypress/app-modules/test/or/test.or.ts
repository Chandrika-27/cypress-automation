import { selectorFactory } from "../../../support/selector-factory"

export const orProducts = {
    amphora: `.page-header__logo`,
    products: selectorFactory.getH2Text('Products'),
    rejectAll: selectorFactory.getButtonText('Reject All') + ':first',
    symphonyCtrm: selectorFactory.getH3Text('Symphony CTRM'),
    alchemyCtrm: selectorFactory.getH3Text('Alchemy CTRM'),
    frontOffice: selectorFactory.getH3Text('Front office'),
    alchemyCtrmHeader: selectorFactory.getH1Text('Alchemy CTRM'),
    tradeConfirmationsManager: selectorFactory.getH3Text('Trade confirmations manager'),
    tradeConfirmationsManagerHeader: selectorFactory.getH3Text('Key functionalities'),
    freightManager: selectorFactory.getH3Text('Freight manager'),
    freightManagerHeader: selectorFactory.getH1Text('Freight manager'),
    claimsManager: selectorFactory.getH3Text('Claims manager'),
    claimsManagerHeader: selectorFactory.getH1Text('Claims manager'),
    symphonyCredit: selectorFactory.getH3Text('Symphony Credit'),
    symphonyCreditHeader: selectorFactory.getH1Text('Symphony Credit')
}

export const orSignUp = {
    signUpNow: selectorFactory.getAText('Sign up now') + ':last',
    email: '.formserv-email-field.fserv-field input',
    firstName: ':nth-child(2) > .fserv-input-text',
    lastName: ':nth-child(3) > .fserv-input-text',
    signUpButton: selectorFactory.getButtonText('Sign Up'),
    thanksText: `.fs-notifier`
}
