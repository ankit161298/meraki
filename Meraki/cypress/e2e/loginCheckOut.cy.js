/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import Login from './PageObject/LoginPage';
import AddToCartPage from './PageObject/AddToCartDetailsPage';

describe('Checkout a product as logined user', () => {

    const home = new Home();
    const login = new Login();
    const addToCartDetailsPage = new AddToCartPage();
    before(() => {
        cy.visit('https://probuyerkart.com/');
    })

    it('Ordering Product as User', () => {
        home.getProduct().first().click();
        cy.wait(4000);
        home.getIframeBody().find('span.option-value').first().click();
        home.getIframeBody().find('a#button-cart').click();
        cy.wait(4000);
        home.getCart().click({ force: true });
        cy.visit('https://probuyerkart.com/?route=checkout/cart');
        addToCartDetailsPage.getCheckOut().click();
        login.getLoginCheckBox().check();
        login.getEmail().type('ank.si@gmail.com');
        login.getPassWord().type('123456');
        login.getLoginButton().click();
        cy.pause();


        // //Check Out Details

        // checkout.getFirstName().type('alex');
        // checkout.getLastName().type('milo');
        // checkout.getEmail().type('alex.milo@tester.com');
        // checkout.getPhoneNum().type('123456');
        // checkout.getCompany().type('Cypress Testers');
        // checkout.getAddress1().type('Testing World 1');
        // checkout.getAddress2().type('Testing World 2');
        // checkout.getCity().type('TesterVerse');
        // checkout.getPinCode().type('123456');
        // checkout.getCountry().select('India');
        // checkout.getZone().select('Bihar');
        // checkout.getCashOnDelivery().check();
        // checkout.getPrivacyPolicy().check();
        // checkout.getTermsNdCond().check();
        // checkout.getPlaceOrder().click();
    });

});