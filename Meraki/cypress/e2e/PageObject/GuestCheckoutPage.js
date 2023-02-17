class Checkout {
    getGuest() {
        return cy.get('.form-group > :nth-child(3) > label > input');
    }
    getFirstName() {
        return cy.get('#input-firstname');
    }
    getLastName() {
        return cy.get('#input-lastname');
    }
    getEmail() {
        return cy.get('#input-email');
    }
    getPhoneNum() {
        return cy.get('#input-telephone');
    }
    getCompany() {
        return cy.get('#input-payment-company');
    }
    getAddress1() {
        return cy.get('#input-payment-address-1');
    }
    getAddress2() {
        return cy.get('#input-payment-address-2');
    }
    getCity() {
        return cy.get('#input-payment-city');
    }
    getPinCode() {
        return cy.get('#input-payment-postcode');
    }
    getCountry() {
        return cy.get('#input-payment-country');
    }
    getZone() {
        return cy.get('#input-payment-zone');
    }
    getCashOnDelivery() {
        return cy.get(':nth-child(2) > .radio > label > input');
    }
    getPrivacyPolicy() {
        return cy.get('.section-body > :nth-child(3) > label > input');
    }
    getTermsNdCond() {
        return cy.get(':nth-child(4) > label > input');
    }
    getPlaceOrder() {
        return cy.get('#quick-checkout-button-confirm > span');
    }
    selectGuest() {
        return this.getGuest().check();
    }
    firstName() {
        return this.getFirstName().type('hug');
    }
    lastName() {
        return this.getLastName().type('vug');
    }
    email() {
        return this.getEmail().type('alex.milo@tester.com');
    }
    phoneNumber() {
        return this.getPhoneNum().type('123456');
    }
    company() {
        return this.getCompany().type('Cypress Testers');
    }
    address1() {
        return this.getAddress1().type('Testing World 1');
    }
    address2() {
        return this.getAddress2().type('Testing World 2');
    }
    city() {
        return this.getCity().type('TesterVerse');
    }
    pinCode() {
        return this.getPinCode().type('123456');
    }
    country() {
        return this.getCountry().select('India');
    }
    zone() {
        return this.getZone().select('Bihar');
    }
    cashOnDelivery() {
        return this.getCashOnDelivery().check();
    }
    privacyPolicy() {
        return this.getPrivacyPolicy().check();
    }
    termsNdCond() {
        return this.getTermsNdCond().check();
    }
    placeOrder() {
        return this.getPlaceOrder().click();
    }

}

export default Checkout;