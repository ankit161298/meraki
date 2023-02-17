/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import Checkout from './PageObject/GuestCheckoutPage';
import AddToCartPage from './PageObject/AddToCartDetailsPage';

describe('Checkout a product as a guest user', () => {

    const home = new Home();
    const checkout = new Checkout();
    const addToCartDetailsPage = new AddToCartPage();
    before(() => {
        cy.visit('https://probuyerkart.com/');
    })

    it('Ordering Product as Guest', () => {
        home.getProduct().first().click();
        cy.wait(4000);
        home.getIframeBody().find('span.option-value').first().click();
        home.getIframeBody().find('a#button-cart').click();
        cy.wait(4000);
        home.getCart().invoke('show').click();
        cy.visit('https://probuyerkart.com/?route=checkout/cart');
        addToCartDetailsPage.getCheckOut().click();

        //Check Out Details
        checkout.selectGuest();
        checkout.firstName();
        checkout.lastName();
        checkout.email();
        checkout.phoneNumber();
        checkout.company();
        checkout.address1();
        checkout.address2();
        checkout.city();
        checkout.pinCode();
        checkout.country();
        checkout.zone();
        checkout.cashOnDelivery();
        checkout.privacyPolicy();
        checkout.termsNdCond();
        checkout.placeOrder();
    });

});